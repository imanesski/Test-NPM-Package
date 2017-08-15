var gethelloWorld = function(varName) {
    returnString = `Hello World ${varName}`;
    console.log(returnString);
    return returnString;
}


module.exports = {
    gethelloWorld: gethelloWorld
}