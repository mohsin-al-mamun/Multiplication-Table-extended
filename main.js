let Button = document.getElementById("btn");
let Refresh = document.getElementById("refresh");
let SmallNum = document.getElementById("small");
let BigNum = document.getElementById("big");

let Top = document.getElementById("top");





Button.addEventListener("click", initialize);
Refresh.addEventListener("click", refreshPage);
Top.addEventListener("click", topUp);

function initialize(event){
    event.preventDefault();
    document.getElementById("container").style.backgroundColor ="orange";
    let start = +SmallNum.value;
    let end = +BigNum.value;
    myloop(start,end)

   }
                  function myloop(i,j){
                     create(i);
                     i++;
                     if (i<=j){setTimeout(myloop,300,i,j)}
                  }




                  function create(num){

                        
                        let newDiv = document.createElement("div");
                        newDiv.className = "resultdiv";
                        let header = document.createElement("h3");
                        header.innerHTML = `The multiplication table of ${num} is..`;
                        newDiv.appendChild(header);
                        for(let j=1; j<=10; j++){
                           let result =  document.createElement("p");
                           result.innerHTML = `${num} X ${j} = ${num*j}`;
                           newDiv.appendChild(result);
                           window.scrollTo(0,document.getElementById("outputdiv").scrollHeight);
                        }
                        document.getElementById("outputdiv").appendChild(newDiv);
                  
                  }








function refreshPage (event){
    event.preventDefault();
    location.reload();
}

function topUp(){
   
   window.scrollTo(0, 0);
}



