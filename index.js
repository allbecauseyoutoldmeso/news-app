document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com';
var guardian = '/guardian?apiRequestUrl=http://content.guardianapis.com';
var ukNews = '/uk-news';
var aylien = '/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';

var apiGetter = new ApiGetter(makers + guardian + ukNews);
var newsController = new NewsController(apiGetter.requestAndParseAPI());
newsController.createArticles();
newsController.renderHeadlines();

function makeUrlChange() {
  window.addEventListener('hashchange', showSummary);
}

function showSummary() {
  var articleId = getNoteFromUrl(window.location);
  var article = newsController._articleList._articles[articleId];
  var apiGetter = new ApiGetter(makers + aylien + article.url());
  var json_obj = apiGetter.requestAndParseAPI();
  article.addSummary(json_obj.sentences);
  article.addText(json_obj.text);
  var summaryDiv = document.getElementById('summary_' + articleId);
  summaryDiv.innerHTML = article.viewSummary()[0];
}

function getNoteFromUrl(location) {
  return location.hash.split('headline_')[1];
}

makeUrlChange();

});
