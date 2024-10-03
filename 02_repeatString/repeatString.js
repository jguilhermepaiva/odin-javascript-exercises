const repeatString = function(text, numero) { 
    let response="";

    if(numero < 0){
        return "ERROR"
    }

    for (let i=0; i< numero; i++){
        response+=text;
    }
        
    return response;
    
};

// Do not edit below this line
module.exports = repeatString;
