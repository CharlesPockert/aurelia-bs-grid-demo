System.register(['aurelia-http-client', 'aurelia-framework'], function (_export) {
    'use strict';

    var HttpClient, inject, ColumnTemplates;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            ColumnTemplates = (function () {
                function ColumnTemplates(httpClient) {
                    _classCallCheck(this, _ColumnTemplates);

                    this.httpClient = httpClient;
                }

                var _ColumnTemplates = ColumnTemplates;

                _createClass(_ColumnTemplates, [{
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
                }, {
                    key: 'itemClicked',
                    value: function itemClicked(item) {
                        alert('You clicked on ' + item.name);
                    }
                }]);

                ColumnTemplates = inject(HttpClient)(ColumnTemplates) || ColumnTemplates;
                return ColumnTemplates;
            })();

            _export('ColumnTemplates', ColumnTemplates);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi10ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLGVBQWU7Ozs7Ozs7OzRDQUpwQixVQUFVOzt1Q0FDVixNQUFNOzs7QUFHRCwyQkFBZTtBQUViLHlCQUZGLGVBQWUsQ0FFWixVQUFVLEVBQUU7OztBQUNwQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7aUJBQ2hDOzt1Q0FKUSxlQUFlOzs7OzJCQU1aLHNCQUFDLFdBQVcsRUFBRTtBQUV0Qiw0QkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsNEJBQUksS0FBSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWxMLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUc5QixnQ0FBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdDQUFJLENBQUMsSUFBSSxDQUFDO0FBQ04sa0NBQUUsRUFBRSxDQUFDO0FBQ0wsb0NBQUksRUFBRSxDQUFDOzZCQUNWLENBQUMsQ0FBQzt5QkFDTixDQUFDOztBQUVGLCtCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxtQ0FBTyxDQUFDO0FBQ0osb0NBQUksRUFBRSxJQUFJO0FBQ1YscUNBQUssRUFBRSxJQUFJLENBQUMsTUFBTTs2QkFDckIsQ0FBQyxDQUFDO3lCQUNOLENBQUMsQ0FBQztxQkFFTjs7OzJCQUVVLHFCQUFDLElBQUksRUFBRTtBQUNqQiw2QkFBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckM7OztBQWhDUSwrQkFBZSxHQUQzQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sZUFBZSxLQUFmLGVBQWU7dUJBQWYsZUFBZTs7O3VDQUFmLGVBQWUiLCJmaWxlIjoiY29sdW1uLXRlbXBsYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=