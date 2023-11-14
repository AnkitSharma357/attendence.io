let group_information_div
async function fetch_user(){
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    result = await result.json();
    console.log(result);
    
 
}
//function to create div for group start
 function create_div_for_group_information(){
    let group_container = document.querySelector('.group_container');
    let group_information_div = document.createElement('div');
    let text = document.createTextNode('hello evrey one');
    group_information_div.classList.add('dynamic_create_div_for_group');
    group_information_div.appendChild(text);

    group_container.appendChild(group_information_div);
 }
 //function to create div for group end

 create_div_for_group_information();