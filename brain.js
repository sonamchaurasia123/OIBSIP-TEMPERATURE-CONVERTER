var c=document.getElementById('c');
var f= document.getElementById('f');
 
c.oninput= () =>{
       var output=(parseFloat(c.value) *9) / 5 +32;
       f.value=parseFloat(output);
};

f.oninput= () =>{
    var output=((parseFloat(f.value)-32)*5)/9;
    c.value=parseFloat(output);
};