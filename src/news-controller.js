(function(exports) {

  function NewsController(jsonObj) {
    this._results = jsonObj.response.results;
    this._articleList = new ArticleList();
    this._articleId = 0;
  }

  NewsController.prototype.createArticles = function() {
    for(x=0; x<10; x++) {
      var thisArticle = new Article(this._results[x].webTitle, this._articleId);
      thisArticle.addUrl(this._results[x].webUrl);
      this._articleList.storeArticle(thisArticle);
      this._articleId += 1;
    }
  };

  NewsController.prototype.renderHeadlines = function() {
    var articleListView = new ArticleListView(this._articleList);
    articleListView.renderHeadlines();
  };

  exports.NewsController = NewsController;
})(this);
