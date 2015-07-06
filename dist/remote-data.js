System.register(['aurelia-http-client', 'aurelia-framework'], function (_export) {
  'use strict';

  var HttpClient, inject, RemoteData;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      RemoteData = (function () {
        function RemoteData(httpClient) {
          _classCallCheck(this, _RemoteData);

          this.httpClient = httpClient;
        }

        var _RemoteData = RemoteData;

        _createClass(_RemoteData, [{
          key: 'getComments',
          value: function getComments(gridOptions) {

            var start = (gridOptions.paging.page - 1) * gridOptions.paging.size;
            var end = start + gridOptions.paging.size;

            return this.httpClient.createRequest('http://jsonplaceholder.typicode.com/comments').withParams({
              _start: start,
              _end: end
            }).asGet().send().then(function (response) {
              return {
                data: response.content,
                count: response.headers.headers['X-Total-Count']
              };
            });
          }
        }]);

        RemoteData = inject(HttpClient)(RemoteData) || RemoteData;
        return RemoteData;
      })();

      _export('RemoteData', RemoteData);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxVQUFVOzs7Ozs7OztzQ0FKZixVQUFVOztpQ0FDVixNQUFNOzs7QUFHRCxnQkFBVTtBQUVWLGlCQUZBLFVBQVUsQ0FFVCxVQUFVLEVBQUU7OztBQUN0QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7MEJBSlUsVUFBVTs7OztpQkFNVixxQkFBQyxXQUFXLEVBQUU7O0FBR3ZCLGdCQUFJLEtBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQSxHQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3BFLGdCQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7O0FBRTFDLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLDhDQUE4QyxDQUFDLENBQzdFLFVBQVUsQ0FBQztBQUNWLG9CQUFNLEVBQUUsS0FBSztBQUNiLGtCQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FDRCxLQUFLLEVBQUUsQ0FDUCxJQUFJLEVBQUUsQ0FDTixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDZCxxQkFBTztBQUNMLG9CQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU87QUFDdEIscUJBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7ZUFDakQsQ0FBQzthQUNMLENBQUMsQ0FBQztXQUNWOzs7QUF6QlUsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoicmVtb3RlLWRhdGEuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9