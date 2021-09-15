var countSubstrings = function (s) {
  let memo = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      const substring = s.substring(i, j + 1);
      const memoVal = memo[`${substring}`];
      if (memoVal) res += memoVal;
      else {
        const reversedSubstring = substring.split("").reverse().join("");
        if (reversedSubstring === substring) {
            memo[`${substring}`] = 1;
        }
        else if(reversedSubstring !== substring) {
            memo[`${substring}`] = 0;
        }
      }
    }
  }
};
[a,ab,abb,c,b]
"abbc"
countSubstrings("ab");
// store previous solution to avoid computing same operation on the following parts

// "a"; = 1
// "aa"; = 2 + 1
// "aaa"; = 3 + 2 + 1
// "aaaa"; = 4 + 5 + 1

// "ab"; = 2
// "abc"; = 3

[a=1,b=1, ]
// "ab"; = 2
// "abb"; = (2) + 1 + 1         = 4
// "aba"; = 3

// 'abc'

// 'aaa'

//brute force (n^2)
// num = 0
// foreach i starting from 0 to string length-1:
//     foreach j starting from 0 to string length-1:
//         if substring(i,j) == reverse(substring(i,j)) num++
// return num
