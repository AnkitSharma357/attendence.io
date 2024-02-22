async function fetchperticulargroup(){
    let data = await fetch('http://localhost:3000/tabledata',{method:'GET'});
    data = await data.json();
    console.log(data);
    create_div_for_attendence(data);
}

function create_div_for_attendence(data){
    for(let i=0;i<=data.length;i++){
        let attendence_container = document.querySelector('.attendence_data_Container');
        let person_data = document.createElement('div');
        let person_name_container = document.createElement('div');
        let person_name = document.createTextNode(data[i].name);
        let absent_present_container = document.createElement('div');
        let absent_text = document.createTextNode('Absent');
        let Present_text = document.createTextNode('Present');
        let call_image = document.createElement('div');
        let phone_nmber = document.createElement('a');

        phone_nmber.href = 'tel:'+data[i].phone;

        //adding class to the dynamic div
        absent_present_container.className = 'absent_present_container';
        person_data.classList.add('person_data');
        person_name_container.classList.add('person_name_container');
        call_image.classList.add('call_image');
        absent_present_container.classList.add('absent_present_container');
        phone_nmber.classList.add('phone_nmber');

        //Absent and Present logic
        absent_present_container.onclick = function putattendence(){
            let text = document.getElementById(person_data.id).querySelector('.absent_present_container').innerHTML
            document.querySelector('.submit_button').classList.add('show_submit_button');
            if(text == 'Absent'){
                absent_present_container.removeChild(absent_text);
                absent_present_container.appendChild(Present_text);
                absent_present_container.classList.add('present_text');
            }
            else if(text == 'Present'){
                absent_present_container.appendChild(absent_text);
                absent_present_container.removeChild(Present_text);
                absent_present_container.classList.remove('present_text');
            }
        }

        phone_nmber.appendChild(call_image);
        person_name_container.appendChild(person_name);
        person_data.appendChild(person_name_container);
        person_data.appendChild(phone_nmber);
        person_data.appendChild(absent_present_container);
        absent_present_container.appendChild(absent_text);
        person_data.id = data[i].id;
        attendence_container.appendChild(person_data);
    }
}

function show_add_person_dailog_box(){
    document.querySelector('.add_person_cover').classList.add('show_add_person_cover');
    document.querySelector('.add_person_dailog_box').classList.add('show_person_dailog_box');
}

function hide_add_person_dailog_box(){
    let name = document.querySelector('#name').value ='';
    let phone_number = document.querySelector('#phone_no').value ='';
    let address = document.querySelector('#address').value = '';
    let comments = document.querySelector('#commnets').value = '';
    document.querySelector('.add_person_cover').classList.remove('show_add_person_cover');
    document.querySelector('.add_person_dailog_box').classList.remove('show_person_dailog_box');
}

async function put_person_details(){
    let name = document.querySelector('#name').value;
    let phone_number = document.querySelector('#phone_no').value;
    let address = document.querySelector('#address').value;
    let comments = document.querySelector('#commnets').value;
    console.log(name,phone_number,address,comments);
    let person_details = {
        method:'POST',
         headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            name: name,
            phone: phone_number,
            address: address,
            comments: comments,
        })
    }
    let data = await fetch('http://localhost:3000/postpersondetails',person_details);
    data = await data.json();
    console.log(data);
    document.querySelector('.add_person_cover').classList.remove('show_add_person_cover');
    document.querySelector('.add_person_dailog_box').classList.remove('show_person_dailog_box');
    location.reload();
}

function goto_group(){
    window.open('group.html','_self');
}

let current_date = new Date().toLocaleDateString();
console.log("Current date: ",current_date);










fetchperticulargroup();