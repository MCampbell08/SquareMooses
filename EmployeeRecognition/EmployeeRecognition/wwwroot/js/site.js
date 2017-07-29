function run() {
    checkNamesAndCity();
    checkEmail();
    checkDate();
}

function checkNamesAndCity() {
    var submitter_name = document.getElementById('submitterName').value;
    var hustler_name = document.getElementById('hustlerName').value;
    var sub_reason = document.getElementById('submissionReason').value;
    var namesCityRegEx = new RegExp(".{2,}\s.+");
    var errorReturn = "";

    if (namesCityRegEx.test(submitter_name)) {
        document.getElementById("submitterName").style.boxShadow = "0 0 5px 1px green";
    }
    else {
        document.getElementById("submitterName").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Invalid submitter name. Must have at least 2 letters followed by a space and at least 1 more letter.</br>"
    }

    if (namesCityRegEx.test(hustler_name)) {
        document.getElementById("hustlerName").style.boxShadow = "0 0 5px 1px green";
    }
    else {
        document.getElementById("hustlerName").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Invalid hustler name. Must have at least 2 letters followed by a space and at least 1 more letter.</br></br>"
    }
    if (namesCityRegEx.test(sub_reason)) {
        document.getElementById("submissionReason").style.boxShadow = "0 0 5px 1px green";
    }
    else {
        document.getElementById("submissionReason").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Submission reason must contain content.";
    }
    document.getElementById("nameErrors").innerHTML = errorReturn;
}

function checkEmail() {
    var errorReturn = "";
    var submitter_email = document.getElementById('submitterEmail').value;
    var hustler_email = document.getElementById('hustlerEmail').value; 
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(submitter_email)) {
        document.getElementById("submitterEmail").style.boxShadow = "0 0 5px 1px green";
    } else {
        document.getElementById("submitterEmail").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Invalid submitter email.</br>";
    }
    if (emailRegex.test(hustler_email)) {
        document.getElementById("hustlerEmail").style.boxShadow = "0 0 5px 1px green";
    } else {
        document.getElementById("hustlerEmail").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Invalid hustler email.";
    }
    document.getElementById("emailErrors").innerHTML = errorReturn;
}

function checkDate() {
    var subDate = document.getElementById("submissionDate").value;
    var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var errorReturn = "";
    if (dateRegex.test(subDate)) {
        document.getElementById("submissionDate").style.boxShadow = "0 0 5px 1px green";
    } else {
        document.getElementById("submissionDate").style.boxShadow = "0 0 5px 1px red";
        errorReturn += "Invalid submission date. Please use the proper format.";
    }
    document.getElementById("dateErrors").innerHTML = errorReturn;
}