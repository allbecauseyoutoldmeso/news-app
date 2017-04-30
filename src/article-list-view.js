(function (exports){

  function ArticleListView(articleList){
    this._articleList = articleList;
  }

  ArticleListView.prototype.viewHeadlines = function () {
    var string = '';

    this._articleList.showArticles().forEach(function(article){
    var id = article.getId();
    string = string + "<p class='headline'><a href='#headline_" + id + "'>" + article.headline() + "</a></p>"
                    + "<a href='#summary_" + id + "'><p class='summary' id='summary_" + id + "'><p></a>"
                    + "<p class='text' id='text_" + id + "'><p>";
  });
    return string;
  };

  ArticleListView.prototype.renderHeadlines = function() {
    this.render('headlines', this.viewHeadlines());
  };

  ArticleListView.prototype.render = function(elementId, html) {
    var element = document.getElementById(elementId);
    element.innerHTML = html;
  };

  exports.ArticleListView = ArticleListView;
})(this);
