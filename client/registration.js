function signUpValidation(){
    let userName = document.getElementById('userName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    localStorage.setItem('userName', userName)

    let counter = 1  //why does it count wrong when counter=0????
    if(userName.length > 4 && userName <= 8){
        counter++
        console.log(counter)
    }
    if(email.includes('@')){
        counter++
        console.log(counter)
    }
    if(password.length >= 5 && password.length <= 10 && password.includes('$')){
        counter++
        console.log(counter)
    }
    if(password === confirmPassword){
        counter++
        console.log(counter)
    }

    if(counter === 4){
        return true
    }
    else{
        alert("Error!")
        return false
    }

    // if((userName.length > 4 && userName <= 8) && 
    //     email.includes('@') && 
    //     (password.length >= 5 && 
    //         password.length <= 10 && 
    //         password.includes('$')) && 
    //     (password === confirmPassword)){
    //         return true
    //     }

    // alert("Error!")
    // console.log("Error")
    // return false
    
}
