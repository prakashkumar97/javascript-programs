var fact=1;
function CalculateFactorial(num)
{

    if(parseInt(num)>0)
    {
    for(i=1;i<=parseInt(num);i++)
    {    
        fact=fact*i;    
    } 
    document.getElementById('output').innerHTML="The Factorial of a number "+num+" is "+fact;
    }
    else if(parseInt(num)==0)
    {
        document.getElementById('output').innerHTML="The Factorial of a number "+num+" is "+"1";
    }
    else if(parseInt(num)<0)
    {
        document.getElementById('output').innerHTML="";
        alert("enter only the positive integer");
        fact=1;
    }
    else
    {
        document.getElementById('output').innerHTML="";
        alert("enter the valid integer");
        fact=1;
    }   
    document.getElementById("num1").value="";
}
