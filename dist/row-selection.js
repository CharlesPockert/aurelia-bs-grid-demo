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
                        var names = ['apple', 'peach', 'pear', 'banana', 'kiwi', 'apple', 'orange', 'melon', 'lemon', 'persimmon', 'physalis', 'strawberry', 'cherry', 'lime', 'watermelon', 'cantaloupe (the lowest of the melons)'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdy1zZWxlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFlBQVk7Ozs7Ozs7OzRDQUpqQixVQUFVOzt1Q0FDVixNQUFNOzs7QUFHRCx3QkFBWTtBQUVWLHlCQUZGLFlBQVksQ0FFVCxVQUFVLEVBQUU7OztBQUNwQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7aUJBQ2hDOztvQ0FKUSxZQUFZOzs7OzJCQU1ULHNCQUFDLFdBQVcsRUFBRTtBQUd0Qiw0QkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsNEJBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUNBQXVDLENBQUMsQ0FBQzs7QUFFOU0sNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRzlCLGdDQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0NBQUksQ0FBQyxJQUFJLENBQUM7QUFDTixrQ0FBRSxFQUFFLENBQUM7QUFDTCxvQ0FBSSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUFDO3lCQUNOLENBQUM7O0FBRUYsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLG1DQUFPLENBQUM7QUFDSixvQ0FBSSxFQUFFLElBQUk7QUFDVixxQ0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNOzZCQUNyQixDQUFDLENBQUM7eUJBQ04sQ0FBQyxDQUFDO3FCQUVOOzs7QUE3QlEsNEJBQVksR0FEeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFlBQVksS0FBWixZQUFZO3VCQUFaLFlBQVk7OztvQ0FBWixZQUFZIiwiZmlsZSI6InJvdy1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9