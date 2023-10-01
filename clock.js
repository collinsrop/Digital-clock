//variables declarations
let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
 setInterval(()=>{
hrs.innerHTML=new Date().getHours();
min.innerHTML=new Date().getMinutes();
sec.innerHTML=new Date().getSeconds();

},1000);