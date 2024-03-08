let number1 = 5;
let number2 = 5;

if (number1 > number2) {
    console.log(`${number1} > ${number2}`);
} else if (number1 < number2) {
    console.log(`${number1} < ${number2}`);
} else {
    console.log(`${number1} = ${number2}`);
}



function numberProperty(join) {
    const length = join.length;

    const kods = '*'.repeat(length + 3);
    console.log(kods);

    console.log('* Hello, world *');

    console.log(kods);
}

numberProperty("Hello, world");




let mypromt = prompt("Номерди киргизиңиз:");
while (mypromt.toLowerCase() !== "стоп") {
    if (!isNaN(mypromt)) {
        console.log( mypromt);
    }
    mypromt = prompt( "Номерди киргизиңиз:");
}





const myObject = {
    stringProperty: "Салам, дуйно!",
    numberProperty: 42,
    booleanProperty: true,
    arrayProperty: [1, 2, 3, 4, 5],
    objectProperty: { key: "value" },
    undefinedProperty: undefined,
    nullProperty: null
};

console.log(Object.keys(myObject));
console.log(Object.values(myObject));


