(function (exports){
  function ArticleListView(articleList){
    this._articleList = articleList;
  }
  ArticleListView.prototype.viewHeadlines = function () {
    string = '';
    this._articleList.showArticles().forEach(function(article){
    string = string + "<p><a href='#headline_" + article.getId() + "'>" + article.headline() + "</a></p><p id='summary_" + article.getId() + "'><p>";
  });
    return string;
  };

  ArticleListView.prototype.renderHeadlines = function() {
    var element = document.getElementById('headlines');
    element.innerHTML = this.viewHeadlines();
  };

  ArticleListView.prototype.renderSummary = function(id) {
    var summaryDiv = document.getElementById('summary_' + id);
    summaryDiv.innerHTML = this._articleList.showArticles()[id].viewSummary()[0];
  };

  exports.ArticleListView = ArticleListView;
})(this);
