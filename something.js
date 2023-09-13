export function doSomething(x) {
    console.log(`doing something with ${x}`);
}

export function memoFinder() {
    let arr = [];
    for(var i=0; i<1000000; i++) {
        arr[i] = i;
    }
    let max = arr.length;

    let o = {};
    
    return function getIndex(o) {
        let timeKey = `findIndex(${o})`
        let result;
        console.time(timeKey);
        result = binarySearch(arr, o);
        console.timeEnd(timeKey);
        return result;
    }
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            // Found the target
            return mid;
        } else if (arr[mid] < target) {
            // Continue search on right side
            left = mid + 1;
        } else {
            // Continue search on left side
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

export function* fibo(max) {
    let prev = 0;
    let curr = 1;

    for(var i = 0; i<max; i++) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
        // let temp = curr;
        // curr = prev + curr;
        // prev = temp;       
    }
}
export function reverse(sentence) {
    return sentence.split(' ').map(w => w.split('').reverse().join('')).join(' ')
}

export function mostRepeated(arr) {
    let hm = {}
    let max = 0;
    let most;
    arr.forEach( (v, i, a) => {
        hm[v] = v in hm ? hm[v] + 1 : 0;
        if(hm[v] > max) {
            max = hm[v];
            most = [v];
        }
    });
    return most;
}