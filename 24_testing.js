function concatStr(str1, str2) {
    if(str1 !== 'string' || str2 !== 'string'){
        let tempStr1 = toString(str1)
        let tempStr2 = toString(str2)

        return tempStr1 + tempStr2;
    }
    return str1 + str2;
}
console.log(concatStr(1,2))
// expect(concatStr(1, 2)).toBe("abcdef")