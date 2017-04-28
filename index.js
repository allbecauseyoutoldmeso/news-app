document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com';
var cats = '/books/2016/dec/07/top-10-cats-in-literature';
var uknews = '/uk-news';
var freeweatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';

newsController = new NewsController(makers + guardian + uknews);
// var json_obj = newsController.requestAndParseAPI();

// var articleList = new ArticleList();

// var articleArray = json_obj.response.results;

// for(x=0; x<10; x++) {
//   var thisArticle = new Article(articleArray[x].webTitle);
//   thisArticle.addUrl(articleArray[x].webUrl);
//   articleList.storeArticle(thisArticle);
// }

// var articleListView = new ArticleListView(articleList);
// articleListView.renderHeadlines();

newsController.requestAndParseAPI();
newsController.createArticles();
newsController.renderHeadlines();



});
