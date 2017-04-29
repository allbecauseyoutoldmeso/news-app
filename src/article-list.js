(function (exports){
  function ArticleList(){
    this._articles = [];
  }

  ArticleList.prototype.storeArticle = function(article) {
    this._articles.push(article);
  };

  ArticleList.prototype.showArticles = function() {
    return this._articles;
  };

  ArticleList.prototype.showHeadlines = function() {
    var headlines = [];
    this._articles.forEach(function(article){
      headlines.push(article.headline());
    });
    return headlines;
  };

  exports.ArticleList = ArticleList;
})(this);
