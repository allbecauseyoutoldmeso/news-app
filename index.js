document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com';
var guardian = '/guardian?apiRequestUrl=http://content.guardianapis.com';
var ukNews = '/uk-news';
var aylien = '/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';

apiGetter = new ApiGetter(makers + guardian + ukNews);
newsController = new NewsController(apiGetter.requestAndParseAPI());
newsController.createArticles();
newsController.renderHeadlines();

function makeUrlChange() {
  window.addEventListener('hashchange', showSummary);
}

function showSummary() {
  article = newsController._articleList._articles[getNoteFromUrl(window.location)];
  apiGetter = new ApiGetter(makers + aylien + article.url());
  console.log(apiGetter.requestAndParseAPI());
  article.addSummary(apiGetter.requestAndParseAPI());

}

function getNoteFromUrl(location) {
  return location.hash.split('headline_')[1];
}

makeUrlChange();

});





//summary = document.getElementById('summary_0');

//newsController._articleList._articles[0]._summary.sentences[0]
//newsController._articleList._articles[0]._summary.text
