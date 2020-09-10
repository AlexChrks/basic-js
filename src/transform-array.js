module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();

  let newArr = [];
  let discarded = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "--discard-next") {
      discarded.push(++i);
    }

    else if (arr[i] === "--double-prev") {
      if (i > 0 && discarded.includes(i - 1) == false) {
        newArr.push(arr[i - 1]);
      }
    }

    else if (arr[i] === "--discard-prev") {
      if (newArr.length > 0 && discarded.includes(i - 1) == false) {
        newArr.pop();
        discarded.push(i - 1);
      }
    }

    else if (arr[i] === "--double-next") {
      if (++i < arr.length) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
      }
    }

    else {
      newArr.push(arr[i]);
    }

  }

  return newArr;
}
