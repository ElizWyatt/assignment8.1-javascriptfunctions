function isEven(num) {
    if (num % 2 == 0) {
        console.log("True");
    } else {
        console.log ("False");
    }
    
}
isEven(5);
isEven(4);

function factorialize(num) {

    var result = 1;

    for (var i = 2; i <= num; i++) {
        result = result * i;
    }

    return result;

}

factorialize(3);

function KebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}

KebabToSnake("Hello_World");
KebabToSnake("Dogs_are_awesome");

