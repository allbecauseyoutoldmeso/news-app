function testArticleHeadline() {
  var article = new Article('Cat rescued from tree');
  assert.toEqual(article.headline(), 'Cat rescued from tree');
}

function testArticleText() {
  var article = new Article('Cat rescued from tree');
  article.addText('Courageous 17 year old climbs up the tree to rescue a fluffy tabby orphaned cat.');
  assert.toEqual(article.viewText(), 'Courageous 17 year old climbs up the tree to rescue a fluffy tabby orphaned cat.');
}

testArticleText();
testArticleHeadline();
