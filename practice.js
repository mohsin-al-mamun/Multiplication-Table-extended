// Usual loop.......



// for (let i=0; i<=10; i++){
//     console.log(`Hello ${i}`);
// }



// function myLoop(i,j){
//    console.log(`Helllo ${i}`);
//    i++;
//    if (i<=j){setTimeout(myLoop,2000,i,j);}
// };
// myLoop(0,10)



function initialize(){
    let start = 1;
    let end = 5;
    myloop(start,end)

}




        function myloop(i,j){
            create(i);
            i++;
            if (i<=j){setTimeout(myloop,2000,i,j);}
        };


                function create (num){
                    for(let j=0;j<=10;j++){
                        console.log(`${num} X ${j} = ${+num*j}`)
                    }
                    console.log("\n")
                }

 
 initialize()
