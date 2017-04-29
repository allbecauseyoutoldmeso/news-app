function testStoreArticle() {
  var articleList = new ArticleList();

  function ArticleDouble(){}
    var article = new ArticleDouble();

  articleList.storeArticle(article);
  truthy.isTrue(articleList._articles.length === 1);
}

function testShowArticle() {
  var articleList = new ArticleList();
  function ArticleDouble(){}
  var article = new ArticleDouble();
  articleList.storeArticle(article);
  check.toInclude(articleList.showArticles(), article);
}


function testShowHeadlines() {
  var articleList = new ArticleList();
  function ArticleDouble(){}
  ArticleDouble.prototype = {
    headline: function() {
      return 'Cat rescued from tree';
    }
  };
  var article = new ArticleDouble();

  articleList.storeArticle(article);
  check.toInclude(articleList.showHeadlines(), 'Cat rescued from tree');

}

testShowHeadlines();
testStoreArticle();
testShowArticle();
