// export default
function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';
    while (i >= 0 || j >= 0) {
        let x = 0;
        let y = 0;
        let sum;

        if (i >= 0) {
            x = a[i] - '0';
            i -= 1;
        }
        if (j >= 0) {
            y = b[j] - '0';
            j -= 1;
        }
        sum = x + y + carry;

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        result = sum + result;
    }
    if (carry) {
        result = carry + result;
    }
    return result;
}
// console.log(add('999', '1')); //1000

// console.log(add('99999999999999999999999999', '1')); //100000000000000000000000000
