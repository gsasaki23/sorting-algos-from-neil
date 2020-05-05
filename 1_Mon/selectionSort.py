"""
    Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
"""


def selection_sort(nums):

    length = len(nums)
    target_idx = 0
    min_idx = 0

    while target_idx < length:
        for i in range(target_idx, length):
            if nums[i] < nums[min_idx]:
                min_idx = i

        if nums[target_idx] is not nums[min_idx]:
            nums[target_idx], nums[min_idx] = nums[min_idx], nums[target_idx]

        target_idx += 1
        min_idx = target_idx
    return nums
