


//let name1 = "chunnu"
//let attend1 = "p"
//let name2 = "munnu"
//let attend2 = "p"
//let name3 = "pablo"
//let attend3 = "a"
//let name = "pablo"


//if(name == name1)
//{
  //  attend1="a"
//}
//else if (name == name2)
//{
  //  attend2= "a"
//}
//else if (name == name3)
//{
  //  attend3= "p"
//}
//console.log(attend3)

/// dat way

let arrname = ["chunnu", "munnu", "pablo"]
let arrattend = ["p","p","a"]
let name= "pablo"
for(let i=0;i<arrname.length;i++)
{
    if(arrname[i] == name)
    {
        arrattend[i]="p"
    }
}
console.log(arrattend)

