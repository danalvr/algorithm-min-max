'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let totalArr = [];
    let minNum = 0;
    let maxNum = 0;
    let tmp = 0; 
    for(let i = 0; i < arr.length; i++){
        let total = 0;
        tmp = i;
        let tmp2 = 0;
        for (let j = 0; j < arr.length - 1; j++){
            if((tmp + tmp2) >= arr.length){
                tmp = 0;
                tmp2 = 0;
            }
            // console.log(tmp+tmp2);
            total += arr[tmp+tmp2];
            tmp2++;
        }
        // console.log(" ");
        totalArr.push(total);
    }
    // console.log(totalArr);
    
    for(let i = 0; i < totalArr.length; i++){
        for(let j = totalArr.length - 1; j >= 0; j--){
            if(totalArr[i] > totalArr[j]){
                if(i === 0 || j === 0){
                    // console.log(totalArr[i], ">", totalArr[j], 'true');
                    maxNum = totalArr[i];
                }
            } else if(totalArr[i] === totalArr[j]){
                if(i === 0 && j === 0){
                    // console.log(totalArr[i], totalArr[j], '=');
                    maxNum = totalArr[i];
                } else {
                    // console.log(totalArr[i], ">", totalArr[j], 'false');
                    continue;
                }
            } else {
                break;
            }
        }
    }
    
    for(let i = 0; i < totalArr.length; i++){
        for(let j = totalArr.length - 1; j >= 0; j--){
            if(totalArr[i] < totalArr[j]){
                if(i === 0 || j === 0){
                //    console.log(totalArr[i], "<", totalArr[j], 'true');
                   minNum = totalArr[i];
                }
            } else if(totalArr[i] === totalArr[j]){
                if(i === 0 && j === 0){
                    // console.log(totalArr[i], totalArr[j], '=');
                    minNum = totalArr[i];
                } else {
                    // console.log(totalArr[i], "<", totalArr[j], 'false');
                    continue;
                }
            } else {
                break;
            }
        }
    }
    
    console.log(minNum, maxNum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
