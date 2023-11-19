// function show_notification(text){
//     let notification_text = document.querySelector('#group_page');
//     notification_text = text;
//     notification_text.classList.add('show_notification');
// }
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
        for(let i=0;i<=result.length;i++)
        {

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
            
            // to delete the group start
            delete_button.onclick = function remove_group(){
                let group_container = document.querySelector('.group_container_cover');
                let take_conformation = document.createElement('div');
                let contain_yes_no = document.createElement('div');
                let yes = document.createElement('div');
                let no = document.createElement('div');
                let text_want = document.createTextNode("Want to delete the group?");
                let text_yes = document.createTextNode("Yes");
                let text_no = document.createTextNode("No");

                take_conformation.classList.add('conformation_to_delete_group');
                contain_yes_no.classList.add('contain_yes_no');
                yes.classList.add('yes');
                no.classList.add('no');

                yes.appendChild(text_yes);
                no.appendChild(text_no);
                group_container.appendChild(take_conformation);

                take_conformation.appendChild(text_want);
                take_conformation.appendChild(contain_yes_no);
                contain_yes_no.appendChild(yes);
                contain_yes_no.appendChild(no);

                yes.onclick = function delete_group(){
                    group = document.querySelector('.group_information');
                    group.removeChild(group_information_div );
                    take_conformation.classList.add('hide_conformation_to_delete_group');

                }
                
                no.onclick = function donot_delete_group(){
                    take_conformation.classList.add('hide_conformation_to_delete_group');
                }
            }
            // delete group end

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
        alert("You are login successfully");
        window.open("group.html","_self");
        // show_notification("login Successfully");
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

 async function add_attendence_data(){
    
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    console.log("i am in attendence");
    let attendence_data = document.querySelector('.attendence_data');
    for(let i=0;i<=result.length;i++){
        let attendence_div = document.createElement('div');
        let member_name = document.createElement('div');
        let conatiner_call_image = document.createElement('div');
        let call_image = document.createElement('div');
        let a = document.createElement('a');
        let text = document.createTextNode(result[i].name);
        a.href = "tel:"+result[i].phone;
        console.log(a.href);
        attendence_div.classList.add('member_name');
        call_image.classList.add('normal_call_formating');
        conatiner_call_image.classList.add('container_call_image');
        conatiner_call_image.appendChild(a);
        a.appendChild(call_image);
        member_name.classList.add('member_name2');
        member_name.appendChild(text);

        let absent = document.createElement('div');
        absent.classList.add('absent_div_formating')
        absent.innerText = "Absent";

        call_image.onclick = function change_image(){
            call_image.classList.add('normal_call_frmating_change_image');
        }

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
        attendence_div.appendChild(conatiner_call_image);
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

function add_member_to_the_server(){
    let member_name1 = document.querySelector('#member_name');
    let member_phone_no = document.querySelector('#member_phone_no');
    let suitable_day = document.querySelector('.Suitable_day');
    let member_area = document.querySelector('#member_area');
    let Facilitator = document.querySelector('#member_facilitor');
    let member_program_attending = document.querySelector('#member_program_attending');
    let comments_for_member = document.querySelector('#comments_for_member');

    console.log(member_name1.value);
    console.log(member_phone_no.value);
    console.log(suitable_day.value);
    console.log(member_area.value);
    console.log(Facilitator.value);
    console.log(member_program_attending.value);
    console.log(comments_for_member.value);
    // console.log();
    
    let attendence_data = document.querySelector('.attendence_data');
    let attendence_div = document.createElement('div');
        let member_name = document.createElement('div');
        let conatiner_call_image = document.createElement('div');
        let call_image = document.createElement('div');
        let a = document.createElement('a');
        let text = document.createTextNode(member_name1.value);
        a.href = "tel:"+member_phone_no.value;
        console.log(a.href);
        attendence_div.classList.add('member_name');
        call_image.classList.add('normal_call_formating');
        conatiner_call_image.classList.add('container_call_image');
        conatiner_call_image.appendChild(a);
        a.appendChild(call_image);
        member_name.classList.add('member_name2');
        member_name.appendChild(text);

        let absent = document.createElement('div');
        absent.classList.add('absent_div_formating')
        absent.innerText = "Absent";

        call_image.onclick = function change_image(){
            call_image.classList.add('normal_call_frmating_change_image');
        }

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
        attendence_div.appendChild(conatiner_call_image);
        attendence_div.appendChild(absent);

        attendence_data.appendChild(attendence_div);


    member_name.value ='';
    member_phone_no.value ='';
    suitable_day.value = '';
    member_area.value = '';
    Facilitator.value = '';
    member_program_attending.value = '';
    comments_for_member.value = '';

}

function get_group_data(){
    let group_name = document.querySelector('#group_name').value;
    let group_place = document.querySelector('#group_place').value;

    let group_container = document.querySelector('.group_information');
    let group_information_div = document.createElement('div');
    let delete_button = document.createElement('div');
    let attend_percent = document.createElement('div');
    let text2 = document.createTextNode('Attendence Precent: ');
    let take_attendence_background = document.createElement('div');
    let take_attendence = document.createElement('div');
    let text1 = document.createTextNode('Take attendence');

    take_attendence.onclick = function show_attendence(){window.open("Take_attendence.html","_self");};
    attend_percent.classList.add('attendence_percentage');

    group_information_div.classList.add('dynamic_create_div_for_group');
    take_attendence_background.classList.add('take_attendence_background');
    take_attendence.classList.add('take_attendence_button');

    attend_percent.appendChild(text2);
    delete_button.classList.add('delete_button');
    let text = document.createTextNode(group_name);
    group_information_div.appendChild(text);
    group_information_div.appendChild(delete_button);
    group_information_div.appendChild(attend_percent);
    take_attendence.appendChild(text1);
    take_attendence_background.appendChild(take_attendence);
    group_information_div.appendChild(take_attendence_background);
    group_container.appendChild(group_information_div);

    delete_button.onclick = function remove_group(){
        let group_container = document.querySelector('.group_container_cover');
        let take_conformation = document.createElement('div');
        let contain_yes_no = document.createElement('div');
        let yes = document.createElement('div');
        let no = document.createElement('div');
        let text_want = document.createTextNode("Want to delete the group?");
        let text_yes = document.createTextNode("Yes");
        let text_no = document.createTextNode("No");

        take_conformation.classList.add('conformation_to_delete_group');
        contain_yes_no.classList.add('contain_yes_no');
        yes.classList.add('yes');
        no.classList.add('no');

        yes.appendChild(text_yes);
        no.appendChild(text_no);
        group_container.appendChild(take_conformation);

        take_conformation.appendChild(text_want);
        take_conformation.appendChild(contain_yes_no);
        contain_yes_no.appendChild(yes);
        contain_yes_no.appendChild(no);

        yes.onclick = function delete_group(){
            group = document.querySelector('.group_information');
            group.removeChild(group_information_div );
            take_conformation.classList.add('hide_conformation_to_delete_group');

        }
        
        no.onclick = function donot_delete_group(){
            take_conformation.classList.add('hide_conformation_to_delete_group');
        }
    }


    console.log(group_name);
    console.log(group_place);

    group_name = '';
    group_place = '';

}


