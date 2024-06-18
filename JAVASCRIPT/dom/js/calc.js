// alert("test")
let calc = () => {
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let op = document.getElementById("op");
    let res = document.getElementById("res");
    console.log(v1,v2,op);

    let v1Val = v1.value;
    let v2Val = v2.value;
    let opVal = op.value;
   

    console.log(v1Val,v2Val,opVal);    
    // console.log(typeof(v1Val));    

    v1Val = Number(v1Val)
    v2Val = Number(v2Val)

    let result = 0;

    switch(opVal){
        case '+':
            result = v1Val + v2Val; break;
        case '-':
            result = v1Val - v2Val; break;
        case '*':
            result = v1Val * v2Val; break;
        case '/':
            result = v1Val / v2Val; break;
    }

    console.log(result);

    res.value = result;

}

let reset = () =>{
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
    document.getElementById("op").value = "";
    document.getElementById("res").value = "";
}
