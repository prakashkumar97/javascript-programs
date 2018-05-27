function computeSum(n)
{ 
    document.getElementById("inp1").value="";
    if(parseInt(n)>0)
        {
        var sum = 2;
        for (var i=1,num=parseInt(n);i<=num;i++) 
        {
        sum=sum*2;
        if(sum*2>n)
        {
        document.getElementById("outputlabel").innerHTML=i+1;
        i=num;
        }
        }
        }
        else
        {
            document.getElementById("outputlabel").innerHTML="";
            alert("enter valid number");
        }
}