let input=document.getElementById("result");
//func to display number in input 

function display(num){  
     
result.value+=num;

}
//function to clear values entered in input

function Clear(){
        result.value="";

}
//function to delete 1 digit in input 
function del(){
        result.value=result.value.slice(0,-1);
}

//function to perform operations on input values

function calc(){

let s=document.getElementById("result").value;
let arr=s.split("");   //using split to split the values  given in input
let a=Number(arr[0]);   //assigning the values to variables
let b=arr[1];
let c=Number(arr[2]);
//Checking conditions

if (b=='+'){        //addition
 let d=a+c;

 result.value=d;

}else if (b=='-')    //subtraction
{
        let d=a-c;
        result.value=d;

        
}else if (b=='/')    //division
{
        let d=a/c;
         result.value=d;

        
} else if (b=='*')     //multiplication
 {
        let d=a*c; 
        result.value=d;       
} else {
        
        alert("invalid");    //invalid alert
        
}

}