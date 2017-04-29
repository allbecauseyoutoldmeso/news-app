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
  window.addEventListener('hashchange', summaryOrText);
}

function summaryOrText() {
  if(window.location.hash.includes('headline')) {
    showSummary();
  } else
  showText();
}

function showSummary() {
  var articleId = getSummaryIdFromUrl(window.location);
  var apiGetter = new ApiGetter(makers + aylien + newsController.getArticleById(articleId).url());
  newsController.updateArticle(articleId, apiGetter.requestAndParseAPI());
  newsController.renderSummary(articleId);
}

function showText() {
  var articleId = getTextIdFromUrl(window.location);
  var textDiv = document.getElementById('text_' + articleId);
  textDiv.innerHTML = newsController.getArticleById(articleId).viewText();
}

function getTextIdFromUrl(location) {
  return location.hash.split('summary_')[1];
}

function getSummaryIdFromUrl(location) {
  return location.hash.split('headline_')[1];
}

makeUrlChange();

});
