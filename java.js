function login(){
   let name = prompt("Please enter Username");
   if (name === "admin" ){
    let password = prompt("Enter Password");
    if (password === "TheMaster"){
        alert("Welcome");
    } else if (password == "") {
        alert("Canceled");
    } else if (password != "TheMaster") {
        alert("Wrong Password");
    }
   } else if (name == ""){
       alert("Canceled");
   } else if (name != "admin") {
       alert("I don't know you");
   }
   
    
    
}