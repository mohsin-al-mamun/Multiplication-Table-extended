// DOM Nodes..........

let Button = document.getElementById("btn");
let Refresh = document.getElementById("refresh");
let SmallNum = document.getElementById("small");
let BigNum = document.getElementById("big");
let Top = document.getElementById("top");



// Event Listeners.....

Button.addEventListener("click", initialize);
Refresh.addEventListener("click", refreshPage);
Top.addEventListener("click", topUp);


      // This is the outermost function.  This will trigger "myloop()" function which contains recursion.
function initialize(event){
    event.preventDefault();
    document.getElementById("container").style.backgroundColor ="aqua";
    Refresh.style.visibility="visible";
    let start = +SmallNum.value;       // creating numbers from input section after submiting. It won't work outside this function as
    let end = +BigNum.value;        // this values are generated after clicking the submit button.

    if (start ==" "){alert("Please Enter a Number.");       // preventing from empty stings input
   } else{myloop(start,end);};      // Here is the function call to "myloop()"
    

   }
                  function myloop(i,j){   // We need two loops to perform this project. The outer loop is written in form of a function here 
                     create(i);     // so that we can use it recursively and can implement little delay. This will trigger "create(num)"
                     i++;
                     if (i<=j){setTimeout(myloop,300,i,j)}  // set time out must have a function with dealy, and parameters of the funtion will have to be 
                  }                                       //  mentioned as parameters of setTimeout function. Otherwise, bugs may arise.




                  function create(num){    // This is the innermost function which will do the main things . it has a loop to produce tables and values.

                        
                        let newDiv = document.createElement("div");
                        newDiv.className = "resultdiv";
                        let header = document.createElement("h3");
                        header.innerHTML = `The multiplication table of ${num} is..`;
                        newDiv.appendChild(header);
                        for(let j=1; j<=10; j++){
                           let result =  document.createElement("p");
                           result.innerHTML = `${num} X ${j} = ${num*j}`;
                           newDiv.appendChild(result);
                           window.scrollTo(0,document.getElementById("outputdiv").scrollHeight); // This will autometically scroll down the page.
                        }
                        document.getElementById("outputdiv").appendChild(newDiv);
                  
                  }








function refreshPage (event){  // Will refresh the page so that one can start over from the begining with new value.
    event.preventDefault();
    location.reload();
}

function topUp(){   // This function will take us to the top of the page when clicked the "Go Up" button.
   
   window.scrollTo(0, 0);
}



