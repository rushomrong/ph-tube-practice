console.log("video script added");

//?fetch categories
const loadCategories = () => {
  //fetching data url

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error)); // error display
};

//? load videos from the api objects
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

//? fetch videos
const displayVideos = (videos) => {
  //display to the container
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);

    //! create a video property card for each
    const card = document.createElement("div");
    card.classList = "card card-compact rounded";
    card.innerHTML = `
      <figure class="h-[250px] w-[200px]">
        <img style="width:auto; height:208px;" src=${video.thumbnail} />
       </figure>
      <div class="px-0 py-2 flex gap-2">

        <div>
          <img style="width:50px; height:50px; border-radius:50%" src=${video.authors[0].profile_picture}/>
        </div>
        <div>
         <h2 style="font-weight:900; font-size: 16px">${video.title}</h2>
          <div class="flex items-center gap-2">
           <p class="text-lg font-bold">${video.authors[0].profile_name}</p>
           <img style="width:25px; height:25px; border-radius:50%" src="/assets/verify.png"/>
          </div>
        
  
      </div>
    `;

    //! append the cards to the container
    videoContainer.append(card);
  });
};

//! display fetch categories data
const displayCategories = (categories) => {
  //! category container
  const categoryContainer = document.getElementById("categories");

  //?for loop to separate the categories 1 by 1
  categories.forEach((videoItems) => {
    console.log(videoItems);

    //!button creation it will auto create button from the api categories
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = videoItems.category; //? this category is calling from the api objects

    //? need to add button to category container
    categoryContainer.append(button);
  });
};

//? call the functions
loadCategories();
loadVideos();
