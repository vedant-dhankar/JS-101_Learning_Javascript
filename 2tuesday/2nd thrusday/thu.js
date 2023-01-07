//print num from 1 to 10 to a given limit

// 1-10
// 2,3,4,7

for(let i=1;i<=10;i++)
{
    console.log(i);

let num=i
let count=0
for(let j=1;j<=num;j++)
{
    if (num%j==0){
        count++
    }

}


if(count==2){
    console.log("prime number")
}
else{
    console.log("not a prime number")
}

}

