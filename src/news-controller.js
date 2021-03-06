(function(exports) {

  function NewsController(jsonObj) {
    this._results = jsonObj.response.results;
    this._articleList = new ArticleList();

  }

  NewsController.prototype.createArticles = function() {
    for(x=0; x<10; x++) {
      var thisArticle = new Article(this._results[x].webTitle, x);
      thisArticle.addUrl(this._results[x].webUrl);
      this._articleList.storeArticle(thisArticle);
    }
  };

  NewsController.prototype.renderHeadlines = function() {
    this._articleListView = new ArticleListView(this._articleList);
    this._articleListView.renderHeadlines();
  };

  NewsController.prototype.getArticleById = function(id) {
    return this._articleList.showArticles()[id];
  };

  NewsController.prototype.updateArticle = function(id, json_obj) {
    var article = this._articleList.showArticles()[id];
    article.addSummary(json_obj.sentences);
    article.addText(json_obj.text);
  };

  NewsController.prototype.renderSummary = function(id) {
    this._articleListView.render('summary_' + id, this._articleList.showArticles()[id].viewSummary()[0] );
  };

  NewsController.prototype.renderText = function(id) {
    this._articleListView.render('text_' + id, this._articleList.showArticles()[id].viewText());
  };

  exports.NewsController = NewsController;
})(this);
