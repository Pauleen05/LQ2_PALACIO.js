let correct_password = "password1234";
let user_name = prompt ("Enter your Username:");
let user_password = prompt ("Enter your Password:");

if (user_password === correct_password){
    alert ('Welcome', user_name);
}else{
    alert ('Maybe Username or Password is Invalid or Does not Match');
}