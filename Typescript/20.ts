function isValid(s: string): boolean {
    const stack: string[] = [];
    const paranDict = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };
    const chars = s.split("");
    chars.forEach((char) => {
        if (paranDict[stack[stack.length - 1] as keyof typeof paranDict] === char) {
            stack.pop();
        }
        else {
            stack.push(char);
        }
        console.log(stack);
    });
    if (stack.length === 0) {
        return true;
    }
    return false;
};