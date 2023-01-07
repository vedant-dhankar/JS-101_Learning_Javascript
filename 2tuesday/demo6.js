// break ==> stoping the loop.

//print num 1-10 and break it at 5;
//1
//2
//3
//4
//5

for(let i = 1; i<=10; i++) {
    console.log(i)
    if(i==5){
        break;
    }
}
    
//continue ==> we will skip the blow code and move to the net incre/dec.
//print num 1-10 and continue it at 5,6,7;
//1
//2
//3
//4
//8
//9
//10

for(let i = 1; i<=10; i++){
     console.log(i)
    if( i==5 )
     continue     }