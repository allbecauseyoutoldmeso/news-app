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
  var apiGetter = new ApiGetter(makers + aylien + newsController.getArticleById(articleId).url());
  newsController.updateArticle(articleId, apiGetter.requestAndParseAPI());
  newsController.renderSummary(articleId);
}

function getNoteFromUrl(location) {
  return location.hash.split('headline_')[1];
}

makeUrlChange();

});
