var arr = [];
function add(words)
{
  arr.push(words);
  document.getElementById("inp1").value ="";
}
function computePalindrome()
{ 
    document.write("[ ");
 for(var i=0;i<arr.length;i++)
    {
        
                if(arr[i].split("").reverse().join("")==arr[i])
                    {
                        document.write(arr[i]+" ");
                    } 
                    
    }  
    document.write("]");  
}