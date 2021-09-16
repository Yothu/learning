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

/* PIG LATIN */

//  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    let arr = fromStringToArray(str);
    let aux = false;
    let consonant = 0;
  
    for(let i = 0;i < arr.length;i++){
      if(consonant == arr.length){
        break;
      }
      if(!isVowel(arr[i])){
        consonant++;
        aux = true;
        i--;
        arr.push(arr.shift());
      } else{
        break;
      }
    }
    str = fromArrayToString(arr, aux);
    return str;
  }
  
  function fromArrayToString(arr, aux){
    let str = "";
    for(let i = 0;i < arr.length;i++){
      str += arr[i];
    }
    if(aux){
      str += "ay";
    }else{
      str += "way";
    }
    return str;
  }
  
  function fromStringToArray(str){
    let arr = [];
    for(let i = 0;i<str.length;i++){
      arr.push(str[i]);
    }
    return arr;
  }
  
  function isVowel(char){
    const vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < vowels.length;i++){
      if(char == vowels[i]){
        return true;
      }
    }
    return false;
  }
  
  translatePigLatin("consonant");