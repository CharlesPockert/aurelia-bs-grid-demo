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
            return this.httpClient.createRequest('http://jsonplaceholder.typicode.com/comments').asGet().send().then(function (response) {
              return {
                data: response.content,
                count: response.content.length * 5
              };
            });
          }
        }, {
          key: 'test',
          value: function test() {
            alert('argh!');
          }
        }]);

        RemoteData = inject(HttpClient)(RemoteData) || RemoteData;
        return RemoteData;
      })();

      _export('RemoteData', RemoteData);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxVQUFVOzs7Ozs7OztzQ0FKZixVQUFVOztpQ0FDVixNQUFNOzs7QUFHRCxnQkFBVTtBQUVWLGlCQUZBLFVBQVUsQ0FFVCxVQUFVLEVBQUU7OztBQUN0QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7MEJBSlUsVUFBVTs7OztpQkFNVixxQkFBQyxXQUFXLEVBQUU7QUFLdkIsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsOENBQThDLENBQUMsQ0FDN0UsS0FBSyxFQUFFLENBQ1AsSUFBSSxFQUFFLENBQ04sSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2QscUJBQU87QUFDTCxvQkFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPO0FBQ3RCLHFCQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztlQUNuQyxDQUFDO2FBQ0wsQ0FBQyxDQUFDO1dBQ1Y7OztpQkFFRyxnQkFBRztBQUNMLGlCQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDaEI7OztBQXhCVSxrQkFBVSxHQUR0QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJyZW1vdGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=