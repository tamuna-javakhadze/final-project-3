// slider
let data = [
    {id: 1, url: "images/hero-slider/1.jpg"},
    {id: 2, url: "images/hero-slider/2.jpg"},
    {id: 3, url: "images/hero-slider/3.jpg"},
    {id: 4, url: "images/hero-slider/4.jpg"},
    {id: 5, url: "images/hero-slider/5.jpg"},
    {id: 6, url: "images/hero-slider/6.jpg"},
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let dotItem = document.getElementsByClassName("dot");

function createDiv(){
    const div = document.createElement("div");
    div.classList.add("slide");
    return div;
}

function createImg(item){
    const img = document.createElement("div");
    img.style.backgroundImage = `url(${item.url})`;
    img.classList.add("image-slider");
    return img;
}

function createDots(){
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dots-wraper");
    data.forEach(element => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.setAttribute("data-id", element.id);
        dotsParent.appendChild(dot);

        dot.addEventListener("click", function(event){
            let id = event.target.getAttribute("data-id");
            sliderIndex = id-1;
            slide();
        });
    });
    return dotsParent;
}

function slide(){
    sliderContent.innerHTML = " ";
    const slideItem = createDiv(data[sliderIndex]);
    const imgTag = createImg(data[sliderIndex]);
    const dotsTag = createDots();

    slideItem.appendChild(imgTag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dotsTag);

    dotItem[sliderIndex].classList.add("active-dot");
}

function arrowLeftClick(){
    if(sliderIndex==0){
        sliderIndex = data.length - 1;
        slide();
        return;
    }
    sliderIndex--;
    slide();
}

function arrowRightClick(){
    if(sliderIndex==data.length-1){
        sliderIndex = 0;
        slide();
        return;
    }
    sliderIndex++;
    slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

setInterval(()=> {
    arrowRightClick();
}, 5000); 

slide();

// fetch
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