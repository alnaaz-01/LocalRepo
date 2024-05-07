$(document).ready(function () {
    // getData();
    $("#btnAddStudent").click(function () {
    //collect student data from student form
    function getStudentData() {
    let student = {
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    contact: $("#contact").val(),
    Email: $("#Email").val(),
    branch: $("#branch").val(),
    subject:$("#subject").val(),
    };
    $("#studentForm")[0].reset();
    return student;
    }
    function storeDataToLocalStorage() {
    if (!localStorage.getItem("student")) {
    localStorage.setItem("student", JSON.stringify(getStudentData()));
    } else {
    localStorage.removeItem("student");
    localStorage.setItem("student", JSON.stringify(getStudentData()));
    }
    }
    function sendData() {
    let xhr = new XMLHttpRequest();
    let data = JSON.stringify(getStudentData());
    xhr.open("POST", "http://localhost:4000/storedata", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    }
    storeDataToLocalStorage();
    // sendData();
    // window.location.href = "display-data.html";
    window.open("display.html");
    });
    });