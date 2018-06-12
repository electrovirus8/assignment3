function solution1() {
    var p=(5+6+7)/2;
    var area=(p*(p-5)*(p-6)*(p-7))^.5
    return area;    
}

function solution2(f) 
{
var c= ((f-32)/9)*5;
return c;    
}

function solution3(a,b,c) {
    if (a>=b)
    {
        if(a>=b)
            var max= a;
        else
            var max=c;
    }
    else
    {
        if(b>=c)
            var max= b;
        else
            var max=c;
    }
    return max;
    }

function solution4() 
    {
var name="input";
var output= name.toLocaleUpperCase();
return output;
        
    }

function solution5(n) {
    if (n%3==0)
    {
    return "is divisible by 3";
    }
    if (n%7==0)
    {
    return "is  divisible by 7";
    }
    else
    return "is not divisible by either 3 or 7";
}
function solution6() 
{
    var one="GAGCCTACTAACGGGAT";
var two="CATCGTAATGACGGCCT";
var once=one.split("");
var second=two.split("");
 
for(var i=0,count=0;i<once.length;i++)
{
    if(once[i]!=second[i])
    {
        count=count+1;
    }
}
return count;
}

function solution7() 
{
var alpha="abcdefghijklmnopqrstuvwxyz";
var input="aThe quick brown fox jumps over the lazy dog";
var output=input.split(" ").join("");


for (var i=0; i<alpha.length; i++)
{
    var h=0;
    for(var j=0;j<output.length;j++)
    {
        
        if (alpha[i]==output[j])
        {
        h++;
        }
    }
    if (h==0)
    {
        return "is not a pangram"
    }
}
return "is a pangram" 
}
function solution8(n) {
    var alpha="abcdefghijklmnopqrstuvwxyz";
    for (var i=0;i<alpha.length;i++)
    {
        var flag=0;
        for (var j=0;j<n.length;j++)
        {
            if (alpha[i]==n[j])
            {
                flag=flag+1;
            }
            if (flag==2)
             {
                 return "is not a isogram";
             }
        }
    }
    return "is a isogram";
}

function solution9(n) 
{
 var slice=n.split( );
  var a=[];
  a[0]=n[0][0];
  a[1]=n[1][0];
  a[2]=n[2][0];
  return a;

}