var user = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function() {
        return (this.courseList.length);
    },
    info: function() {
        console.table(this.courseList);
        console.log(`${this.firstName} ${this.lastName} is enrolled in ${this.getCourseCount()} course(s) as an ${this.role} and has logged in ${this.loginCount} times.`);
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
console.log(user.info());