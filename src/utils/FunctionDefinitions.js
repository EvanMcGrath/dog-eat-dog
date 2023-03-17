

export function randomNum() {

    let index1 = Math.floor(Math.random() * 12)
    let index2 = Math.floor(Math.random() * 12)

    while ( index1 === index2 ) {

        index2 = Math.floor(Math.random() * 12)

    }

    const outputArray = [];

    outputArray.push(index1, index2);

    return outputArray
};




