function testArticleListViewHeadlines() {

  article = new Article('Cat rescued from tree', 0);
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showArticles: function() {
      return [article];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  assert.toEqual(articleListView.viewHeadlines(), "<p><a href='#headline_0'>Cat rescued from tree</a></p><a href='#summary_0'><p id='summary_0'><p></a><p id='text_0'><p>");
}

function testRenderHeadlines() {
  article = new Article('Cat rescued from tree', 0);
  articleTwo = new Article('Grandma wins lottery', 1);
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showArticles: function() {
      return [article, articleTwo];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  articleListView.renderHeadlines();
  assert.toEqual(document.getElementById('headlines').innerHTML, '<p><a href="#headline_0">Cat rescued from tree</a></p><a href="#summary_0"><p id="summary_0"></p></a><p><a href="#summary_0"></a></p><p id="text_0"></p><p></p><p><a href="#headline_1">Grandma wins lottery</a></p><a href="#summary_1"><p id="summary_1"></p></a><p><a href="#summary_1"></a></p><p id="text_1"></p><p></p>');
}

testArticleListViewHeadlines();
testRenderHeadlines();
