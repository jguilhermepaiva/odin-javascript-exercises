const reverseString = function(text) {
    let reverse = text.split('')
    reverse = reverse.reverse()
    reverse = reverse.join('')
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
