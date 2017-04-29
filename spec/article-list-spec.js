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

testStoreArticle();
testShowArticle();
