function calFun(){
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    console.log(Number(a)+Number(b));
    d=Number(a)*Number(b)*Number(c)/100;
    e=Number(a)+Number(d);
    document.getElementById("result").innerHTML= "The Simple Interest is " +d;
    document.getElementById("result2").innerHTML= "The Total Amount is " +e;
  }