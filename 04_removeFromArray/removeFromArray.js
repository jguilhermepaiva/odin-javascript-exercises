const removeFromArray = function(array, ...number) {
    let newArray= [];
    
    array.forEach((item) => {
        if(!number.includes(item)){
            newArray.push(item);
        }
    });

    return newArray

     
};

// Do not edit below this line
module.exports = removeFromArray;
