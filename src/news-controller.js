(function(exports) {

  function NewsController(jsonObj) {
    // this._url = url;
    this._jsonObj = jsonObj;
    this._articleList = new ArticleList();
  }

  // NewsController.prototype.requestAPI = function() {
  //   var request = new XMLHttpRequest();
  //   request.open("GET", this._url, false);
  //   request.send();
  //   return request.responseText;
  // };

  // NewsController.prototype.requestAndParseAPI = function() {
  //   var jsonObj = JSON.parse(this.requestAPI());
  //   this._results = jsonObj.response.results;
  // };

  NewsController.prototype.createArticles = function() {
    results = this._jsonObj.response.results;
    for(x=0; x<10; x++) {
      var thisArticle = new Article(results[x].webTitle);
      thisArticle.addUrl(results[x].webUrl);
      this._articleList.storeArticle(thisArticle);
    }
  };

  NewsController.prototype.renderHeadlines = function() {
    var articleListView = new ArticleListView(this._articleList);
    articleListView.renderHeadlines();
  };

  exports.NewsController = NewsController;
})(this);
