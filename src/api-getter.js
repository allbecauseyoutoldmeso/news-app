(function(exports) {

  function ApiGetter(url) {
    this._url = url;
  }

  ApiGetter.prototype.requestAPI = function() {
    var request = new XMLHttpRequest();
    request.open("GET", this._url, false);
    request.send();
    return request.responseText;
  };

  ApiGetter.prototype.requestAndParseAPI = function() {
    var jsonObj = JSON.parse(this.requestAPI());
    return jsonObj;
  };

  exports.ApiGetter = ApiGetter;
})(this);
