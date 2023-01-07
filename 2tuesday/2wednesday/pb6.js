//given a array find the count of world whose characters atarting with g;

let arr= ["gshit","gadkj","hap"];


let count=0
for(let i=0;i<arr.length;i++){

    if(arr[i][0]=="g"){
        count++;
    }
}
console.log(count);