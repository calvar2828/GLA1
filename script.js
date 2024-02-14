var element = document.createElement('h1');
var input1= document.createElement('input');
var input2=document.createElement('input');
var inputResult=document.createElement('p1');
var button = document.createElement('button');

input1.id="n1";
input2.id="n2";
inputResult.id="p1";

//---------STYLES----------------------
//--NAME--
element.innerHTML = "Carlos Daniel Alvarez Arango";
element.style.textAlign = "center"
element.style.color = " #A9A9A9"
//--INPUT1--
input1.innerHTML
input1.placeholder = "Number 1"
input1.style.marginLeft="10px"
input1.style.border="1px solid black"
//--INPUT2--
input2.innerHTML 
input2.placeholder = "Number 2"
input2.style.marginLeft="30px"
input2.style.border="1px solid black"

//--BUTTON--
button.innerHTML = "send"
button.style.display = "block"
button.style.marginTop = "30px"
button.style.marginLeft = "350px"

//--RESULT--
inputResult.style.display="block"
inputResult.style.marginTop="30px"
inputResult.style.marginLeft="30px"

//----------DISPLAY------------------
var body1 = document.getElementsByTagName('body')[0];
body1.appendChild(element);
body1.appendChild(input1);
body1.appendChild(input2);
body1.appendChild(inputResult);
body1.appendChild(button);


//



const validate = ()=>{
    var showResult = document.getElementById("p1")
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    try
    {
        if (isNaN(num1) || isNaN(num2)){throw new Error("Input a valid number");}
        
    
        num1 =parseInt(num1);
        num2 =parseInt(num2);
        var result = num1 + num2;
        showResult.innerHTML = "The result is " + result;
        console.log(result)
        input1.style.border="1px solid black"
        input2.style.border="1px solid black"
    }
    catch(err)
    {
        showResult.innerHTML=err.message
        if(isNaN(num1)){
            input1.style.border="1px solid red"
        }
        if(isNaN(num2)){
            input2.style.border="1px solid red"
        }
        
    }
}

button.addEventListener("click",validate);



