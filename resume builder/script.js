function addExperience() {
    let newExp = document.createElement("textarea");
    newExp.setAttribute("class", "form-control");
    newExp.style.marginTop = "-5px";
    newExp.style.marginBottom = "15px";
    newExp.setAttribute("placeholder", "Write a work experience");
    let AddExpBtn = document.getElementById("AddExp");
    let experienceContainer = document.getElementById("experienceContainer");
    experienceContainer.insertBefore(newExp, AddExpBtn);
}
function addEducation() {
    let newEdu = document.createElement("textarea");
    newEdu.setAttribute("class", "form-control");
    newEdu.style.marginTop = "-5px";
    newEdu.style.marginBottom = "15px";
    newEdu.setAttribute("placeholder", "Write an education entry");
    let AddEduBtn = document.getElementById("AddEdu");
    let educationContainer = document.getElementById("educationContainer");
    educationContainer.insertBefore(newEdu, AddEduBtn);
}
function createResume() {
    let resumeForm = document.querySelector(".resume-form");
    let resumeTemplate = document.querySelector(".resume-template");
    let createBtn = document.getElementById("create-div");
    let printBtn = document.getElementById("print-div");
    let name = document.getElementById("resume-full-name");
    let address = document.getElementById("resume-address");
    let phone = document.getElementById("resume-phone");
    let email = document.getElementById("resume-email");
    let objective = document.getElementById("resume-objective");
    let educationList = document.getElementById("resume-education");
    let experienceList = document.getElementById("resume-experience");
    let skills = document.getElementById("resume-skills");
    const experienceContainer = document.getElementById("experienceContainer");
    const experienceTextareas = experienceContainer.querySelectorAll("textarea");
    let experiences = ""; // Declare the variable here
    
    for (let experience of experienceTextareas) {
        experiences += `<li>${experience.value}</li>`;
    }
    console.log(experienceTextareas);
    experienceList.innerHTML = experiences;
    const educationContainer = document.getElementById("educationContainer");
    const educationTextAreas=educationContainer.querySelectorAll("textarea");
    let educations="";
    for (let education of educationTextAreas) {
        educations +=`<li>${education.value}</li>`;
    }
    educationList.innerHTML=educations;
    name.innerHTML = document.getElementById("full-name").value;
    address.innerHTML = document.getElementById("address").value;
    email.innerHTML = document.getElementById("email").value;
    phone.innerHTML = document.getElementById("phone-number").value;
    objective.innerHTML = document.getElementById("objective").value;
    skills.innerHTML = document.getElementById("skills").value;
    printBtn.style.display = "block";
    createBtn.style.display = "none";
    resumeForm.style.display = "none";
    resumeTemplate.style.display = "block";
}
function handleImageUpload(event) {
    const photoInput = event.target;
    const resumePhoto = document.getElementById("resume-photo");
    
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            resumePhoto.src = e.target.result;
        }

        reader.readAsDataURL(photoInput.files[0]);
    }
}
function printResume() {
    var newWindow = window.open('', '_blank');
    
    var header_str = '<html><head><title>' + "Your Resume"  + '</title>';

    var stylesheet_link = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><link rel="stylesheet" href="style.css">';
    var header_end = '</head><body>';

    var footer_str = '</body></html>';
    var new_str = document.getElementById("resume-template").innerHTML;
    var old_str = document.body.innerHTML;
    var full_html = header_str + stylesheet_link + header_end + new_str + footer_str;

    newWindow.document.open();
    newWindow.document.write(full_html);
    newWindow.document.close();
    document.body.innerHTML = old_str;
    
    newWindow.print();
}





