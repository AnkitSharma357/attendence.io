async function fetch_Group_data(){
    let result = await fetch('https://attendenceserviceapp.cyclic.app/data',{method:'GET'});
    result = await result.json();
    console.log(result);
    create_group_information_div(result);

}

function create_group_information_div(result)
{
    for(let i=0;i<=result.length;i++)
    {
        
        let all_grp_container = document.querySelector('.all_group_container');
        let grp_information = document.createElement('div');
        let grp_name = document.createElement('div');
        let delete_button = document.createElement('div');
        let take_attendence = document.createElement('div');
        let percentage = document.createElement('div');
        let Attendence = document.createTextNode('Attendence percentage: ')
        let text = document.createTextNode("Take Attendence");
        let text_grp_name = document.createTextNode(result[i].name);

        //adding css class to dyanamically created div
        grp_information.classList.add('group_information');
        grp_name.classList.add('grp_name');
        percentage.classList.add('percentage');
        delete_button.classList.add('delete_button');
        take_attendence.classList.add('take_attendence')

        //deleting grp
        delete_button.onclick = function remove_grp()
        {
            let delete_div = document.querySelector('.delete_group_choise')
            let delete_conformation = document.createElement('div');
            let yesnocontainer = document.createElement('div');
            let yes_bttn = document.createElement('div');
            let no_bttn  = document.createElement('div');
            let yes_text = document.createTextNode('YES');
            let no_text = document.createTextNode('NO');
            let text = document.createTextNode('Data related to group is permanetlly delete !!!');

            //adding class to the div 
            delete_conformation.classList.add('delete_conformation');
            yesnocontainer.classList.add('yesnocontainer')
            yes_bttn.classList.add('yes_bttn');
            no_bttn.classList.add('no_buttn');
            //end

            //appending div and text 
            delete_conformation.appendChild(text);
            yes_bttn.appendChild(yes_text)
            no_bttn.appendChild(no_text)

            delete_div.appendChild(delete_conformation)
            delete_div.appendChild(yesnocontainer)
            yesnocontainer.appendChild(yes_bttn);
            yesnocontainer.appendChild(no_bttn);
            //end

            document.querySelector('.delete_group_cover').classList.add('show_delete_group_cover');

            yes_bttn.onclick = async function delete_group(){
                try{
                    let group_name = document.getElementById(grp_information.id).querySelector('.grp_name').innerText;
                    let without_Space_name = group_name.split(" ").join("");
                    let group_id = 
                    {
                        method:'DELETE',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                        body:JSON.stringify({
                            id: grp_information.id,
                            group_name:without_Space_name
                        })
                    }
                    let del_group = await fetch('https://attendenceserviceapp.cyclic.app/deletegroup',group_id);
                    document.querySelector('.delete_group_cover').classList.remove('show_delete_group_cover');
                    location.reload();
                }
                catch(err){

                }
            }

            no_bttn.onclick = function does_not_delete_group(){
                document.querySelector('.delete_group_cover').classList.remove('show_delete_group_cover');
                location.reload();  
            }
        }
        //delete group

        //take attendence button function
        take_attendence.onclick = async function goto_attendence(){
            let group_name = document.getElementById(grp_information.id).querySelector('.grp_name').innerText;
            let without_Space_name = group_name.split(" ").join("");
            let group_obj={
                method:'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body:JSON.stringify({
                    name: without_Space_name,
                })
            }
            
            let post_group_name = await fetch('https://attendenceserviceapp.cyclic.app/postgroupname',group_obj);
            window.open('Take_attendence.html','_self');   
        };
        //take attendence button function finish

        grp_name.appendChild(text_grp_name);
        percentage.appendChild(Attendence);
        take_attendence.appendChild(text);
        grp_information.id = result[i].id;//group infoormation id
        grp_information.appendChild(grp_name);
        grp_information.appendChild(percentage);
        grp_information.appendChild(delete_button);
        grp_information.appendChild(take_attendence);
        all_grp_container.appendChild(grp_information); 
        
    }
}

async function add_group(){
    let group_name = document.querySelector('#group_name').value;
    let without_Space_name = group_name.split(" ").join("");
    let group_obj={
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({
            name: group_name,
            table:without_Space_name,
        })
    }

    let created_group = await fetch('https://attendenceserviceapp.cyclic.app/addgroup',group_obj);
    document.querySelector('.add_group_cover').classList.remove('show_add_group_cover');
    location.reload();
}

function add_dailog_box(){
    document.querySelector('.add_group_cover').classList.add('show_add_group_cover');
}

function remove_add_dailog_box(){
    document.querySelector('.add_group_cover').classList.remove('show_add_group_cover');
}

function logout(){
    alert('Logout successfully');
    window.open('login.html','_self');
}

fetch_Group_data();