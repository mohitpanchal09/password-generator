let range = document.getElementById('password-range')
let password=document.getElementById('password')
let numbersCheck=document.getElementById('numbers')
let charCheck=document.getElementById('characters')
let passwordLength=document.querySelector('.password-length')
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numbers='0123456789'
let chars='!@#$%^&*_-'
let pass=''
range.addEventListener('change',()=>{
    pass=''
    passwordLength.innerHTML=''
    for(let i=1;i<=range.value;i++){
        randomIndex=Math.floor(Math.random()*str.length)
        pass+=str.charAt(randomIndex)

    }
    password.value=pass
    let h3= document.createElement('h3')
    h3.innerText=`Password Length: 0-${range.value}`
    
    passwordLength.appendChild(h3)

})
charCheck.addEventListener('change',()=>{
    if(charCheck.checked!=true){
        str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    }else{
        str+=chars
        
    }
})

numbersCheck.addEventListener('change',()=>{
    if(numbersCheck.checked==false){
        str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }else{
        str+=numbers
    }
})