function productOfNonZero(arr) {
    return arr.filter(x => x !== 0).reduce((product, x) => product * x, 1);
}
