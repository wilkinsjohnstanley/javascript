var merge = function(nums1, m, nums2, n){
    let i = 0 ; //Pointer for nums1
    let j = 0 ; //Pointer for nums2
    while(j<nums2.length){
        if(i >= m + j || nums2[j] <= nums1[i]){ //m is the no. of valid numbers
            nums1.splice(i, 0, nums2[j])
            nums1.pop()
            j++
        }
        i++
    }
    console.log(nums1)
} 
merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3)