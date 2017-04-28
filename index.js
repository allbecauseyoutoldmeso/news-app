document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com';
var ukNews = '/uk-news';

newsController = new NewsController(makers + guardian + ukNews);
// newsController.requestAndParseAPI();
// newsController.createArticles();
// newsController.renderHeadlines();

});
