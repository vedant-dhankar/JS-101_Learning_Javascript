//how many words r there is  a string

let str= "masai school is best"

//"hi everyone how are you all"
let space = 0;
for(let i=0;i<str.length;i++){

    if(str[i]==" "){
        space++;
    }
}

 console.log("words:",space+1)