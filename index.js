document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com';
var ukNews = '/uk-news';

apiGetter = new ApiGetter(makers + guardian + ukNews);
jsonObj = apiGetter.requestAndParseAPI();
newsController = new NewsController(jsonObj);
newsController.createArticles();
newsController.renderHeadlines();

});
