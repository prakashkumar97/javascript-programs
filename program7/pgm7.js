
var arr=[];
function add(num)
{
  arr.push(num);
  document.getElementById('inp1').value ="";
}
function computeRepeatingNum()
{ 

var result=[];
    for(var i=0;i<arr.length;i++)
        {
            for(var j=i+1;j<arr.length;j++)
                {
                    if(arr[i]==arr[j])
                        {
                            result.push(arr[i]);

                        }
                }
        }
        
                document.getElementById('output').innerHTML=result;
                    arr=[];
            
            }