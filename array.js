// 配列リテラル
var data = ['javascript','Ajax','ASP.NET'];
console.log(data[0]); //dataの１番目を取得

var data = ['javascript',['jQuery', 'prototype.js'],'ASP.NET'];
console.log(data[1][0]); //dataの２番目要素である配列の１番目を取得（jQuery）

// オブジェクトリテラル{キー名：値, キー名：値,...}
var obj = {x:1,y:2,z:3};
console.log(obj.x);
console.log(obj['x']);

// 演算子
var a = 3;
var y = x++;
console.log(x); //結果：４
console.log(y); //結果：３

var a = 3;
var y = ++x;

console.log(x); //結果：４
console.log(y); //結果：４
