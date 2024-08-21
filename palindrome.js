function firstPalindrome(arr) {
    for (let word of arr) {
        if (word === word.split('').reverse().join('')) {
            return word;
        }
    }
    return null;
}
