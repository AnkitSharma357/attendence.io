async function getdata(){
    let phone = document.querySelector('#phone').value;
    let group = document.querySelector('#group').value;
    let facilitator = document.querySelector('#facilitor').value;

    console.log(phone,group,facilitator);

    if((phone == '') || (group == '') || (facilitator == '')){
        alert('Please enter all details');
    }
    else{
        document.querySelector('.student_information').classList.remove('hide_student_information');
        // document.querySelector('.attendencecontainer').classList.add('hide_attendencecontainer')
        let obj = {
            method:'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body:JSON.stringify({
                phone_number:phone,
                group_name:group,
                name:facilitator
            })
        }
        let postdata = await fetch('https://attendenceserviceapp.cyclic.app/show/attendence',obj)
        postdata = await postdata.json();
        console.log(postdata);
    
        let getdata = await fetch('https://attendenceserviceapp.cyclic.app/show/attendence/record',{method:'GET'});
        getdata = await getdata.json();
        console.log(getdata);
    
        display_attendence_record(getdata);
    }
    
}

function display_student_information(){
    document.querySelector('.student_information').classList.add('hide_student_information');
}

function remove_student_information(){
    document.querySelector('.student_information').classList.remove('hide_student_information');
}

function display_attendence_record(getdata){
    let heading = document.querySelector('#heading');
    heading.innerText = getdata[0].name;
    // console.log(heading);
    // console.log("lenght",getdata.length);
    let data = document.querySelector('.show_attendence');
    // data.removeChild(student_data);

    for(let i=0;i<getdata.length;i++){
        let student_data = document.createElement('div');
        let date_container = document.createElement('div');
        let attendence = document.createElement('div');
        let attendence_date = document.createTextNode(getdata[i].date);

        student_data.classList.add('student_data');
        date_container.classList.add('date_container');
        attendence.classList.add('attendence');
        if(getdata[i].attendence == 'Present'){
            attendence.classList.add('tick');
        }
        else{
            attendence.classList.add('cross')
        }

        date_container.appendChild(attendence_date);
        student_data.appendChild(date_container);
        student_data.appendChild(attendence);

        data.appendChild(student_data);
    }

}

function logout(){
    alert('Log Out successfully');
    window.open('login.html','_self');
}