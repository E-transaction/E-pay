function myFunction(){
    console.log("Entered");
    var email="pragyarathore7050@gmail.com";
    var pass="pssword";
    var inputEmail=document.getElementById("inputEmail").value;
    var inputPassword=document.getElementById("inputPassword").value;
    var checkbox=document.getElementById("checkbox").checked;
    if(!inputPassword || !inputEmail){
        alert("Enter the values");
    }
    if(!checkbox){
        alert("Please confirm the terms and conditions.");
        return;
    }
    
    if(email!=inputEmail && pass!=inputPassword){
        alert("Wrong Email or Password");
        return;
    }

    
    
    console.log("Success");
    
    window.location.replace("https://rzp.io/l/PRf6Qh4KPb");

}   

function clicked(){
    window.location.replace('sign.html');
}
