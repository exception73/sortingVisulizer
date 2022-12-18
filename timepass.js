let arr = [8,2,4,5,1,4,9,10]
let temp = arr;

for (i = 1; i < temp.length; i++)
        { 
            key = temp[i]; 
            j = i - 1; 
       
            while (j >= 0 && temp[j] > key)
            { 
                temp[j + 1] = temp[j]; 
                j = j - 1; 
            } 
            temp[j + 1] = key; 
        }

arr.push(1000);
console.log(arr)
console.log(temp)