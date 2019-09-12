var UserName = 'KD';
document.querySelector('.content-greeting__name').innerHTML = `Hello, ${UserName}`;

var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = today.getDate()+' '+months[today.getMonth()]+', '+today.getFullYear();
document.querySelector('.content-date').innerHTML = date;


var count = 3;

function checkActive(that) {
    if(!that.previousSibling.previousElementSibling.checked) {
        console.log(that, that.previousSibling.previousElementSibling, that.parentNode);
        document.querySelector('.main-container__task-done-wrapper').appendChild(that.parentNode);
    } else {
        document.querySelector('.main-container__task-todo-wrapper').appendChild(that.parentNode);
    }
    if((document.querySelector('.main-container__task-todo-wrapper').childElementCount > 0) && (document.querySelector('.main-container__task-done-wrapper').childElementCount > 0)) {
        document.querySelector('.task-separator').style.display = 'block';
    } else {
        document.querySelector('.task-separator').style.display = 'none';
    }
}

function removeElement(that) {
    that.parentNode.parentNode.removeChild(that.parentNode);
    if((document.querySelector('.main-container__task-todo-wrapper').childElementCount > 0) && (document.querySelector('.main-container__task-done-wrapper').childElementCount > 0)) {
        document.querySelector('.task-separator').style.display = 'block';
    } else {
        document.querySelector('.task-separator').style.display = 'none';
    }
}

function addietemstodo() {
    var toDoDetails = document.querySelector('#toDoDetails').value.trim();
    var errMsg = '';
    var newListNode;
    if(toDoDetails.length <= 2) {
        errMsg = 'Please enter a valid list/item';
        showMessage(errMsg, 'red');
        return;
    }
    
    newListNode = document.createElement('div');
    newListNode.className = 'list-wrapper list-task-todo';
    newListNode.innerHTML = `
        <input type="checkbox" name="ct${count}" id="ct${count}" class="list-wrapper__checkbox">
        <label for="ct${count}" class="list-wrapper__checkbox-label" onclick="checkActive(this)"></label>
        <span class="list-title">${toDoDetails}</span>
        <span class="list-clear-button right-content" onclick="removeElement(this)"><img src="assets/delete_white.png" alt=""></span>
    `;
    document.querySelector('.main-container__task-todo-wrapper').appendChild(newListNode);
    document.querySelector('#toDoDetails').value = '';
    errMsg = 'Successfully Added!'
    showMessage(errMsg, 'green');
    count++;
    // console.log(toDoDetails,errMsg);
}

function showMessage(errMsg, msgColor) {
    var defaultMsg = 'Click on plus sign to add new list';
    document.querySelector('.err-msg-label').style.color = msgColor;
    document.querySelector('.err-msg-label').innerHTML = errMsg;
    setTimeout(function(){
        document.querySelector('.err-msg-label').style.color = '';
        document.querySelector('.err-msg-label').innerHTML = defaultMsg;
    },2e3);
}