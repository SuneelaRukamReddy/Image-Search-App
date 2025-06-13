

const accessKey = "A6n3UZj1F6R78D69R2CLryddCZjqdYmStubkblPSHQU";

const inputEl = document.getElementById("input-value");
const searchBtn = document.getElementById("search-btn");
const imageContainer = document.getElementById("image-container");

let currentPage = 1;
let currentQuery = "";

// 1. Fetch images from Unsplash API
async function searchImages(query, page = 1, perPage = 12) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("Error fetching images", res.status);
    return [];
  }
  const data = await res.json();
  return data.results;
}

// 2. Display images in the grid
function displayImages(images) {
  // Clear previous results if it's first page
  if (currentPage === 1) {
    imageContainer.innerHTML = "";
  }
  
  images.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("each-image-container");
    
    const img = document.createElement("img");
    img.src = item.urls.regular;
    img.alt = item.alt_description || "Unsplash Image";
    img.classList.add("images-styling");
    div.appendChild(img);
    
    const caption = document.createElement("p");
    caption.textContent = item.description
      ? item.description.slice(0, 25)
      : item.alt_description || "No description";
    div.appendChild(caption);
    
    imageContainer.appendChild(div);
  });
}

// 3. Handle Search button click
searchBtn.addEventListener("click", async () => {
  const query = inputEl.value.trim();
  if (!query) {
    alert("Please enter a search term");
    return;
  }
  currentQuery = query;
  currentPage = 1;

  const images = await searchImages(currentQuery, currentPage);
  displayImages(images);
  
  // Append a "See More" button if results were returned
  if (images.length > 0) {
    addLoadMore();
  }
});

// 4. Add or replace "See More" button
function addLoadMore() {
  let loadBtn = document.getElementById("loadMoreBtn");
  if (loadBtn) return; // Only one

  loadBtn = document.createElement("button");
  loadBtn.textContent = "See More";
  loadBtn.classList.add('w-[480px]')
  loadBtn.id = "loadMoreBtn";
  loadBtn.className = "search-btn";
  
  loadBtn.addEventListener("click", async () => {
    currentPage++;
    const moreImages = await searchImages(currentQuery, currentPage);
    if (moreImages.length > 0) {
      displayImages(moreImages);
    } else {
      loadBtn.textContent = "No more results";
      loadBtn.disabled = true;
    }
  });
  
  imageContainer.parentElement.appendChild(loadBtn);
}





