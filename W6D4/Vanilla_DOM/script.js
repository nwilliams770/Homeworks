document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const handleFavSubmit = function (el) {
    el.preventDefault();
    
    const favInput = document.querySelector(".favorite-input");
    const fav = favInput.value;
    favInput.value = "";
    
    const newListLi = document.createElement("li");
    newListLi.textContent = favorite;
    
    const favsList = document.getElementById("sf-places");
    favsList.appendChild(newListLi);
  };
  
  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", handleFavSubmit);


  // adding new photos

  // --- your code here!
  const showPicsForm = (e) => {
    const picFormDiv = document.querySelector(".photo-form-container");
    if (picFormDiv.className === "photo-form-container") {
      picFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };
  
  const picFormShowButton = document.querySelector(".photo-form-container");
  picFormShowButton.addEventListener("click", showPicsForm);
  
  const handlePicSubmit = (e) => {
    e.preventDefault();
    
    const picUrlInput = document.querySelector(".photo-url-input");
    const picUrl = picUrlInput.value;
    picUrlInput.value = "";
    
    const newPic = document.createElement("img");
    newPic.src = picUrl;
    
    const newPicLi = document.createElement("li");
    newPicLi.appendChild(newPic);
    
    const dogPicsList = document.querySelector(".dog-photos");
    dogPicsList.appendChild(newPicLi);
  };
  
  const picSubmitButton = document.querySelector(".photo-url-submit");
  picSubmitButton.addEventListener("click", handlePicSubmit);
});
