var arr = [];
function add(name,amt)
{
  arr.push([name,amt]);
  document.getElementById("inp1").value ="";
  document.getElementById("inp2").value =""; 
}
function computeTotalAmount()
{ var sum=0;
   for(var i=0;i<arr.length;i++)
   {
       sum=sum+parseInt(arr[i][1]);
   }
   document.getElementById('output').innerHTML=sum;
}