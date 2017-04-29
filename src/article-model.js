(function(exports) {
  function Article(headline, id) {
    this._headline = headline;
    this._id = id;
  }

  Article.prototype.headline = function () {
    return this._headline;
  };

  Article.prototype.getId = function() {
    return this._id;
  };

  Article.prototype.addText = function(text) {
    this._text = text;
  };

  Article.prototype.viewText = function() {
    return this._text;
  };

  Article.prototype.addSummary = function(summary) {
    this._summary = summary;
  };

  Article.prototype.viewSummary = function() {
    return this._summary;
  };

  Article.prototype.addUrl = function(url) {
    this._url = url;
  };

  Article.prototype.url = function() {
    return this._url;
  };

exports.Article = Article;
})(this);
