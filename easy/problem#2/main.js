const rev = function(number) {
    let str = number.toString();
    let arr = str.split('');
    return parseInt(arr.reverse().join(''));
    
};
const result = rev(120);
