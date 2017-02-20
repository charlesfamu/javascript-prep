//ES6

class FriendsOfFriends {

//   Create an adjacency list
  list (arr) {
    let result = [];
    let hash = {};
    let len = arr.length;
    let last = arr[len - 1];

    for (let i = 0; i < len - 1; i++) {
      let vertex = arr[i].split("-");
      if (!(vertex[0] in hash)) {
        hash[vertex[0]] = [];
      }

      if (!(vertex[1] in hash)) {
        hash[vertex[1]] = [];
      }

      hash[vertex[0]].push(vertex[1]);
      hash[vertex[1]].push(vertex[0]);
    }

    let lastHash = hash[last];

    for (let j = 0; j < lastHash.length; j++) {
      let fofArr = hash[lastHash[j]];
      for (let k = 0; k < fofArr.length; k++) {
         if (fofArr[k] !== last && lastHash.indexOf(fofArr[k]) === -1) {
           result.push(fofArr[k]);
         }
      }
    }

    return result.sort().join(",");
  }
}
