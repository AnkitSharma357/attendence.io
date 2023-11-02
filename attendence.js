async function fetch_user(){
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    create_div_for_group_infromation(result);
    // create_div(result);
 
}
function create_div(result){
    for(let i=0;i<=result.length-5;i++){

        let data_div = document.querySelector('.data');
        let div = document.createElement('div');
        let text = document.createTextNode(result[i].name);
        console.log(text);
        div.classList.add('member_data');
        div.appendChild(text);
        data_div.appendChild(div);
    }
}
function show_attendance_recrd(){
    document.querySelector('.container').classList.add('showcontainer');
    document.querySelector('.loginform').classList.add('shwologinform');
    document.querySelector('.login_cover').classList.add('hide_login_cover');
}
function fetch_username_and_password(){
    let name = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;
    if((name == "2")& (password =="1234")){
        show_attendance_recrd();
    }
    else{
        alert("You enter a Wrong user name or password");
    }
    document.querySelector('.group_add_cover').classList.add('show_cover');
    document.querySelector('.group_add_interface').classList.add('show_group_add_interface');

}
function create_div_for_group_infromation(result){

    let data_div = document.querySelector('.group_information');
    let div = document.createElement('div');
    let text = document.createTextNode(result[i].name);
    console.log(text);
    div.classList.add('group_data');
    div.appendChild(text);
    data_div.appendChild(div);

}

function dailog_box_for_add_group(){
    document.querySelector('.group_dailog_box').classList.add('show_group_dailog_box');
    document.querySelector('.cover_group_interface').classList.add('show_cover');
    
}

function hide_group(){
    document.querySelector('.group_dailog_box').classList.remove('show_group_dailog_box');
    document.querySelector('.cover_group_interface').classList.remove('show_cover');
}