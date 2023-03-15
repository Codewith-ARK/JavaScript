var username = "ARK", password = "1"
var success, counter

if(username.toLowerCase() == "ark"){
    if(password.toLowerCase() == "123"){
        console.log("Login Successful!")
        success = true
    }
    else{
        console.log("Incorrect Password!");
        counter++
    }
}
else{
    console.log("Incorrect Username!");
    counter++
}