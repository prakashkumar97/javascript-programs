
var arr=[];
function add(num)
{
  arr.push(num);
  document.getElementById("inp1").value ="";
}
function computePairSum(sum)
{ 

var result=[];
//document.write(sum);
    for(var i=0;i<arr.length;i++)
        {
            for(var j=i+1;j<arr.length;j++)
                {
                    
                   // document.write(arr[i]+arr[j]+sum);
                    if((parseInt(arr[i])+parseInt(arr[j]))==parseInt(sum))
                        {
                            result.push([arr[i],arr[j]]);
                            arr[i]="-";
                            arr[j]="-"
                            j=arr.length;

                        }
                }
        }
        
                document.getElementById('output').innerHTML=result;
                    arr=[];
                   
            
 }