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

console.log(num_ways(100));
