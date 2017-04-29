(function (exports){
  function ArticleListView(articleList){
    this._articleList = articleList;
  }
  ArticleListView.prototype.viewHeadlines = function () {
    string = '';
    this._articleList.showArticles().forEach(function(article){
    string = string + "<p><a href='headline_" + article.getId() + "'>" + article.headline() + "</a></p><p id='summary_" + article.getId() + "'><p>";
  });
    return string;
  };

  ArticleListView.prototype.renderHeadlines = function() {
    var element = document.getElementById('headlines');
    element.innerHTML = this.viewHeadlines();
  };

  exports.ArticleListView = ArticleListView;
})(this);
