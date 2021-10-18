// 変数について

// 変数宣言の方法①（var 変数名[＝初期値],...）
var msg;
var x,y;

// 変数宣言の方法②　（let 変数名）
let msg;
let x, y;
let greeting = 'こんにちは、世界！';

// letとvarの違いは変数の重複を許可しない
let msg = "abc";
let msg = "def"; // =>「Identifier 'msg has already been declared」

