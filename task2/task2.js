"use strict";
function updateObjectInArray(initialArray, key, value, patch) {
    const updatedArray = [...initialArray];
    const i = updatedArray.findIndex(obj => obj[key] === value);
    if (i !== -1) {
        updatedArray[i] = Object.assign(Object.assign({}, updatedArray[i]), patch);
    }
    return updatedArray;
}
const gotChars = [
    {
        name: 'John Snow',
        age: 14,
        knowsSomething: false,
    },
    {
        name: 'Hodor',
        age: 40,
        knowsSomething: false,
    },
    {
        name: 'Tyrion Lannister',
        age: 32,
        knowsSomething: true,
    },
];
const updatedGotChars = updateObjectInArray(gotChars, 'name', 'Hodor', { knowsSomething: true });
console.log(updatedGotChars);
