// 分割代入
let data = [10,20,30,40,50];
let [a,b,c,...other] = data
console.log(a); //結果：10
console.log(b); //結果：20
console.log(other); //結果：[30,40,50]

// 変数の入れ替え
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x,y); //結果：２、１

//分割代入（オブジェクト）
let book = {title:'Javaポケットリファレンス',publish:'技術評論社',price:2680};
let {price,title,memo = 'なし'} = book;
console.log(title); //結果：Javaポケットリファレンス
console.log(price); //結果：2680
console.log(memo);  //結果：なし

//入れ子となったオブジェクトを分解する
let book = {title:'Javaポケットリファレンス',publish:'技術評論社',price:2680,
            other: {keywd:'java SE 8','logo.jpg'}};
let {title,other,other:{keywd}} = book;
console.log(title); //結果：Javaポケットリファレンス
console.log(other); //結果：{keywd:'java SE 8','logo.jpg'}
console.log(keywd); //結果：java SE 8

//変数の別名を指定する
let book = {title:'Javaポケットリファレンス',publish:'技術評論社',price:2680};
let {title: name, pubulish: company};
console.log(name);    //結果：Javaポケットリファレンス
console.log(company); //結果：技術評論社