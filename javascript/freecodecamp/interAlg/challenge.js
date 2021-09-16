/* SEEK AND DESTROY */

//  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr,...rem) {
    let toRem = rem;
    let arr2 = [];

    for(let i = 0; i < arr.length;i++){
        for(let j = 0;j < toRem.length ;j++){
            if(arr[i] == toRem[j]){
                arr[i] = null;
            }
        }
        if(arr[i] != null){
          arr2.push(arr[i]);
        }
    }
    return arr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

