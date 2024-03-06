var security;
var admin;
async function fetch_user(){
    console.log(admin);
    let user_name = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;

    if(admin == 'true'){
        security = document.querySelector('#security_input_box').value;
        console.log(security);
    }
    else{
        security ='';
    }

    console.log(user_name,password,email,security);
    
    let get_user= {
        method:'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            account:admin,
            take_security:security,
            user: user_name,
            email:email,
            password:password,
        })
    }

    let put = await fetch('https://attendenceserviceapp.cyclic.app/userlogin',get_user);
    put = await put.json();

    if(put.message == 'Ivalid user'){
        alert('Invalid User_Details');
    }
    else if(put.message == true){
        alert('Login Successfully');
        if(admin == 'true'){
            window.open('group.html','_self');
        }
        else{
            window.open('show_attendence.html','_self');
        }
    }
    else if(put.message == false){
        alert('Wrong user_name, password, Email');
    }
    else{
        alert("Else Wrong User_name , password or Email");
    }

}
function create_student_account(){
    document.querySelector('.account').classList.add('hide_account');
    document.querySelector('.loginform').classList.add('shwologinform');
    admin = 'false';
}

function create_admin_account(){
    admin = 'true';
    let from = document.querySelector('.form_data');
    document.querySelector('.account').classList.add('hide_account');
    document.querySelector('.loginform').classList.add('shwologinform');

    let label = document.createElement('label');
    let input = document.createElement('input');

    label.classList.add('login_label');
    input.classList.add('input_tag');
    input.id = 'security_input_box'

    label.innerText = 'security';

    from.appendChild(label);
    from.appendChild(input);

    // security = input.value;
    // console.log(security);
}
    




