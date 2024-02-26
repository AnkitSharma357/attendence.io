async function fetch_user(){
    let user_name = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;
    
    let get_user= {
        method:'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            user: user_name,
            email:email,
            password:password,
        })
    }

    let put = await fetch('http://localhost:3000/userlogin',get_user);
    put = await put.json();
    console.log(put.message);

    if(put.message == 'Ivalid user'){
        alert('Invalid User_Details');
    }
    else if(put.message == true){
        alert('Login Successfully');
        window.open('group.html','_self');
    }
    else if(put.message == false){
        alert('Wrong user_name, password, Email');
    }
    else{
        alert("Else Wrong User_name , password or Email");
    }

}

