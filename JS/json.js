
function click_me(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    // .then(data=>console.log(data))
}