```javascript
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;

    let start = 0;
    let end = x;

    while (start <= end) {
        let partitionX = Math.floor((start + end) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let xPartitionMin = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let xPartitionMax = (partitionX === x) ? Infinity : nums1[partitionX];

        let yPartitionMin = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let yPartitionMax = (partitionY === y) ? Infinity : nums2[partitionY];

        if (xPartitionMin <= yPartitionMax && yPartitionMin <= xPartitionMax) {
            if ((x + y) % 2 === 0) {
                return (Math.max(xPartitionMin, yPartitionMin) + Math.min(xPartitionMax, yPartitionMax)) / 2;
            }
            return Math.max(xPartitionMin, yPartitionMin);
        }
        if (xPartitionMin > yPartitionMax) {
            end = partitionX - 1;
        }
        else {
            start = partitionX + 1;
        }
    }

    return "Arrays are not sorted";
}

module.exports = findMedianSortedArrays;
```
