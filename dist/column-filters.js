System.register(['aurelia-http-client', 'aurelia-framework'], function (_export) {
    'use strict';

    var HttpClient, inject, RowSelection;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            RowSelection = (function () {
                function RowSelection(httpClient) {
                    _classCallCheck(this, _RowSelection);

                    this.httpClient = httpClient;
                }

                var _RowSelection = RowSelection;

                _createClass(_RowSelection, [{
                    key: 'getLocalData',
                    value: function getLocalData(gridOptions) {
                        var data = [];
                        var names = ['charles', 'john', 'oliver', 'fred', 'apple', 'peach', 'banana', 'pear', 'kiwi', 'dog', 'cat', 'mouse', 'turtle', 'high', 'low', 'jacks', 'aces', 'kings', 'queens'];

                        for (var i = 0; i < 1000; i++) {

                            var n = names[Math.floor(Math.random() * names.length)];
                            data.push({
                                id: i,
                                name: n
                            });
                        };

                        return new Promise(function (resolve, reject) {
                            resolve({
                                data: data,
                                count: data.length
                            });
                        });
                    }
                }]);

                RowSelection = inject(HttpClient)(RowSelection) || RowSelection;
                return RowSelection;
            })();

            _export('RowSelection', RowSelection);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1maWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0QkFJYSxZQUFZOzs7Ozs7Ozs0Q0FKakIsVUFBVTs7dUNBQ1YsTUFBTTs7O0FBR0Qsd0JBQVk7QUFFVix5QkFGRixZQUFZLENBRVQsVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2lCQUNoQzs7b0NBSlEsWUFBWTs7OzsyQkFNVCxzQkFBQyxXQUFXLEVBQUU7QUFFdEIsNEJBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLDRCQUFJLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVsTCw2QkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFHOUIsZ0NBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNyRCxnQ0FBSSxDQUFDLElBQUksQ0FBQztBQUNOLGtDQUFFLEVBQUUsQ0FBQztBQUNMLG9DQUFJLEVBQUUsQ0FBQzs2QkFDVixDQUFDLENBQUM7eUJBQ04sQ0FBQzs7QUFFRiwrQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDcEMsbUNBQU8sQ0FBQztBQUNKLG9DQUFJLEVBQUUsSUFBSTtBQUNWLHFDQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07NkJBQ3JCLENBQUMsQ0FBQzt5QkFDTixDQUFDLENBQUM7cUJBRU47OztBQTVCUSw0QkFBWSxHQUR4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sWUFBWSxLQUFaLFlBQVk7dUJBQVosWUFBWTs7O29DQUFaLFlBQVkiLCJmaWxlIjoiY29sdW1uLWZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9