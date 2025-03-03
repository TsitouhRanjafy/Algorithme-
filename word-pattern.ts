const extractPattern = (pattern: string | Array<string>): Array<Array<number>> => {
    let verifiedPattern: Array<boolean> = new Array(pattern.length).fill(false) 
    let patternExtracted: Array<Array<number>> = []

    const findDuplicateIndices = (vPattern: Array<boolean>,i: number = 0,j: number = 1,temp: Array<number> = []) => {
        if (i >= pattern.length) return;
        if (vPattern[i]) {
            findDuplicateIndices(vPattern,i+1,i+2)
        } else if (j < pattern.length) {
            if ((pattern[i] == pattern[j]) && !vPattern[j]) {
                temp.push(j);
                vPattern[j] = true;
            }
            findDuplicateIndices(vPattern,i,j+1,temp)
        } else {
            vPattern[i] = true
            patternExtracted.push(temp)
            findDuplicateIndices(vPattern,i+1,i+2)
        }
        
    }
    findDuplicateIndices(verifiedPattern)
    return patternExtracted;
}

const stringToArray = (str: string): Array<string> => {
    return str.split(new RegExp(" ","g"));
}

let pattern = "abba"
let s = "dog cat cat dog"

const patternExtracted = extractPattern(pattern)
const patternOfS = extractPattern(stringToArray(s))

const isTheSamePattern = (JSON.stringify(patternExtracted) == JSON.stringify(patternOfS))

console.log(isTheSamePattern);

















// Non récursive
const extractPattern2 = (pattern: string | Array<string>): Array<Array<number>> => {
    let verifiedPattern: Array<boolean> = new Array(pattern.length).fill(false) 
    let patternExtracted: Array<Array<number>> = []

    for (let i = 0;i < pattern.length;i++){
        if (verifiedPattern[i]) continue 
        verifiedPattern[i] = true;
        let temp: Array<number> = []

        for (let j = i + 1;j < pattern.length;j++){
            if (verifiedPattern[j]) continue;
            if (pattern[i] == pattern[j]) {
                temp.push(j);
                verifiedPattern[j] = true
            }
        }
        patternExtracted.push(temp)
    }
    return patternExtracted;
}




