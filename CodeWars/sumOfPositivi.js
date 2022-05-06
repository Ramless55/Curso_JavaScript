const positiveSum = (arr) => {
    result = 0;
    arr.forEach(num => num > 0 ? result = result + num : 0);
    return result;
  }
positiveSum([1,-4,7,12]);

//! con .reduce:
//TODO: return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);