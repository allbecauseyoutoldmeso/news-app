function testArticleListViewHeadlines() {

  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showHeadlines: function() {
      return ['Cat rescued from tree', 'Grandma wins lottery'];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  assert.toEqual(articleListView.viewHeadlines(), '<p>Cat rescued from tree</p><p>Grandma wins lottery</p>');
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
  assert.toEqual(document.getElementById('headlines').innerHTML, '<p>Cat rescued from tree</p><p>Grandma wins lottery</p>');
}

testArticleListViewHeadlines();
testRenderHeadlines();
