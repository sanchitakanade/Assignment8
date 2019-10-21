/*  Name: Sanchita Kanade
	Instructor Name: Zak Ruvalcaba
	Class: CS648.01 Modern Web Development Frameworks Fall 2019
	File: employee-management.js
    Assignment No.: 8
*/

/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function numberOfEmployees() {
    "use strict";
    var totalEmployees = window.document.getElementsByClassName("numberOfEmployees");
    totalEmployees[0].firstChild.nodeValue = (($("employeesData").rows.length) - 1);
}

function displayEmployee(employees) {
    "use strict";
    var html = "";
    employees.forEach(function (employee) {
        html += "<tr><td>" + employee[0] + "</td><td>" + employee[1] + "</td><td>"
                + employee[2] + "</td><td><input type='button' class='button' name='delete' value ='Delete'></td></tr>";
    });
    $("employeesData").innerHTML += html;
    $("employeeName").focus();
}
function addEmployee() {
    "use strict";
    var html = "";

    html = "<tr><td>" + $("employeeName").value + "</td><td>" + $("employeeTitle").value
            + "</td><td>" + $("employeeExtension").value
            + "</td><td><input type='button' class='button' name='delete' value ='Delete'></td></tr>";
    $("employeesData").innerHTML += html;
    numberOfEmployees();
}
var deleteEmployee = function (e) {
    "use strict";
    var i, rowNum;
    for(i = 1; i < $("employeesData").rows.length; i += 1) {
        if (e.currentTarget === $("employeesData").rows[i].cells[3].firstChild) {
            rowNum = i;
        }
    }
    $("employeesData").deleteRow(rowNum);
    numberOfEmployees();
};

var validateData = function () {
    "use strict";
    var name, title, extension, isValid, deleteButtons, i;
    name = $("employeeName").value;
    title = $("employeeTitle").value;
    extension = $("employeeExtension").value;
    isValid = true;
    if (name === "") {
        $("employeeName").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("employeeName").nextElementSibling.firstChild.nodeValue = "";
    }
    if (title === "") {
        $("employeeTitle").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("employeeTitle").nextElementSibling.firstChild.nodeValue = "";
    }
    if (extension === "") {
        $("employeeExtension").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("employeeExtension").nextElementSibling.firstChild.nodeValue = "";
    }
    if (isValid === true) {
        addEmployee();
    }

    deleteButtons = window.document.getElementsByName("delete");
    for (i = 0; i < deleteButtons.length; i += 1) {
        deleteButtons[i].addEventListener("click", deleteEmployee);
    }
};


function main() {
    "use strict";
    var employees;
    employees = [["Sally Smith", "QA", 3423],
            ["Mark Martin", "VP sales", 3346],
            ["John Johnson", "Marketing", 3232],
            ["Payal Deol", "Software Engineer", 3131],
            ["Neha Bhatia", "Dev Ops Engineer", 4545]];

    displayEmployee(employees);
}


window.addEventListener("load", function () {
    "use strict";
    var deleteButtons, i;
    main();
    numberOfEmployees();
    $("addEmployee").addEventListener("click", validateData);

    deleteButtons = window.document.getElementsByName("delete");
    for (i = 0; i < deleteButtons.length; i += 1) {
        deleteButtons[i].addEventListener("click", deleteEmployee);
    }
});