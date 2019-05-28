var fs = require('fs')

var numArrs = [
  {
    '0': [' ', '_', ' '],
    '1': ['|', ' ', '|'],
    '2': ['|', '_', '|']
  },
  {
    '0': [' ', ' ', ' '],
    '1': [' ', ' ', '|'],
    '2': [' ', ' ', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': [' ', '_', '|'],
    '2': ['|', '_', ' ']
  },
  {
    '0': [' ', '_', ' '],
    '1': [' ', '_', '|'],
    '2': [' ', '_', '|']
  },
  {
    '0': [' ', ' ', ' '],
    '1': ['|', '_', '|'],
    '2': [' ', ' ', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': ['|', '_', ' '],
    '2': [' ', '_', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': ['|', '_', ' '],
    '2': ['|', '_', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': [' ', ' ', '|'],
    '2': [' ', ' ', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': ['|', '_', '|'],
    '2': ['|', '_', '|']
  },
  {
    '0': [' ', '_', ' '],
    '1': ['|', '_', '|'],
    '2': [' ', '_', '|']
  }
]

// 同步读取
var data = fs.readFileSync('account.txt');
let strs = data.toString()
let lines = strs.split('\n')

var allNumArr = []

var len = parseInt(lines[0].length / 3);
for (var i = 0; i < len ; i++) {
  let numObj = {}
  allNumArr.push(numObj)
}

for(var j=0; j<3; j++){
  for (var i = 0; i < len ; i++) {
    let numObj = allNumArr[i]
    let topArrs = []
    topArrs.push(lines[j][3*i],lines[j][3*i+1],lines[j][3*i+2])
    Object.assign(numObj,{[j]:topArrs})
    allNumArr[i] = numObj
  }
}

for (var i = 0; i < allNumArr.length; i++) {
  console.log(includeNum(allNumArr[i]));
}

function includeNum(obj) {
  for (var i = 0; i < numArrs.length; i++) {
    if (equar(numArrs[i]['0'],obj['0']) && equar(numArrs[i]['1'],obj['1']) && equar(numArrs[i]['2'],obj['2'])) {
      return i;
    }
  }
}

function equar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}
