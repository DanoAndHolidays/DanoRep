console.log("Holle World");

function cout(){
    let num1 =document.getElementById('num1').value;
    let num2 =document.getElementById('num2').value;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    
    

    if(isNaN(num1)||isNaN(num2)){
        console.error("请输入有效的数字")
    }
    else{

        let result =num1+num2;
        alert("结果是：" + result);
    }
}