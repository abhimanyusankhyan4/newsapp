//Welcome
console.log('Newsapp')

// 033ca1d7779048148ac96eda249ef122
//Init the API parameters
let source = 'bbc-news';
let apiKey = '033ca1d7779048148ac96eda249ef122';
// Grab the News Container
let newsAccordion = document.getElementById('newsAccordion');

// Create an AJAX get Request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//To do when response is ready

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            // console.log(index);
     
            let news = `
                        
                        <div class="col-lg-4 col-md-6 mb-3">
                            <div class="card h-100">
                                <img class="card-img-top" src="${element['urlToImage']}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text">${element['description']}</p>
                                    <a href="${element['url']}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read More</a>

                                </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('Some Error occured')
    }
}

xhr.send();

