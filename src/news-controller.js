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

  NewsController.prototype.getArticleById = function(id) {
    return this._articleList.showArticles()[id];
  };

  NewsController.prototype.updateArticle = function(id, json_obj) {
    var article = this._articleList.showArticles()[id];
    article.addSummary(json_obj.sentences);
    article.addText(json_obj.text);
  };

  NewsController.prototype.renderSummary = function(id) {
    var article = this._articleList.showArticles()[id];
    var summaryDiv = document.getElementById('summary_' + id);
    summaryDiv.innerHTML = article.viewSummary()[0];
  };

  exports.NewsController = NewsController;
})(this);
