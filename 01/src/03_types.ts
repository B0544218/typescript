// // 常量
// let a: 10;
// let b: "male"|"female";
// b = "male";
// b = "female";

// let c: boolean | string;
// c = true;
// c = 'hello';

// let e: unknown;
// e = 10;
// e = "hello";
// e = true;

// let s: string;
// s = "";
// e = "hello";

// if(typeof e === "string"){
//     // 現在e是unkown，所以這行s = e是不可行的
//     s = e;
// }
// else{
//     // 但是e = s是可行的
//     e = s;
// }

// // 類型斷言 (告訴解析器unkown是個string)
// s = e as string;
// // 也可以用泛型
// s = <string> e;

// function fn(): void{
//     // 可以甚麼都不返回獲釋返回undefined
//     return undefined;
// }

// function fn2(): never{
//     // 表示只能throw東西
//     throw new Error('報錯');
// }


