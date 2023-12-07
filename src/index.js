/*
 // constとlet
var val1 = "var変数";
console.log(val1);
 */

/*
// 文字列代入
const val1 = "const変数"

const message = `メッセージは${val1}です`
console.log(message)
 */

/*
// アロー関数
const func1 = (str) => {
    return str
}
// 以下も可能
const func2 = (str) => str;
console.log(func1("関数テストです"))
*/

/*
// 分割代入
const myProfile = {
    name: "uta",
    age: 22
}

const currentProfile = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
console.log(currentProfile)
*/

/*
// デフォルト値
const sayHello = (name="unknown") => console.log(`こんにちは${name}さん`)
sayHello()
*/

/*
// オブジェクトの省略
const name = "uta"
const age = 22

const myProfile = {name ,age}
console.log(myProfile)
*/

/*
// スプレッド構文
// 1.配列の展開
const array1 = [1,2]

const sumFunc = (num1,num2) => console.log(num1+num2)
sumFunc(...array1)

// 2.まとめる
const array2 = [1,2,3,4,5]
const [num1,num2,...arr3] = array2
console.log(arr3)

// 3.配列のコピー、結合
const array4 = [1,2,3,4,5]
const array5 = [6,7,8,9,10]

const arry6 = [...array4, ...array5]
console.log(arry6)
*/


/*
// map,filter
const nameArray = ["uta","uta2","uta3"]
const numArray = [1,2,3]

// 従来
for (let index = 0; index < mapArray.length; index++) {
    console.log(mapArray[index])
    
}

// map
nameArray.map((name) => {
    console.log(name)
})

// filter
const numArray2 = numArray.filter((num) => {
    return num % 2 === 1
})
console.log(numArray2)

nameArray.map((name,index) => console.log(`${index +1}番目は${name}です`))

const newNameArray = nameArray.map((name) => {
    if (name === "uta") {
        return name
    }else{
        return `${name}さん`
    }
})
console.log(newNameArray)
*/

/*
// 三項演算子
const num = 1000
const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を設定してください"
console.log(formattedNum)
*/