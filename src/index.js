module.exports = function check(str, bracketsConfig) {
  let newArr = [];
  let count = 0;
  if (str.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        newArr.push(str[i])
      }

      if (str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        if (newArr[newArr.length - 1] === bracketsConfig[j][0]) {
          newArr.pop()
        } else {
          return false;
        }
      }

      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
        if (newArr[newArr.length - 1] !== bracketsConfig[j][0]) {
          newArr.push(str[i]);
        } else if (newArr[newArr.length - 1] === bracketsConfig[j][0]) {
          newArr.pop();
        } else {
          return false;
        }
      }
    }
  }

  return newArr.length === 0 ? true : false;
}