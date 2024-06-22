function fun1(){

    let shadow = document.getElementById("shadow") 
    let x = document.getElementById("horizontal").value 
    document.getElementById("x_value").innerHTML = x 

    let y = document.getElementById("vertical").value
    document.getElementById("y_value").innerHTML = y

    let b = document.getElementById("blur").value
    document.getElementById("b_value").innerText = b

    let s = document.getElementById("spread").value
    document.getElementById("s_value").innerText = s

    let color = document.getElementById("color").value


    
    shadow.style.boxShadow=`${x}px ${y}px ${b}px ${s}px ${color}` 
    
    

    document.getElementById("result").innerText = `box-shadow: ${x}px ${y}px ${b}px ${s} ${color};`

}