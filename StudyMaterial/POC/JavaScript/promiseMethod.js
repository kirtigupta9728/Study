    // Promise.any and Promise.race()

let first_resolved_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise after 1 second");
    }, 1000);
});

let second_resolved_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

let third_resolved_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Resolved after 3 seconds");
    }, 1000);
});

try {
    let result_1 = Promise.any([
        first_resolved_promise,
        second_resolved_promise,
        third_resolved_promise,
    ]);

     result_1.then((data) => console.log("Any's data: " + data));

    // let result_2 = Promise.race([
    //     first_resolved_promise,
    //     second_resolved_promise,
    //     third_resolved_promise,
    // ]);

    // result_2.then((data) => console.log("Race's data: " + data));
} catch (error) {
    console.log(error);
}