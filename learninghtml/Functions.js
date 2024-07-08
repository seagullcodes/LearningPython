function getUserRole(name, role)
{
    switch(role){
        case"admin":
            return '${name} is admin with all access'
            break;
        case"subadmin":
            return '${name} is sub-admin with access to create and delete classes'
            break;
        case"testprep":
            return '$[name} is test with access to create and delete tests'
            break;
        case"user":
            return '${name} is user to consume content'
            break;
        default:
            return '${name} is a trial user'
            break;
    }
}



console.log(getUserRole("hitesh", "testprep"));