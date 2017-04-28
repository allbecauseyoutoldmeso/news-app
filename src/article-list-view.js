(function (exports){
  function ArticleListView(articleList){
    this._articleList = articleList;
  }
  ArticleListView.prototype.viewHeadlines = function () {
    string = '';
    this._articleList.showHeadlines().forEach(function(headline){
    string = string + '<p><h1>' + headline + '</h1></p>';
  });
    return string;
  };

  ArticleListView.prototype.renderHeadlines = function() {
    var element = document.getElementById('headlines');
    element.innerHTML = this.viewHeadlines();
  };

  exports.ArticleListView = ArticleListView;
})(this);
