
var result = [], length = []; 
for (var i = 13; i > 8; i--) {
    array = [];
    array.push(i);
    for (j = 0; j < 100000000; j++) {
        if (array[j] == 1) break;
        else {
            if (array[j] % 2 == 0) {
                array[j] /= 2;  
            }
            else {
                array[j] = 3 * array[j] + 1;    
            }
        }
       
        array.push(array[j]);
    }
   

    result.push(array.length);
    console.log(array);
    console.log(result);
    //length.push(result.length);
   // console.log(length);
    
}
console.log((Math.max(...result)),result.indexOf(Math.max(...result)));