function load_data2(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> show_name(data))
}

function show_name(data_name){
   
    for(let data of data_name){
        let find_the_place=document.getElementById("name_list")
        let create_li=document.createElement('li')
        create_li.innerText=data.name;
        find_the_place.appendChild(create_li)
    }

}