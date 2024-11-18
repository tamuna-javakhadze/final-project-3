// fetch data
const filter = document.getElementById('filter');
let listItems = [];

function loadSlides() {
  fetch("http://localhost:3000/slides", {
    method: "GET",
  })
    .then(function (responseData) {
      if (!responseData.ok) {
        throw responseData.status;
      }
      return(responseData.json());
    })
    .then(function (parsed) {
        const fragment = new DocumentFragment();
  
        parsed.forEach((item) => {
          const box = document.createElement("div");
          const img = document.createElement("img");
          const div = document.createElement("div");
          const title = document.createElement("h3");
          const descr = document.createElement("p");

          box.classList.add('slide-box');
          img.classList.add('slide-img');
          div.classList.add('slide-div');
          title.classList.add('slide-title');
          descr.classList.add('small-text');

          img.src = item.url;
          title.innerText = item.title; 
          descr.innerText = item.description;

          div.appendChild(title);
          div.appendChild(descr);
          box.appendChild(img);
          box.appendChild(div);

          listItems.push(box);

          fragment.appendChild(box);
          filter.appendChild(fragment);
        });
    })
    .catch(function (error) {
        if (error === 404) {
            let pError = document.createElement("p");
            pError.classList.add("green-title", "center");
            pError.textContent = "Page Not Found - 404 error";
            document.getElementById("filter").appendChild(pError);
        }
    });
}
loadSlides();

// filter
function filterSlides (searchItem){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchItem.trim(' ').toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
};

const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', function(){
    const inputValue = document.getElementById("filter-input").value;
    filterSlides(inputValue);
});