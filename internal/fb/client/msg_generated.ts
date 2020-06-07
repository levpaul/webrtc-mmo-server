// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum {number}
 */
export namespace msg{
export enum Color{
  Red= 0,
  Green= 1,
  Blue= 2,
  Yellow= 3,
  Pink= 4,
  Gray= 5,
  Orange= 6,
  MAXCOLOR= 7
};
}

/**
 * @enum {number}
 */
export namespace msg{
export enum ServerMessageU{
  NONE= 0,
  MapUpdate= 1,
  LoginResponse= 2,
  LogoutResponse= 3
};

export function unionToServerMessageU(
  type: ServerMessageU,
  accessor: (obj:msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate) => msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate|null
): msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate|null {
  switch(msg.ServerMessageU[type]) {
    case 'NONE': return null; 
    case 'MapUpdate': return accessor(new msg.MapUpdate())! as msg.MapUpdate;
    case 'LoginResponse': return accessor(new msg.LoginResponse())! as msg.LoginResponse;
    case 'LogoutResponse': return accessor(new msg.LogoutResponse())! as msg.LogoutResponse;
    default: return null;
  }
}

export function unionListToServerMessageU(
  type: ServerMessageU, 
  accessor: (index: number, obj:msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate) => msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate|null, 
  index: number
): msg.LoginResponse|msg.LogoutResponse|msg.MapUpdate|null {
  switch(msg.ServerMessageU[type]) {
    case 'NONE': return null; 
    case 'MapUpdate': return accessor(index, new msg.MapUpdate())! as msg.MapUpdate;
    case 'LoginResponse': return accessor(index, new msg.LoginResponse())! as msg.LoginResponse;
    case 'LogoutResponse': return accessor(index, new msg.LogoutResponse())! as msg.LogoutResponse;
    default: return null;
  }
}
}

/**
 * @enum {number}
 */
export namespace msg{
export enum PlayerAction{
  W_DOWN= 0,
  W_UP= 1,
  A_DOWN= 2,
  A_UP= 3,
  S_DOWN= 4,
  S_UP= 5,
  D_DOWN= 6,
  D_UP= 7,
  M1_DOWN= 8,
  M1_UP= 9,
  M2_DOWN= 10,
  M2_UP= 11
};
}

/**
 * @constructor
 */
