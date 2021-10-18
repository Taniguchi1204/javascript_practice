// javascriptの丸め誤差
console.log(0.2*3 === 0.6); //結果：false

//解決方法
console.log(((0.2*10)*3)/ 10);
console.log((0.2*10)*3 === 0.6 * 10);