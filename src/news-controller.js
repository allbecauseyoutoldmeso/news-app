(function(exports) {

  function NewsController(url) {
    this._url = url;
  }

  NewsController.prototype.requestAPI = function() {
    var request = new XMLHttpRequest();
    request.open("GET", this._url, false);
    request.send();
    return request.responseText;
  };

  NewsController.prototype.requestAndParseAPI = function() {
    json_obj = JSON.parse(this.requestAPI());
    return json_obj;
  };

  exports.NewsController = NewsController;
})(this);

//json_obj.response.results[0].webTitle   !!

//function JsonObjDouble() {};
//JsonObjDouble.prototype = {
//  response.results[0].webTitle : "Cat rescued from tree";
//}
//
