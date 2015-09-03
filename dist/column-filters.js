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

                _createClass(RowSelection, [{
                    key: 'getLocalData',
                    value: function getLocalData(gridOptions) {
                        var data = [];
                        var names = ["charles", "john", "oliver", "fred", "apple", "peach", "banana", "pear", "kiwi", "dog", "cat", "mouse", "turtle", "high", "low", "jacks", "aces", "kings", "queens"];

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

                var _RowSelection = RowSelection;
                RowSelection = inject(HttpClient)(RowSelection) || RowSelection;
                return RowSelection;
            })();

            _export('RowSelection', RowSelection);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi1maWx0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0QkFJYSxZQUFZOzs7Ozs7Ozs0Q0FKakIsVUFBVTs7dUNBQ1YsTUFBTTs7O0FBR0Qsd0JBQVk7QUFFVix5QkFGRixZQUFZLENBRVQsVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2lCQUNoQzs7NkJBSlEsWUFBWTs7MkJBTVQsc0JBQUMsV0FBVyxFQUFFO0FBRXRCLDRCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCw0QkFBSSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFbEwsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRzlCLGdDQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0NBQUksQ0FBQyxJQUFJLENBQUM7QUFDTixrQ0FBRSxFQUFFLENBQUM7QUFDTCxvQ0FBSSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUFDO3lCQUNOLENBQUM7O0FBRUYsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLG1DQUFPLENBQUM7QUFDSixvQ0FBSSxFQUFFLElBQUk7QUFDVixxQ0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNOzZCQUNyQixDQUFDLENBQUM7eUJBQ04sQ0FBQyxDQUFDO3FCQUVOOzs7b0NBNUJRLFlBQVk7QUFBWiw0QkFBWSxHQUR4QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sWUFBWSxLQUFaLFlBQVk7dUJBQVosWUFBWSIsImZpbGUiOiJjb2x1bW4tZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=