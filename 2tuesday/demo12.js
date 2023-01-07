let name = ["aa", "bb"]


// spread operator(..);

//let copy= [...name]
//console.log(copy)

let c = ["goku", "vegita", ...name]

////console.log(c)
for (let i = 0; i < c.length; i++){
        console.log(c[i]);
}