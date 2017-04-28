document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com';
var cats = '/books/2016/dec/07/top-10-cats-in-literature';
var uknews = '/uk-news';
var freeweatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';

newsController = new NewsController(freeweatherapi);
var json_obj = newsController.requestAndParseAPI();

var articleList = new ArticleList();
articleList.storeArticle(new Article(json_obj.main.temp + ' is the temperature!'));
articleList.storeArticle(new Article(json_obj.name + ' is where we are!'));
var articleListView = new ArticleListView(articleList);
articleListView.renderHeadlines();

});
