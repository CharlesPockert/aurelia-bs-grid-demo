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

                var _RowSelection = RowSelection;
                RowSelection = inject(HttpClient)(RowSelection) || RowSelection;
                return RowSelection;
            })();

            _export('RowSelection', RowSelection);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdy1zZWxlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFlBQVk7Ozs7Ozs7OzRDQUpqQixVQUFVOzt1Q0FDVixNQUFNOzs7QUFHRCx3QkFBWTtBQUVWLHlCQUZGLFlBQVksQ0FFVCxVQUFVLEVBQUU7OztBQUNwQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7aUJBQ2hDOzs2QkFKUSxZQUFZOzsyQkFNVCxzQkFBQyxXQUFXLEVBQUU7QUFHdEIsNEJBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLDRCQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVDQUF1QyxDQUFDLENBQUM7O0FBRTlNLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUc5QixnQ0FBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdDQUFJLENBQUMsSUFBSSxDQUFDO0FBQ04sa0NBQUUsRUFBRSxDQUFDO0FBQ0wsb0NBQUksRUFBRSxDQUFDOzZCQUNWLENBQUMsQ0FBQzt5QkFDTixDQUFDOztBQUVGLCtCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxtQ0FBTyxDQUFDO0FBQ0osb0NBQUksRUFBRSxJQUFJO0FBQ1YscUNBQUssRUFBRSxJQUFJLENBQUMsTUFBTTs2QkFDckIsQ0FBQyxDQUFDO3lCQUNOLENBQUMsQ0FBQztxQkFFTjs7O29DQTdCUSxZQUFZO0FBQVosNEJBQVksR0FEeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFlBQVksS0FBWixZQUFZO3VCQUFaLFlBQVk7OztvQ0FBWixZQUFZIiwiZmlsZSI6InJvdy1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9