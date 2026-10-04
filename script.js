let searchInput=document.querySelector(".search-box input");
let searchButton=document.querySelector(".search-box button");

searchButton.addEventListener('click',function(){
    let searchText=searchInput.value;

    if(searchText===""){
        alert("please enter a book name!!");
    }else{
        alert("you searched for " + searchText);
    }

});