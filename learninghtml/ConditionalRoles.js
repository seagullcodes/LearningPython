var user = "admin";

switch(user){
    case "admin":
        console.log("you get full access!");
        break;
    case "subadmin":
        console.log("you get access to create and delete courses!");
        break;
    case "testprep":
        console.log("you get access to create and delete  tests!");
        break;
    case "user":
        console.log("you get content access!");
        break;
    default:
        console.log("trial user");
        break;
}