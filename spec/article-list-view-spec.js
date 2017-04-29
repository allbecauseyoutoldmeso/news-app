function testArticleListViewHeadlines() {

  function ArticleDouble(){}
  ArticleDouble.prototype = {
    headline: function() {
      return 'Cat rescued from tree';
    }
  };
  var article = new ArticleDouble();
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showArticles: function() {
      return [article];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  assert.toEqual(articleListView.viewHeadlines(), '<p>Cat rescued from tree</p>');
}

function testRenderHeadlines() {
  function ArticleDouble(){}
  ArticleDouble.prototype = {
    headline: function() {
      return 'Cat rescued from tree';
    }
  };
  var article = new ArticleDouble();
  function ArticleDoubleTwo(){}
  ArticleDoubleTwo.prototype = {
    headline: function() {
      return 'Grandma wins lottery';
    }
  };
  var articleTwo = new ArticleDoubleTwo();
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showArticles: function() {
      return [article, articleTwo];
    }
  };
  var articleList = new ArticleListDouble();
  articleListView = new ArticleListView(articleList);
  articleListView.renderHeadlines();
  assert.toEqual(document.getElementById('headlines').innerHTML, '<p>Cat rescued from tree</p><p>Grandma wins lottery</p>');
}

testArticleListViewHeadlines();
testRenderHeadlines();
