function findSubstring(s: string, words: string[]): number[] {
    let indices = [];
    let wordsObject: Record<string, number> = {};
    for (let j = 0; j < words.length; j++) {
        if (wordsObject[words[j]]) {
            wordsObject[words[j]] += 1;
        }
        else {
            wordsObject[words[j]] = 1;
        }
    }
    for (let i = 0; i <= s.length - words[0].length * words.length; i++) {
        const wordsCopy = structuredClone(wordsObject);
        let flag = true;
        for (let j = 0; j < words.length; j++) {
            let substring = s.slice(i + j * words[0].length, i + (j + 1) * words[0].length);
            if (!wordsCopy[substring]) {
                flag = false;
                break;
            }
            wordsCopy[substring]--;
        }
        if (flag) {
            indices.push(i);
        }
    }
    return indices;
};