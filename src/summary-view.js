(function(exports) {

  function SummaryView(article) {
    this._article = article;
  }

  SummaryView.prototype.getHTML = function() {
    return '<div>' + this._article.viewSummary() + '</div>';    
  };


  exports.SummaryView = SummaryView;
})(this);
