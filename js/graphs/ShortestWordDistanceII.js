const words = ["practice", "makes", "perfect", "coding", "makes"];

// [
// practice = 3
// coding = 0
// ]
// currWord = makes

const word1 = "coding";
const word2 = "practice";

const shortestPath = (words, word1, word2) => {
  const map = new Map();
  let currWord;
  for (let word of words) {
    console.log(map);
    if (currWord) map.set(currWord, [map.get(currWord)[0] + 1, false]);
    if (word === word1) {
      if (!map.has(word1)) map.set(word1, [0, false]);
      else if (currWord !== word1 && map.get(word2) < map.get(word1)) {
        map.set(word1, [0, false]);
        map.set(word2, [map.get(word2)[0], true]);
      } else if (currWord !== word1 && map.get(word2) >= map.get(word1)) {
        map.set(word1, [map.get(word1)[0], true]);
      } else map.set(word1, [map.get(word1)[0] + 1, false]);
      currWord = word1;
    }
    if (word === word2) {
      if (!map.has(word2)) map.set(word2, [0, false]);
      else if (currWord !== word2 && map.get(word1) < map.get(word2)) {
        map.set(word2, [0, false]);
        map.set(word1, [map.get(word1)[0], true]);
      } else if (currWord !== word2 && map.get(word1) >= map.get(word2)) {
        map.set(word2, [map.get(word2)[0], true]);
      } else map.set(word2, [map.get(word2)[0] + 1, false]);
      currWord = word2;
    }
  }
  console.log(map);
  const val1 = map.get(word1);
  const val2 = map.get(word2);
  if (val1[0] === 0) return val2[0];
  if (val2[0] === 0) return val1[0];
  if (val2[0] < val1[0] && val2[1]) return val2[0];
  if (val2[0] < val1[0] && !val2[1]) return val1[0];
  if (val1[0] < val2[0] && val1[1]) return val1[0];
  if (val1[0] < val2[0] && !val1[1]) return val2[0];
};

console.log(shortestPath(words, word1, word2));
