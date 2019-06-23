

/*Function to Print Prime Numbers upto n*/
function isPrime(x) 
{ 
    if (x <= 1) 
        return false; 

    for (t= 2; t< x; t++) 
        if (x % t == 0) 
            return false;  
    return true; 
} 

function printPrime(n) 
{ 
    for ( i = 2; i <= n; i++) { 
        if (isPrime(i)) 
            console.log(i)
    } 
} 

/*Function To Remove Duplicates from JS (unsorted) Array-Method1*/

function RemoveDuplicates(arr,size){
    var k=0;
    arr[k]=arr[0];
    
    for(i=1;i<size;i++)
    {
     for(j=i+1;j<size;j++)
     {
      if(arr[j]==arr[i])
      arr[j]=arr[0];
     }
     if(arr[i]!=arr[0])
     {
     k++;
     arr[k]=arr[i];
    } 
}
PrintArr(arr,k)
}

function PrintArr(arr,n){
    for(t=0;t<=n;t++)
    console.log(arr[t])
}
 

