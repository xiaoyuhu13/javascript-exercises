const fibonacci = function(n) {
    if ((typeof n) == 'string') n = parseInt(n); 
    if (n == 1) return n;
    if (n < 0) return 'OOPS';
    let a = 1, b = 1, c = 1;
    for (let i=2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
