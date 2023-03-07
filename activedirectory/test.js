function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1),200);
    })
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2),200);
    })
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3),200);
    })
}

async function uperFunc(arr) {
    let finalResult = [];
    for (var i = 0; i< arr.length; i++) {
        let result = await arr[i]();

        finalResult = finalResult.concat(result);

    }

    return finalResult
}

uperFunc([one, two, three]).then(console.log)

