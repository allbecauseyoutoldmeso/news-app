(function (exports){

  function ArticleListView(articleList){
    this._articleList = articleList;
  }

  ArticleListView.prototype.viewHeadlines = function () {
    var string = '';
    var id = article.getId()
    this._articleList.showArticles().forEach(function(article){
    string = string + "<p class='headline'><a href='#headline_" + id + "'>" + article.headline() + "</a></p>"
                    + "<a href='#summary_" + id + "'><p class='summary' id='summary_" + id + "'><p></a>"
                    + "<p class='text' id='text_" + id + "'><p>";
  });
    return string;
  };

  ArticleListView.prototype.renderHeadlines = function() {
    this.render('headlines', this.viewHeadlines());
  };

  ArticleListView.prototype.renderSummary = function(id) {
    this.render('summary_' + id, this._articleList.showArticles()[id].viewSummary()[0] );
  };

  ArticleListView.prototype.renderText = function(id) {
    this.render('text_' + id, this._articleList.showArticles()[id].viewText());
  };

  ArticleListView.prototype.render = function(elementId, html) {
    var element = document.getElementById(elementId);
    element.innerHTML = html;
  };

  exports.ArticleListView = ArticleListView;
})(this);
