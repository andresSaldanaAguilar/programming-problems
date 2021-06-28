const num_ways = (n) => {
  if (n == 0 || n == 1) return 1;
  const nums = [1, 1];
  for (let i = 2; i <= n; i++) {
    const aux = nums[0];
    nums[0] = nums[1];
    nums[1] = nums[1] + aux;
  }
  return nums[1];
};

const num_ways_x = (n,x) => {
  if (n == 0) return 1;
  const nums = new Array(n + 1);
  nums[0] = 1;
  for (let i = 1; i <= n; i++) {
    let total = 0;
    for (let j = 1; j <= x; j++){
      if(i-j >= 0) total += nums[i-j]
    }
    nums[i] = total;
  }
  return nums[n];
};

function climbingStaircase(n, k) {
    if (n < 0) return [];
    if (n == 0) return [[]];
    const ans = [];
    for (let i = 1; i <= k ; i++){
        for(let seq of climbingStaircase(n-i, k)){
            ans.push([i,...seq]);
        }
    }
    return ans;
}

console.log(num_ways_x(2,1));
