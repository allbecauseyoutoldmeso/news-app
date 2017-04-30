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
  assert.toEqual(articleListView.viewHeadlines(), "<p class='headline'><a href='#headline_0'>Cat rescued from tree</a></p><a href='#summary_0'><p class='summary' id='summary_0'><p></a><p class='text' id='text_0'><p>");
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
  assert.toEqual(document.getElementById('headlines').innerHTML, '<p class="headline"><a href="#headline_0">Cat rescued from tree</a></p><a href="#summary_0"><p class="summary" id="summary_0"></p></a><p><a href="#summary_0"></a></p><p class="text" id="text_0"></p><p></p><p class="headline"><a href="#headline_1">Grandma wins lottery</a></p><a href="#summary_1"><p class="summary" id="summary_1"></p></a><p><a href="#summary_1"></a></p><p class="text" id="text_1"></p><p></p>');
}

// testArticleListViewHeadlines();
// testRenderHeadlines();
