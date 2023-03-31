/*
    Spread & Rest Operators in JS
*/

function displayElements(lang1, lang2, lang3){
    console.log("Best Lang: ", lang1);
    console.log("2nd Best Lang: ", lang2);
    console.log("3rd Best Lang: ", lang3);

}

let top3_lang = ['JS', 'Python', 'Java']
displayElements(top3_lang[0], top3_lang[1], top3_lang[2]) // ❌
console.log("- - -");
displayElements(...top3_lang) // ✅ passes the whole array as arguments. 