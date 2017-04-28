function testArticleListViewHeadlines() {

  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showHeadlines: function() {
      return ['Cat rescued from tree', 'Grandma wins lottery'];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  assert.toEqual(articleListView.viewHeadlines(), '<p><h1>Cat rescued from tree</h1></p><p><h1>Grandma wins lottery</h1></p>');
}

function testRenderHeadlines() {
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showHeadlines: function() {
      return ['Cat rescued from tree', 'Grandma wins lottery'];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  articleListView.renderHeadlines();
  assert.toEqual(document.getElementById('headlines').innerHTML, '<p></p><h1>Cat rescued from tree</h1><p></p><p></p><h1>Grandma wins lottery</h1><p></p>');
}

testArticleListViewHeadlines();
testRenderHeadlines();
