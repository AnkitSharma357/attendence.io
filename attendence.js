async function fetch_user(){
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    create_div_for_group_infromation(result);
 
}

function create_div(result){
    for(let i=0;i<=result.length-5;i++){
        console.log("in create divv");
        let data_div = document.querySelector('.data');
        let div = document.createElement('div');
        let text = document.createTextNode(result[i].name);
        console.log(text);
        div.classList.add('member_data_attendence');
        div.appendChild(text);
        data_div.appendChild(div);

        let putAbPre = document.createElement('div');
        let text2 = document.createTextNode('Absent');
        putAbPre.id = i;
        putAbPre.classList.add('Absent');
        putAbPre.appendChild(text2);
        div.appendChild(putAbPre);
    }
}


function show_attendance_recrd(){
    document.querySelector('.loginform').classList.add('shwologinform');
    document.querySelector('.login_cover').classList.add('hide_login_cover');
}
function fetch_username_and_password(){
    let name = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;
    if((name == "2")& (password =="1234")){
        show_attendance_recrd();
        document.querySelector('.group_add_cover').classList.add('show_cover');
        document.querySelector('.group_add_interface').classList.add('show_group_add_interface');
    }
    else{
        alert("You enter a Wrong user name or password");
    }
    

} 
function create_div_for_group_infromation(result){

    for(let i=0;i<=result.length;i++){

        let data_div = document.querySelector('.group_information');
        let div = document.createElement('div');
        let text = document.createTextNode(result[i].name);
        console.log(text);
        div.appendChild(text);
        div.classList.add('member_data');

        let take_attendence = document.createElement('div');
        take_attendence.classList.add('take_attendence');
        take_attendence.addEventListener('click',function show_attendance_record(){
            document.querySelector('.group_add_cover').classList.remove('show_cover');
            document.querySelector('.group_add_interface').classList.remove('show_group_add_interface');
        
            document.querySelector('.container').classList.add('showcontainer');
            create_div(result);
        });

        let text1= document.createTextNode("Take Attendence");
        take_attendence.appendChild(text1);

        let statics = document.createElement('div');
        let text3 = document.createTextNode('Attendence percent:-');
        statics.appendChild(text3);
        statics.classList.add('statics');
        

        let del_icon = document.createElement('div');
        del_icon.classList.add('del_icon');


        div.appendChild(del_icon);
        div.appendChild(statics);
        div.appendChild(take_attendence);

        data_div.appendChild(div);
        
    }

}

function dailog_box_for_add_group(){
    document.querySelector('.group_dailog_box').classList.add('show_group_dailog_box');
    document.querySelector('.cover_group_interface').classList.add('show_cover');
    
}

function hide_group(){
    document.querySelector('.group_dailog_box').classList.remove('show_group_dailog_box');
    document.querySelector('.cover_group_interface').classList.remove('show_cover');
}

function change_swap(){
    let putAbPre = document.querySelector('.Absent');
    putAbPre.addEventListener('click', function change_text(){
    if(putAbPre.innerText = 'Absent'){
        putAbPre.innerText = 'Present';
        document.querySelector('.Absent').classList.add('present');
    }
    else if(putAbPre.innerText = 'Present'){
        putAbPre.innerText = 'Absent';
        document.querySelector('.Absent').classList.remove('present');
    }
})
}
function add_member(){
    document.querySelector('.cover_add_person').classList.add('show_cover_add_person');
    document.querySelector('.add_person').classList.add('show_add_person');
}

function remove_add_person(){
    document.querySelector('.cover_add_person').classList.remove('show_cover_add_person');
    document.querySelector('.add_person').classList.remove('show_add_person');
}
function remove_attendence(){
    document.querySelector('.container').classList.remove('showcontainer');
    document.querySelector('.group_add_cover').classList.add('show_cover');
    document.querySelector('.group_add_interface').classList.add('show_group_add_interface');

}
fetch_user();