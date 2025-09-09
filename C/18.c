//todo: this code passes 288/294 testcases in leetcode, must become faster

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct { int i, j; } Pair;

typedef struct Node {
    Pair p;
    struct Node* next;
} Node;

typedef struct {
    int sum;
    Node* list;
} Entry;

typedef struct {
    Entry* entries;
    int size;
    int cap;
} Dict;

void dictInit(Dict* d) {
    d->entries = NULL;
    d->size = 0;
    d->cap = 0;
}

Entry* dictFind(Dict* d, int sum) {
    for (int i = 0; i < d->size; i++) {
        if (d->entries[i].sum == sum) return &d->entries[i];
    }
    return NULL;
}

Entry* dictGetOrCreate(Dict* d, int sum) {
    Entry* e = dictFind(d, sum);
    if (e) return e;
    if (d->size == d->cap) {
        d->cap = d->cap ? d->cap * 2 : 16;
        d->entries = realloc(d->entries, d->cap * sizeof(Entry));
    }
    d->entries[d->size].sum = sum;
    d->entries[d->size].list = NULL;
    return &d->entries[d->size++];
}

void dictInsert(Dict* d, int sum, Pair p) {
    Entry* e = dictGetOrCreate(d, sum);
    Node* n = malloc(sizeof(Node));
    n->p = p;
    n->next = e->list;
    e->list = n;
}

int cmpQuad(const void* a, const void* b) {
    const int* qa = *(const int**)a;
    const int* qb = *(const int**)b;
    for (int i = 0; i < 4; i++) {
        if (qa[i] != qb[i]) return qa[i] - qb[i];
    }
    return 0;
}

int cmpInt(const void* a, const void* b) {
    return (*(int*)a) - (*(int*)b);
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize, int** returnColumnSizes) {
    *returnSize = 0;
    *returnColumnSizes = NULL;
    if (numsSize < 4) return NULL;
    qsort(nums, numsSize, sizeof(int), cmpInt);
    Dict sumTable, needTable;
    dictInit(&sumTable);
    dictInit(&needTable);
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            int sum = nums[i] + nums[j];
            dictInsert(&sumTable, sum, (Pair){i, j});
            dictInsert(&needTable, target - sum, (Pair){i, j});
        }
    }
    int cap = 1024, count = 0;
    int** res = malloc(cap * sizeof(int*));
    for (int si = 0; si < sumTable.size; si++) {
        int sum = sumTable.entries[si].sum;
        Node* list1 = sumTable.entries[si].list;
        Entry* needEntry = dictFind(&needTable, sum);
        if (!needEntry) continue;
        Node* list2 = needEntry->list;
        for (Node* a = list1; a; a = a->next) {
            for (Node* b = list2; b; b = b->next) {
                int i1 = a->p.i, j1 = a->p.j;
                int i2 = b->p.i, j2 = b->p.j;
                if (i1==i2 || i1==j2 || j1==i2 || j1==j2) continue;
                if (j1 >= i2) continue;
                int prev_i1 = -1, prev_j1 = -1;
                int* q = malloc(4 * sizeof(int));
                q[0] = nums[i1];
                q[1] = nums[j1];
                q[2] = nums[i2];
                q[3] = nums[j2];
                if (count == cap) {
                    cap *= 2;
                    res = realloc(res, cap * sizeof(int*));
                }
                res[count++] = q;
            }
        }
    }
    qsort(res, count, sizeof(int*), cmpQuad);
    int uniqueCount = 0;
    for (int i = 0; i < count; i++) {
        if (i == 0 || cmpQuad(&res[i], &res[i-1]) != 0) {
            res[uniqueCount++] = res[i];
        }
    }
    res = realloc(res, uniqueCount * sizeof(int*));
    *returnSize = uniqueCount;
    *returnColumnSizes = malloc(uniqueCount * sizeof(int));
    for (int i = 0; i < uniqueCount; i++) {
        (*returnColumnSizes)[i] = 4;
    }
    return res;
}
