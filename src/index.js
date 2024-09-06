
module.exports = function towelSort (matrix) {
  let result;
  if (matrix) {
    result = []
  } else return []
  
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j++) {
      (i + 1) % 2 === 0 ? result.push(matrix[i][matrix[i].length - j - 1]) : result.push(matrix[i][j])
    }
  }
  return result;
}

