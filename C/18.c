#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int** quadruplets;
    int size;
    int capacity;
} ResultList;

void initResultList(ResultList* res) {
    res->quadruplets = NULL;
    res->size = 0;
    res->capacity = 0;
}

void addQuadruplet(ResultList* res, int a, int b, int c, int d) {
    if (res->size == res->capacity) {
        res->capacity = res->capacity ? res->capacity * 2 : 16;
        res->quadruplets = realloc(res->quadruplets, res->capacity * sizeof(int*));
    }
    int* quad = malloc(4 * sizeof(int));
    quad[0] = a;
    quad[1] = b;
    quad[2] = c;
    quad[3] = d;
    res->quadruplets[res->size++] = quad;
}

int cmpInt(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    *returnColumnSizes = NULL;
    if (numsSize < 4) return NULL;
    qsort(nums, numsSize, sizeof(int), cmpInt);
    ResultList result;
    initResultList(&result);
    for (int i = 0; i < numsSize - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (int j = i + 1; j < numsSize - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            int left = j + 1;
            int right = numsSize - 1;
            long currentTarget = (long)target - (long)nums[i] - (long)nums[j];
            while (left < right) {
                long sum = (long)nums[left] + (long)nums[right];
                if (sum == currentTarget) {
                    addQuadruplet(&result, nums[i], nums[j], nums[left], nums[right]);
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < currentTarget) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    *returnSize = result.size;
    if (result.size > 0) {
        *returnColumnSizes = malloc(result.size * sizeof(int));
        for (int i = 0; i < result.size; i++) {
            (*returnColumnSizes)[i] = 4;
        }
    }
    return result.quadruplets;
}