var account;
function take_data(){
    let security;
    let fristname = document.querySelector('#frist_name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confpassword = document.querySelector('#confpassword').value;

    if(password !== confpassword){
        alert("password and confrom password does not match");
    }
    if(account == 'true'){
        security = document.querySelector('#securtiy_question').value;
        if(security == ''){
            alert('security must be given');
        }
        else{
            postdata(fristname,email,password,security);
        }
    }
    else{
        postdata(fristname,email,password,security);
    }
}

async function postdata(fristname,email,password,security_question){
    let obj ={
        method:'POST',
         headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            account_type:account,
            Fristname: fristname,
            email: email,
            password: password,
            security:security_question,
        })
    }

    let response = await fetch('http://localhost:3000/register/user',obj);
    response = await response.json();

    if(response.message == 'true'){
        alert('user register successfully');
        window.open('login.html','_self');
    }
    else{
        alert('Invalid Email');
    }
}

function create_student_account(){
    account = 'false';
    document.querySelector('.loginform').classList.add('show_loginfrom');
    document.querySelector('.account').classList.add('hide_account');   
}

function create_admin_account(){
    account = 'true';
    document.querySelector('.loginform').classList.add('show_loginfrom');
    document.querySelector('.account').classList.add('hide_account');
    
    let div = document.querySelector('.form_data');

    let security_question_label = document.createElement('label');
    let security_question_input = document.createElement('input');

    security_question_label.classList.add('login_label');
    security_question_input.classList.add('input_tag');
    security_question_input.id = 'securtiy_question';

    security_question_label.innerText = 'Security Question';

    div.appendChild(security_question_label);
    div.appendChild(security_question_input);
}
