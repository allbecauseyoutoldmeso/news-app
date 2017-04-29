document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com';
var ukNews = '/uk-news';

// apiGetter = new ApiGetter(makers + guardian + ukNews);
// newsController = new NewsController(apiGetter.requestAndParseAPI());
// newsController.createArticles();
// newsController.renderHeadlines();



function makeUrlChange() {
  window.addEventListener('hashchange', showSummary);
}

function showCurrentNote() {
  noteController.renderSingle(getNoteFromUrl(window.location));
}

function getNoteFromUrl(location) {
  return location.hash.split('headline_')[1];
}

});



//newsController._articleList._articles.forEach(function(article) {
//   apiGetter = new ApiGetter(makers + aylien + article.url());
//   console.log(apiGetter.requestAndParseAPI());
//   article.addSummary(apiGetter.requestAndParseAPI());

//summary = document.getElementById('summary_0');

//newsController._articleList._articles[0]._summary.sentences[0]
//newsController._articleList._articles[0]._summary.text
