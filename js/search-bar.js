//desktop search bar
var lg_button = document.getElementById('link'); //or grab it by tagname etc

document.getElementById("location").addEventListener("keyup", ()=>{
    
var get_location_lg = document.getElementById("location").value
// console.log(get_location)

lg_button.href = `search.html?${get_location_lg}`
})


//mobile search bar
var sm_button = document.getElementById('link_mobile'); //or grab it by tagname etc

document.getElementById("location_mobile").addEventListener("keyup", ()=>{
    
var get_location = document.getElementById("location_mobile").value
// console.log(get_location)

sm_button.href = `search.html?${get_location}`
})
