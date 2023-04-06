const str1 = "abcde";
const str2 = "cdefg";


const overlap = (s1, s2) => {
    let common = 0;

    for (let i = s1.length - 1; i > 0; --i) {
        if (s2.search(s1.substr(i)) == 0) {
            common = s1.length - i;
        }
    }

    return s1 + s2.substr(common)

}

console.log(overlap(str1, str2))