#include <string.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

char* convert(char* s, int numRows) {
    if (numRows == 1) {
        return s;
    }
    int numGroup = strlen(s) / (numRows * 2 - 2) + 1;
    int numColumns = numGroup * (numRows - 1);
    char zigZag[numRows][numColumns];
    memset(zigZag, 0, sizeof(zigZag));
    for (int i = 0; i < strlen(s); i++) {
        int rowIndex = (i / (numRows - 1)) % 2 ? (numRows - 1) - i % (numRows - 1) : i % (numRows - 1);
        int colIndex = i / (2 * numRows - 2) * (numRows - 1) + max(0, i % (2 * numRows - 2) - numRows + 1);
        zigZag[rowIndex][colIndex] = s[i];
    }
    char* output = malloc(strlen(s) + 1);
    int outputIndex = 0;
    for (int i = 0; i < numRows; i++) {
        for (int j = 0; j < numColumns; j++){
            if (zigZag[i][j] != '\0') {
                output[outputIndex++] = zigZag[i][j];
            }
        }
    }
    output[outputIndex] = '\0';
    return output;
}