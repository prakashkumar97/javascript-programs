function computeSum(n)
{ 
    document.getElementById("inp1").value="";
    if(parseInt(n)>0)
    {
            var output="";
        for (var i=1,num=parseInt(n);i<=num;i++)
        { 
        if(i%3==0&&i%5!=0)
        {
            if(i!=1)
            output+=" , ";
        output+=" Fizz";
        }
        else if(i%5==0&&i%3!=0)
        {
            if(i!=1)
            output+=" , ";
        output+="Buzz";
        }
        else if(i%3==0&&i%5==0)
        {
            if(i!=1)
            output+=" , ";
        output+="FizzBuzz";
        }
        else
        {
            if(i!=1)
            output+=" , ";
        output+=i.toString();
        }
        }
        document.getElementById("outputlabel").innerHTML=output;
    }
    
    else
    {
            alert("enter valid natural number");
    }
}