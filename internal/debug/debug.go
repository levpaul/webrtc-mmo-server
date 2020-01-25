package debug

import (
	flatbuffers "github.com/google/flatbuffers/go"
	"github.com/levpaul/idolscape-backend/internal/fb"
	"github.com/levpaul/idolscape-backend/internal/network"
	"github.com/rs/zerolog/log"
	"math/rand"
	"net"
	"os"
)

const debugSocket = "/opt/idolscape/debug.sock"

type client struct {
	conn net.Conn
}

func StartDebugServer() {
	os.Remove(debugSocket)
	socket, err := net.Listen("unix", debugSocket)
	if err != nil {
		log.Fatal().Err(err).Send()
	}
	defer socket.Close()

	for {
		conn, err := socket.Accept()
		if err != nil {
			log.Fatal().Msg("Failed to accept socket connection")
		}
		log.Info().Strs("Addresses", []string{conn.LocalAddr().String(), conn.RemoteAddr().String()}).Msg("Accepted new client")

		newClient := &client{conn: conn}
		go newClient.handle()
	}
}

func (c *client) handle() {
	for {
		buf := make([]byte, 512)
		nr, err := c.conn.Read(buf)
		if err != nil {
			return
		}

		data := buf[0:nr]
		c.handleInputLine(string(data))
	}
}

func (c *client) handleInputLine(input string) {
	conn, err := network.DebugGetLiveConnection()
	if err != nil {
		c.conn.Write([]byte("No active connections found\n"))
		return
	}
	c.conn.Write([]byte("Adding new player\n"))
	conn.SendNewPlayerState(genRandomPlayer())
}

func genRandomPlayer() []byte {
	mss := new(fb.MessageT)
	mss.Data = &fb.GameMessageT{
		Type: fb.GameMessageMapUpdate,
		Value: &fb.MapUpdateT{
			Seq: 234235523,
			Logins: []*fb.PlayerT{{
				Pos: &fb.Vec2T{rand.Float32() * 10, rand.Float32() * 10},
				Sid: 12342345,
				Col: fb.ColorBlue,
			}},
			Logouts: nil,
			Psyncs:  nil,
		},
	}

	b := flatbuffers.NewBuilder(500)
	b.Finish(mss.Pack(b))

	return b.FinishedBytes()
}
