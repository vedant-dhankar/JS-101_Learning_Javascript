
//given a string print the no of time each charachter appears



let str="luffy"
//l-1
//u-2
//f=2
//y-2

let object={};
for(let i=0;i<str.length;i++){

   if(object[str[i]] == undefined){
    object[str[i]]=1;
   }

   else{
    object[str[i]]++;
   }}
     console.log(object)