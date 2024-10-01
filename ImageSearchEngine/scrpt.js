const searchForm =document.getElementById('search-form');
const searchBox=document.getElementById('search-box');
const searchResult=document.getElementById('search-result');
const showMoreBtn=document.getElementById('show-more-btn');

let keyword="";
let page=1;
const accessKey="llwA3SY4YTd3Ld_1FUOIPvrp1cfCLuzQ13-g-3NFgRo";
async function search() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`; // Fixed 'dlient_id' typo

    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;

        // Clear previous search results if it's a new search (page 1)
        if (page === 1) {
            searchResult.innerHTML = ''; 
        }

        results.map((result) => {
            const image = document.createElement('img');
            image.src = result.urls.small;   // Image URL from Unsplash API
            const imageLink = document.createElement('a');  // Link to the full image
            imageLink.href = result.links.html;   // Link to the Unsplash page
            imageLink.target = "_blank"; // Open the link in a new window
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink); // Append to the search result div
        });
           showMoreBtn.style.display ='block';  //To display show more button which we set to none
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;  // Reset page to 1 whenever we submit the form
    search();
});

showMoreBtn.addEventListener('click', () => {
    page++;  //whenever we click the show more button it increases the page button
    search();
})