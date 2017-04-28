(function(exports) {

  function NewsController(jsonObj) {
    this._results = jsonObj.response.results;
    this._articleList = new ArticleList();
  }

  NewsController.prototype.createArticles = function() {
    for(x=0; x<10; x++) {
      var thisArticle = new Article(this._results[x].webTitle);
      thisArticle.addUrl(this._results[x].webUrl);
      this._articleList.storeArticle(thisArticle);
    }
  };

  NewsController.prototype.renderHeadlines = function() {
    var articleListView = new ArticleListView(this._articleList);
    articleListView.renderHeadlines();
  };

  exports.NewsController = NewsController;
})(this);
