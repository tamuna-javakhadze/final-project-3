'use strict'

// team
let currentPage = 1;
let post = document.getElementById("team");

function getUsers(page){
    fetch("https://reqres.in/api/users?page=" + page, {
    METHOD: "GET"
})
.then(function(text){
    if (text.status !== 200){
        throw text.status;
    }
    return text.json();
})
.then(function(converted){
    converted.data.forEach((item) => {
        let user = document.createElement("p");
        user.classList.add("user-name");
        user.innerText = `${item.first_name} ${item.last_name}`;

        let avatar = document.createElement("img");
        avatar.src = item.avatar;
        avatar.setAttribute("alrt", "avatar");
        avatar.classList.add("avatar");

        let nameAvatarWraper = document.createElement("div");
        nameAvatarWraper.classList.add("name-avatar-wraper");
        let nameAvatar = document.createElement("div");

        nameAvatar.appendChild(user);
        nameAvatar.appendChild(avatar);
        nameAvatarWraper.appendChild(nameAvatar);
        post.appendChild(nameAvatarWraper);
    });
})
.catch(function(error){
    if(error == 404){
        let p = document.createElement("p");
        p.textContent = "page not found";
        p.classList.add("text");
        post.appendChild(p);
    }
});
}
// load more
let loadMore = document.getElementById("loadmore");
loadMore.addEventListener("click", function(){
    currentPage++;
    getUsers(currentPage);
    loadMore.remove();
});

getUsers(currentPage);


// on scroll slide up
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".slide-up");
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 50) { // Adjust the threshold as needed
        element.classList.add("active");
      }
    });
});