const courses = [
    {
        name: "Complete React JS Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "2.7"
    },
    {
        name: "Complete C++ Course",
        price: "2.8"
    },
];

function generateList(){
    const ui = document.querySelector('.list-group');
    ui.innerHTML = "";  // Clear the list before generating new items

    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        
        const span = document.createElement("span");
        span.classList.add("float-right");
    
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        
        li.appendChild(span);
        ui.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', generateList);


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateList(); 
    
})

const button1 = document.querySelector(".sort-btnm");

button1.addEventListener("click", () => {
    courses.sort( (a, b ) => b.price - a.price );
    generateList(); 
    
})