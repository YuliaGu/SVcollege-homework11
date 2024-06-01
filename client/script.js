function nameValidation(){
    let name = document.getElementById('nameInput').value

    if(name.length >= 2) return true
    return false
}