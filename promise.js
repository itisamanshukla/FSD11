let success = true;

let promise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        if (success) {
            resolve("task done");
        } 
        else {
            reject("failed");
        }

    }, 2000); // 2 seconds delay

});

promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});