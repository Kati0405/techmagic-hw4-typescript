type ObjectShape = {
    name: string,
    age: number,
    knowsSomething: boolean
}

function updateObjectInArray<ObjectShape>(initialArray: ObjectShape[], key: keyof ObjectShape, value: ObjectShape[keyof ObjectShape], patch: Partial<ObjectShape>): ObjectShape[] {
    const updatedArray = [...initialArray];
    const i = updatedArray.findIndex(obj => obj[key] === value)
    if (i !== -1) {
        updatedArray[i] = { ...updatedArray[i], ...patch }
    }
    return updatedArray
}

const gotChars: ObjectShape[] = [
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

]

const updatedGotChars = updateObjectInArray(gotChars, 'name', 'Hodor', { knowsSomething: true })
console.log(updatedGotChars)