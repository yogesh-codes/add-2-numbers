function add(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let a=document.getElementById("answer-div");
    let sum=n1+n2;
    a.innerHTML=sum;
}