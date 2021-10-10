import fillDataToOptionEl from "./questionanswer.js"

// Because the order of question data has to be generated randomly upon every new test,
// then one solution to achieve that is simply sorting the initial data based on the random number
// which is generated using random generating function provided by Math object
// as shown in the function named sortDataRandomly below

function sortDataRandomly (data) {
    let resultdata = []; // reset first

    // data transformation using random generating function,
    // the results will be given to each elements of data array
    let transdata = data.map(function(el, i) {
        return {index: i, value: Math.floor(Math.random() * Math.pow(10,16))};
    })
    
    // sort the transformed data
    transdata.sort(function(a, b) {
        if (a.value < b.value) {
            return -1;
        }
        if (a.value > b.value) {
            return 1;
        }
        return 0;
    });
    
    for (let el of transdata) {
        resultdata.push(data[el.index]);
    }

    console.log("resultdata :", resultdata);
    return resultdata;
}

function initiateData (qadata) {
    let data = sortDataRandomly(qadata);
    fillDataToOptionEl(data, 0);
    window.qaData = data;
}

export default initiateData;