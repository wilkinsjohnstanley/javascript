var heightChecker = function(heights) {
    let count = 0 
    let expected = [...heights].sort((a, b) => a - b);
    console.log(expected)
    for (let i = 0 ; i < heights.length ; i ++ ){
        if(heights[i] !== expected[i])
        count++
    }
    return count
};
heightChecker([1, 1, 4, 3, 2, 4])