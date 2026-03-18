const projects = [
    {
        name: "Employee Management System",
        desc: "HR tool for managing employee data, attendance, and logs.",
        tech: "JavaScript, Google Apps Script, Google Sheets"
    },
    {
        name: "Attendance Tracker",
        desc: "Tracks clock-in/out times and calculates working hours with validations.",
        tech: "JavaScript, Google Apps Script"
    }
];

function openModal(index){
    document.getElementById('modal-title').innerText = projects[index].name;
    document.getElementById('modal-desc').innerText = projects[index].desc;
    document.getElementById('modal-tech').innerText = projects[index].tech;
    document.getElementById('modal').style.display = "flex";
}

function closeModal(){
    document.getElementById('modal').style.display = "none";
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

