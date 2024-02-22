function take_data(){
    let fristname = document.querySelector('#frist_name').value;
    let lastname = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confpassword = document.querySelector('#confpassword').value;

    console.log(fristname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    console.log(confpassword);

    if(password !== confpassword){
        alert("password and confrom password does not match");
    }
    else{
        // alert("resgiter successfully");
        postdata(fristname,lastname,email,password);
    }
}

async function postdata(fristname,lastname,email,password){
    let obj ={
        method:'POST',
         headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            Fristname: fristname,
            lastname: lastname,
            email: email,
            password: password,
        })
    }

    let response = await fetch('http://localhost:3000/register/user',obj);
    response = await response.json();
    console.log(response);

    if(response.message == 'true'){
        alert('user register successfully');
    }
    else{
        alert('Invalid Email');
    }
}