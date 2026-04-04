function displayRegistrationForm() {
    document.getElementsByClassName("form_registration")[0].style.display = "block";
    document.getElementsByClassName("form_signIn")[0].style.display = "none";
}

function displayForgotPasswordForm() {
    document.getElementsByClassName("form_signIn")[0].style.display = "none";
    document.getElementsByClassName("form_forgot_password")[0].style.display = "block";
}

function backToSignInForm() {
    document.getElementsByClassName("form_forgot_password")[0].style.display = "none";
    document.getElementsByClassName("form_signIn")[0].style.display = "block";
}

function displaySignInForm() {
    document.getElementsByClassName("form_registration")[0].style.display = "none";
    document.getElementsByClassName("form_signIn")[0].style.display = "block";
}

function hideToast() {
    document.getElementsByClassName("page_toast_notification")[0].style.display = "none";
}

function showPassword(formType) {
    if (formType === "signIn") {
        const signInPasswordField = document.getElementById("signIn_password_input");
        const signInShowPasswordButton = document.getElementById("form_signIn_password_show");
        const signInHidePasswordButton = document.getElementById("form_signIn_password_hide");

        signInPasswordField.type = "text";
        signInShowPasswordButton.style.display = "none";
        signInHidePasswordButton.style.display = "block";

    }else if(formType === "registration"){
        const registrationPasswordField = document.getElementById("registration_password_input");
        const registrationShowPasswordButton = document.getElementById("form_registration_password_show");
        const registrationHidePasswordButton = document.getElementById("form_registration_password_hide");

        registrationPasswordField.type = "text";
        registrationShowPasswordButton.style.display = "none";
        registrationHidePasswordButton.style.display = "block";

    }else if(formType === "setNewPassword"){
        const newPasswordField = document.getElementById("set_newPassword_input");
        const newPasswordShowButton = document.getElementById("set_newPassword_show");
        const newPasswordHideButton = document.getElementById("set_newPassword_hide");

        newPasswordField.type = "text";
        newPasswordShowButton.style.display = "none";
        newPasswordHideButton.style.display = "block";
    }
}

function hidePassword(formType) {
    if (formType === "signIn") {
        const signInPasswordField = document.getElementById("signIn_password_input");
        const signInShowPasswordButton = document.getElementById("form_signIn_password_show");
        const signInHidePasswordButton = document.getElementById("form_signIn_password_hide");

        signInPasswordField.type = "password";
        signInShowPasswordButton.style.display = "block";
        signInHidePasswordButton.style.display = "none";

    }else if(formType === "registration"){
        const registrationPasswordField = document.getElementById("registration_password_input");
        const registrationShowPasswordButton = document.getElementById("form_registration_password_show");
        const registrationHidePasswordButton = document.getElementById("form_registration_password_hide");

        registrationPasswordField.type = "password";
        registrationShowPasswordButton.style.display = "block";
        registrationHidePasswordButton.style.display = "none";

    }else if(formType === "setNewPassword"){
        const newPasswordField = document.getElementById("set_newPassword_input");
        const newPasswordShowButton = document.getElementById("set_newPassword_show");
        const newPasswordHideButton = document.getElementById("set_newPassword_hide");

        newPasswordField.type = "password";
        newPasswordShowButton.style.display = "block";
        newPasswordHideButton.style.display = "none";
    }
}