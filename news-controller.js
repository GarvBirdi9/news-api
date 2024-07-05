import { apiCall } from "./api-client.js";

function loadNews() {
  const URL =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=11f0dc28d8874be0bb82287cbcf26121";
  const promise = fetch(URL);
  promise
    .then(function (response) {
      const pr = response.json();
      pr.then(function (data) {
        loadNewz(data.articles);
      }).catch(function (err) {
        console.log("Cannot load API");
      });
    })
    .catch(function (err) {
      console.log("cannot load API");
    });
}

loadNews();

function loadNewz(news) {
  for (var i = 0; i < news.length; i++) {
    if (news[i]["urlToImage"]) {
      //  console.log(news[i]["urlToImage"]);
      loadNew(news[i]);
    }
  }
}

function loadNew(news) {
  //   console.log(news["urlToImage"]);
  const card = `
<div class="card" style="width: 18rem;">
  <img src="${news["urlToImage"]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${news["title"]}</h5>
    <p class="card-text">${news["content"]}</p>
    <a href="${news["url"]}" class="btn btn-primary" target="_blank">Read More</a>
  </div>
</div>`;

  const div = document.getElementById("output");
  div.innerHTML = div.innerHTML + card;
}
