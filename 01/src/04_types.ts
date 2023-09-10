let a: object;
a = {};
a = function(){
};

// 規定object只能有name這個值
let b: {name: string};
b = {name: '空'};

// 規定object有name和可選的age值
let b2: {name: string, age?: number};
b2 = {name: '空'};

// 中瓜號裡面 propName是亂取的，any表示任意類型屬性
let c: {name: string, [propName: string]: any};
c = {name : '八', age: 18, gender: '男'};


// 希望d傳兩個number參數，並且回傳也是number
let d: (a: number,b: number)=>number;
d = function(n1: number, n2: number): number{
    return n1+n2;
}

// string數組
let e: string[];
e = ['a', 'b', 'c'];
//等同於
let e2: Array<string>;
e2 = ['a', 'b', 'c'];

// tuple是固定長度的數組
let h: [string, string];
h = ['hello', 'hello'];

// enum枚舉
let i: {name: string, gender: 0 | 1};
i = {
    name: '空',
    gender: 1 // 'male'
}

// 另種枚舉
enum Gender{
    Male = 0,
    Female = 1
}
let i2: {name: string, gender: Gender};
i2 = {name: '空', gender: Gender.Male};
console.log(i2.gender === Gender.Male)

//類型的別名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

