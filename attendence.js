let change_text = document.querySelector('.notification').innerHTML;
// let group_information_div
async function fetch_user(){
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    create_div_for_group_information(result);
    
        
}
//function to create div for group start
 function create_div_for_group_information(result)
    {
        for(let i=0;i<=result.length;i++){

            let group_container = document.querySelector('.group_information');
            let group_information_div = document.createElement('div');
            let delete_button = document.createElement('div');
            let attend_percent = document.createElement('div');
            let text2 = document.createTextNode('Attendence Precent: ');
            let take_attendence_background = document.createElement('div');
            let take_attendence = document.createElement('div');
            let text1 = document.createTextNode('Take attendence');
            group_information_div.id = i;
            // console.log(group_information_div.id);
            take_attendence.onclick = function show_attendence(){window.open("Take_attendence.html","_self");};
            attend_percent.classList.add('attendence_percentage');
            group_information_div.classList.add('dynamic_create_div_for_group');
            take_attendence_background.classList.add('take_attendence_background');
            take_attendence.classList.add('take_attendence_button');
            
            attend_percent.appendChild(text2);
            delete_button.classList.add('delete_button');
            let text = document.createTextNode(result[i].name);
            group_information_div.appendChild(text);
            group_information_div.appendChild(delete_button);
            group_information_div.appendChild(attend_percent);
            take_attendence.appendChild(text1);
            take_attendence_background.appendChild(take_attendence);
            group_information_div.appendChild(take_attendence_background);
            group_container.appendChild(group_information_div);
            
            // add_attendence_data();
        }
        
    }
 //function to create div for group end

 function fetch_username_and_password(){
    let text  = "login Successflly";
    let user_name = document.querySelector('#user_name').value;
    let password = document.querySelector('#password').value;
    console.log("user name",user_name);
    console.log("password",password);

    if((user_name == 2) && (password == 1234)){
        show_notification(text);
        alert("You are login successfully");
        window.open("group.html","_self");
    }
    else{
        alert("Your enter a wrong user name or password");
    }
    
 }

 function add_grp_dailog_box(){
    document.querySelector('.add_group_cover').classList.add('show_add_group_cover')
 }
 function remove_add_group_interface(){
    document.querySelector('.add_group_cover').classList.remove('show_add_group_cover')
 }
 function Goto_login_page(){
    window.open("index.html","_self");
 }
 function show_notification(text_to_be_change){
    change_text.innerHTML = text_to_be_change;
    setTimeout(function display_notification(){
        document.querySelector('.notification').classList.remove('show_notification');
    },300);
 }

 async function add_attendence_data(){
    
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    console.log("i am in attendence");
    let attendence_data = document.querySelector('.attendence_data');
    for(let i=0;i<=result.length;i++){
        let attendence_div = document.createElement('div');
        let member_name = document.createElement('div');
        let call_image = document.createElement('img');
        let a = document.createElement('a');
        let text = document.createTextNode(result[i].name);
        a.href = "tel:"+result[i].phone;
        console.log(a.href);
        attendence_div.classList.add('member_name');
        call_image.classList.add('normal_call_formating');
        call_image.appendChild(a);
        member_name.classList.add('member_name2');
        member_name.appendChild(text);

        let absent = document.createElement('div');
        absent.classList.add('absent_div_formating')
        absent.innerText = "Absent";

        absent.onclick = function change_to_present(){
            if(absent.innerText == 'Absent'){
                absent.innerText = 'Present';
                absent.classList.add('present_div_formatting');
            }
            else if(absent.innerText=='Present'){
                absent.innerText = 'Absent';
                absent.classList.remove('present_div_formatting');
            }
        }

        attendence_div.appendChild(member_name);
        // attendence_div.appendChild(whatsup_call);
        attendence_div.appendChild(call_image);
        attendence_div.appendChild(absent);

        attendence_data.appendChild(attendence_div);
    }

 }

function show_add_member_data_dailog_box(){
    document.querySelector('.add_member_dailog_box_container_cover').classList.add('show_add_member_dailog_box_container_cover');
} 

function hide_add_member_dailog_box(){
    document.querySelector('.add_member_dailog_box_container_cover').classList.remove('show_add_member_dailog_box_container_cover');
}

function goto_group_page(){
    window.open("group.html","_self");
}