export namespace msg{
export class Vec2 {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Vec2
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Vec2 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
x():number {
  return this.bb!.readFloat32(this.bb_pos);
};

/**
 * @returns number
 */
y():number {
  return this.bb!.readFloat32(this.bb_pos + 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number x
 * @param number y
 * @returns flatbuffers.Offset
 */
static create(builder:flatbuffers.Builder, x: number, y: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

}
}
/**
 * @constructor
 */
export namespace msg{
export class Vec3 {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Vec3
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Vec3 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
x():number {
  return this.bb!.readFloat32(this.bb_pos);
};

/**
 * @returns number
 */
y():number {
  return this.bb!.readFloat32(this.bb_pos + 4);
};

/**
 * @returns number
 */
z():number {
  return this.bb!.readFloat32(this.bb_pos + 8);
};

/**
 * @param flatbuffers.Builder builder
 * @param number x
 * @param number y
 * @param number z
 * @returns flatbuffers.Offset
 */
static create(builder:flatbuffers.Builder, x: number, y: number, z: number):flatbuffers.Offset {
  builder.prep(4, 12);
  builder.writeFloat32(z);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

}
}
/**
 * @constructor
 */
export namespace msg{
export class Player {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Player
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Player {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Player= obj
 * @returns Player
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:Player):Player {
  return (obj || new Player()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Player= obj
 * @returns Player
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:Player):Player {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Player()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
posx():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
posy():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
sid():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @returns msg.Color
 */
col():msg.Color {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : msg.Color.Red;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number posx
 */
static addPosx(builder:flatbuffers.Builder, posx:number) {
  builder.addFieldFloat32(0, posx, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number posy
 */
static addPosy(builder:flatbuffers.Builder, posy:number) {
  builder.addFieldFloat32(1, posy, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number sid
 */
static addSid(builder:flatbuffers.Builder, sid:number) {
  builder.addFieldFloat64(2, sid, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param msg.Color col
 */
static addCol(builder:flatbuffers.Builder, col:msg.Color) {
  builder.addFieldInt8(3, col, msg.Color.Red);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, posx:number, posy:number, sid:number, col:msg.Color):flatbuffers.Offset {
  Player.start(builder);
  Player.addPosx(builder, posx);
  Player.addPosy(builder, posy);
  Player.addSid(builder, sid);
  Player.addCol(builder, col);
  return Player.end(builder);
}
}
}
/**
 * @constructor
 */
export namespace msg{
export class ServerMessage {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns ServerMessage
 */
__init(i:number, bb:flatbuffers.ByteBuffer):ServerMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param ServerMessage= obj
 * @returns ServerMessage
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:ServerMessage):ServerMessage {
  return (obj || new ServerMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param ServerMessage= obj
 * @returns ServerMessage
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:ServerMessage):ServerMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ServerMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns msg.ServerMessageU
 */
dataType():msg.ServerMessageU {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : msg.ServerMessageU.NONE;
};

/**
 * @param flatbuffers.Table obj
 * @returns ?flatbuffers.Table
 */
data<T extends flatbuffers.Table>(obj:T):T|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param msg.ServerMessageU dataType
 */
static addDataType(builder:flatbuffers.Builder, dataType:msg.ServerMessageU) {
  builder.addFieldInt8(0, dataType, msg.ServerMessageU.NONE);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset dataOffset
 */
static addData(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, dataType:msg.ServerMessageU, dataOffset:flatbuffers.Offset):flatbuffers.Offset {
  ServerMessage.start(builder);
  ServerMessage.addDataType(builder, dataType);
  ServerMessage.addData(builder, dataOffset);
  return ServerMessage.end(builder);
}
}
}
/**
 * @constructor
 */
export namespace msg{
export class MapUpdate {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns MapUpdate
 */
__init(i:number, bb:flatbuffers.ByteBuffer):MapUpdate {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param MapUpdate= obj
 * @returns MapUpdate
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:MapUpdate):MapUpdate {
  return (obj || new MapUpdate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param MapUpdate= obj
 * @returns MapUpdate
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:MapUpdate):MapUpdate {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MapUpdate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
seq():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @param msg.Player= obj
 * @returns msg.Player
 */
logins(index: number, obj?:msg.Player):msg.Player|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new msg.Player()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
loginsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @returns number
 */
logouts(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
};

/**
 * @returns number
 */
logoutsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Float64Array
 */
logoutsArray():Float64Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param number index
 * @param msg.Player= obj
 * @returns msg.Player
 */
psyncs(index: number, obj?:msg.Player):msg.Player|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new msg.Player()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
psyncsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number seq
 */
static addSeq(builder:flatbuffers.Builder, seq:number) {
  builder.addFieldInt32(0, seq, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset loginsOffset
 */
static addLogins(builder:flatbuffers.Builder, loginsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, loginsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createLoginsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startLoginsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset logoutsOffset
 */
static addLogouts(builder:flatbuffers.Builder, logoutsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, logoutsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createLogoutsVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startLogoutsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset psyncsOffset
 */
static addPsyncs(builder:flatbuffers.Builder, psyncsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, psyncsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createPsyncsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startPsyncsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, seq:number, loginsOffset:flatbuffers.Offset, logoutsOffset:flatbuffers.Offset, psyncsOffset:flatbuffers.Offset):flatbuffers.Offset {
  MapUpdate.start(builder);
  MapUpdate.addSeq(builder, seq);
  MapUpdate.addLogins(builder, loginsOffset);
  MapUpdate.addLogouts(builder, logoutsOffset);
  MapUpdate.addPsyncs(builder, psyncsOffset);
  return MapUpdate.end(builder);
}
}
}
/**
 * @constructor
 */
export namespace msg{
export class LoginResponse {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns LoginResponse
 */
__init(i:number, bb:flatbuffers.ByteBuffer):LoginResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LoginResponse= obj
 * @returns LoginResponse
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:LoginResponse):LoginResponse {
  return (obj || new LoginResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LoginResponse= obj
 * @returns LoginResponse
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:LoginResponse):LoginResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LoginResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
seq():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param msg.Player= obj
 * @returns msg.Player|null
 */
player(obj?:msg.Player):msg.Player|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new msg.Player()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number seq
 */
static addSeq(builder:flatbuffers.Builder, seq:number) {
  builder.addFieldInt32(0, seq, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset playerOffset
 */
static addPlayer(builder:flatbuffers.Builder, playerOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, playerOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace msg{
export class LogoutResponse {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns LogoutResponse
 */
__init(i:number, bb:flatbuffers.ByteBuffer):LogoutResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LogoutResponse= obj
 * @returns LogoutResponse
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:LogoutResponse):LogoutResponse {
  return (obj || new LogoutResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LogoutResponse= obj
 * @returns LogoutResponse
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:LogoutResponse):LogoutResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LogoutResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
seq():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
sid():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number seq
 */
static addSeq(builder:flatbuffers.Builder, seq:number) {
  builder.addFieldInt32(0, seq, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number sid
 */
static addSid(builder:flatbuffers.Builder, sid:number) {
  builder.addFieldFloat64(1, sid, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, seq:number, sid:number):flatbuffers.Offset {
  LogoutResponse.start(builder);
  LogoutResponse.addSeq(builder, seq);
  LogoutResponse.addSid(builder, sid);
  return LogoutResponse.end(builder);
}
}
}
/**
 * @constructor
 */
export namespace msg{
export class PlayerInput {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns PlayerInput
 */
__init(i:number, bb:flatbuffers.ByteBuffer):PlayerInput {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param PlayerInput= obj
 * @returns PlayerInput
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:PlayerInput):PlayerInput {
  return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param PlayerInput= obj
 * @returns PlayerInput
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:PlayerInput):PlayerInput {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
seq():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @returns msg.PlayerAction
 */
actions(index: number):msg.PlayerAction|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? /**  */ (this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index)) : /**  */ (0);
};

/**
 * @returns number
 */
actionsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint8Array
 */
actionsArray():Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number seq
 */
static addSeq(builder:flatbuffers.Builder, seq:number) {
  builder.addFieldInt32(0, seq, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset actionsOffset
 */
static addActions(builder:flatbuffers.Builder, actionsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, actionsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<msg.PlayerAction> data
 * @returns flatbuffers.Offset
 */
static createActionsVector(builder:flatbuffers.Builder, data:msg.PlayerAction[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startActionsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, seq:number, actionsOffset:flatbuffers.Offset):flatbuffers.Offset {
  PlayerInput.start(builder);
  PlayerInput.addSeq(builder, seq);
  PlayerInput.addActions(builder, actionsOffset);
  return PlayerInput.end(builder);
}
}
}
