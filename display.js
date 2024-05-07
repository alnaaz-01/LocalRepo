$(document).ready(function () {
    getData();
    });
    function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstname").text(studentObj.firstname);
    $("#lastname").text(studentObj.lastname);
    $("#contact").text(studentObj.contact);
    $("#Email").text(studentObj.Email);
    $("#branch").text(studentObj.branch);
    $("#subject").text(studentObj.subject);
    }