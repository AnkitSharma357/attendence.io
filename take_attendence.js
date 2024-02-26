var result;
var person_id;
async function fetchperticulargroup(){
    let data = await fetch('http://localhost:3000/tabledata',{method:'GET'});
    data = await data.json();
    console.log(data);
    result = data;
    dataLenght = data.length;
    create_div_for_attendence(data);
}
let get_person_name;
let get_phone;
let address;
let commnets;
 async function create_div_for_attendence(data){
    for(let i=0;i<=data.length;i++){
        let attendence_container = document.querySelector('.attendence_data_Container');
        let person_data = document.createElement('div');
        let person_name_container = document.createElement('div');
        let person_name = document.createTextNode(data[i].name);
        // let container = document.createElement('div');
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
        person_name_container.id = i;
        let person = person_name_container.id;
        // container.appendChild(absent_present_container);

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

        //delete a perticular record
        person_name_container.onclick = function update_tabledata(){
            document.querySelector('.cover_persona_data').classList.add('show_cover_person_data');
            document.querySelector('.update_person_dailog_box').classList.add('show_update_person_dailog_box');
            person_id = person_data.id;
            get_person_name = document.getElementById(person_id).querySelector('.person_name_container').innerHTML;
            get_phone = data[person].phone;
            address =data[person].address;
            comments = data[person].comments;
            get_person_details();
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

async function submitAttendnece(){
    let current_date = new Date().toLocaleDateString();
    let array = [];
    

    for(let i=0;i<result.length;i++){
        let attendence = document.getElementById(result[i].id).querySelector('.absent_present_container').innerHTML;
        var data = {
            person_name : result[i].name,
            marks_attendence : attendence,
            date : current_date
        };
        array.push(data);
    }


    let obj = {
        method:'POST',
         headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            data: array,
            lenght : array.length
        })
    }

    let sendattendence =  await fetch('http://localhost:3000/attendencedata',obj);
    sendattendence = await sendattendence.json();

    if(sendattendence.query == 'ok'){
        alert('Attendence Mark successfully');
        document.querySelector('.submit_button').classList.remove('show_submit_button');
    }
    else{
        alert('Attendence does not Marks due to some server side issues');
    }
}

function hide_update_person_dailog_box(){
    document.querySelector('.cover_persona_data').classList.remove('show_cover_person_data');
    document.querySelector('.update_person_dailog_box').classList.remove('show_update_person_dailog_box');
}

async function update_person(){
    let name = document.querySelector('#update_person_name');
    let phone_number = document.querySelector('#update_person_phone_no');
    let address = document.querySelector('#update_person_address');
    let comments = document.querySelector('#update_person_commnets');

    let update_name = name.value;
    let update_phone_number = phone_number.value;
    let update_address = address.value;
    let update_commnets = comments.value; 

    let obj = {
        method:'PUT',
        headers: {
           "Content-type": "application/json; charset=UTF-8",
       },
       body:JSON.stringify({
            id:person_id,
           name: update_name,
           phone: update_phone_number,
           address: update_address,
           comments: update_commnets
       })
    }

    let sendupdate = await fetch('http://localhost:3000/updateperson',obj);
    sendupdate = await sendupdate.json();
    if(sendupdate.message == "updated"){
        alert('Person Updated Successufully');
        document.querySelector('.cover_persona_data').classList.remove('show_cover_person_data');
        document.querySelector('.update_person_dailog_box').classList.remove('show_update_person_dailog_box');
        location.reload();
    }
    else{
        alert('Person not Updated due to server issue');
        document.querySelector('.cover_persona_data').classList.remove('show_cover_person_data');
        document.querySelector('.update_person_dailog_box').classList.remove('show_update_person_dailog_box');
    }

}

function get_person_details(){
    let name = document.querySelector('#update_person_name');
    let phone_number = document.querySelector('#update_person_phone_no');
    let person_address = document.querySelector('#update_person_address');
    let person_comments = document.querySelector('#update_person_commnets');

    name.value = ''; phone_number.value = '';person_address.value = ''; person_comments.value = ''; 

    name.value = get_person_name;
    phone_number.value = get_phone;
    
    if(address == ''){
        person_address.value = '';
    }
    else{
        person_address.value = address;
    }

    if(comments == ''){
        person_comments.value = '';
    }
    else{
        person_comments.value = comments;
    }

}

function delete_person(){
    document.querySelector('.delete_conformation').classList.add('show_delete_conformation');
}

function removedailogbox(){
    document.querySelector('.delete_conformation').classList.remove('show_delete_conformation');
}

async function removeperson(){
    let obj = {
        method:'DELETE',
        headers: {
           "Content-type": "application/json; charset=UTF-8",
       },
       body:JSON.stringify({
            id:person_id
       })
    }

    let delete_person = await fetch('http://localhost:3000/deleteuserformgroup',obj);
    delete_person = await delete_person.json();
    console.log(delete_person);

    if(delete_person.message == "delete"){
        alert('person deleted succesfully');
        location.reload();
    }
    else if(delete_person.message == "server issue"){
        alert('Server Issue Person Not deleted');
    }
    else{
        alert("Server Not Responding");
    }
}

fetchperticulargroup();