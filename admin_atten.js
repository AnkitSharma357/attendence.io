async function getstudentsdetails(){
    let result = await fetch('http://localhost:3000/admin/control',{method:'GET'});
    result = await result.json();
    if(result.message == 'error'){
        alert("server error please login Again");
        window.open('login.html','_self');
    }
    else{
        table_name();
        displaystudentdata(result);
    }
}

function displaystudentdata(result){
    let student_conatiner = document.querySelector('.student_conatiner');
    
    for(let i=0;i<result.length;i++){

        let student_details = document.createElement('div');
        student_details.classList.add('student_details');

        // let attendence_scroll = document.createElement('div');
        // attendence_scroll.classList.add('attendence_scroll');

        let element = document.getElementById(result[i].phone);

        if(element == null){

            // console.log('I am in if')
            student_details.id = result[i].phone;
            // attendence_scroll.id = result[i].phone + i;

            let student_detail_container = document.createElement('div');
            student_detail_container.classList.add('student_detail_container');

            let student_name_container = document.createElement('div');
            let student_name = document.createTextNode(result[i].name);
            student_name_container.appendChild(student_name);
            student_name_container.classList.add('student_name_container')

            let student_phone = document.createElement('div');
            let phone = document.createTextNode(result[i].phone);
            student_phone.appendChild(phone)
            student_phone.classList.add('student_phone')

            student_detail_container.appendChild(student_name_container);
            student_detail_container.appendChild(student_phone);
            student_details.appendChild(student_detail_container);
            // student_details.appendChild(attendence_scroll);
            student_conatiner.appendChild(student_details);
        }
        else{
            null;
        }
    }
        for(let j=0;j<result.length;j++){
            

            // console.log("I am in for 2");

            let select_div = document.getElementById(result[j].phone);
            // let attendence_scroll = document.getElementById(result[j].phone+j)

            let id = result[j].phone +result[j].date;
            // console.log("id: ",id);

            let attendence_container = document.createElement('div');
            attendence_container.classList.add('attendence_container');
            let attendence_check = document.getElementById(id);
            // console.log(attendence_check);

            if(attendence_check == null){
                attendence_container.id = id;
                let date_container = document.createElement('div');
                let date = document.createTextNode(result[j].date);
                date_container.appendChild(date);
                date_container.classList.add('date_container');
            

                let attendence = document.createElement('div');
                let marks = document.createElement('div');
                attendence.classList.add('attendence');

                if(result[j].attendence == "Present"){
                    marks.classList.add('markspresent');
                    attendence.appendChild(marks);
                    attendence_container.classList.add('greenborder');
                }
                else{
                    marks.classList.add('marksabsent');
                    attendence.appendChild(marks);
                    attendence_container.classList.add('redborder');
                }

                attendence_container.appendChild(date_container);
                attendence_container.appendChild(attendence)

                // attendence_scroll.appendChild(attendence_container);
                select_div.appendChild(attendence_container);
                // console.log(date,marks);
                // console.log('add successfully');
            }
        } 

}

async function table_name(){
    let name = await fetch('http://localhost:3000/table/name',{method:'GET'})
    name = await name.json();

    let table_name = document.querySelector('.table_name');
    table_name.innerHTML = name.table;
}

function gotoattendence(){
    window.open('group.html','_self');
}
getstudentsdetails();