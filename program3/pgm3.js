function computeSum(n)
{ 
    document.getElementById("inp1").value="";
    if(parseInt(n)>0)
        {
            var sum = 0;
        for (var i=1,num=parseInt(n);i<num;i++)
        { 
        if(i%3==0||i%5==0)
        sum=sum+i;
        }
        document.getElementById("outputlabel").innerHTML=sum;
        }
        else
        {
            alert("enter valid natural number");
        }
}