const getsInputData = (id) => document.getElementById(id).value.trim();
const setsAttribute = (id, attr, val) => document.getElementById(id).setAttribute(attr, val);
const setsInnerText = (id, txt) => document.getElementById(id).innerText = txt;
const clearsInputField = (id, val) => document.getElementById(id).value = val;

function validatesSubscribeForm() {
    let nameInputData = getsInputData('inputName');
    let mailInputData = getsInputData('inputEmail');
    let nameErrorMessage = '';
    let mailErrorMessage = '';

    nameErrorMessage += (nameInputData.length === 0 || nameInputData.length < 2) ? 'Please insert a real name' : '';
    mailErrorMessage += (mailInputData.length === 0 || mailInputData.length < 5 || mailInputData.indexOf('@', 2) < 0) ? 'Please insert a valid email addres' : '';

    if (nameErrorMessage.length > 0) {
        setsInnerText('name-error-msg', nameErrorMessage), setsAttribute('name-error-msg', "style", "padding: 8px; background-color: #ccc; color: #000;");
    } else {
        setsInnerText('name-error-msg', ''), setsAttribute('name-error-msg', "style", "padding: 0; background-color: none;");
    }

    if (mailErrorMessage.length > 0) {
        setsInnerText('mail-error-msg', mailErrorMessage), setsAttribute('mail-error-msg', "style", "padding: 8px; background-color: #ccc; color: #000;");
    } else {
        setsInnerText('mail-error-msg', ''), setsAttribute('mail-error-msg', "style", "padding: 0; background-color: none;");
    }

    if (nameErrorMessage.length === 0 && mailErrorMessage.length === 0) clearsInputField('inputName', ''), clearsInputField('inputEmail', '');
}




