System.register(['aurelia-http-client', 'aurelia-framework'], function (_export) {
    'use strict';

    var HttpClient, inject, LocalData;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            LocalData = (function () {
                function LocalData(httpClient) {
                    _classCallCheck(this, _LocalData);

                    this.httpClient = httpClient;
                }

                _createClass(LocalData, [{
                    key: 'getLocalData',
                    value: function getLocalData(gridOptions) {
                        var data = [];
                        var names = ["charles", "john", "oliver", "fred", "dean", "chris", "pete", "steve", "lee", "rob", "alex", "rose", "mike", "dan", "james", "rebecca", "heather", "kate", "liam"];

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

                var _LocalData = LocalData;
                LocalData = inject(HttpClient)(LocalData) || LocalData;
                return LocalData;
            })();

            _export('LocalData', LocalData);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFNBQVM7Ozs7Ozs7OzRDQUpkLFVBQVU7O3VDQUNWLE1BQU07OztBQUdELHFCQUFTO0FBRVAseUJBRkYsU0FBUyxDQUVOLFVBQVUsRUFBRTs7O0FBQ3BCLHdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7OzZCQUpRLFNBQVM7OzJCQU1OLHNCQUFDLFdBQVcsRUFBRTtBQUV0Qiw0QkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsNEJBQUksS0FBSyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWhMLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUc5QixnQ0FBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdDQUFJLENBQUMsSUFBSSxDQUFDO0FBQ04sa0NBQUUsRUFBRSxDQUFDO0FBQ0wsb0NBQUksRUFBRSxDQUFDOzZCQUNWLENBQUMsQ0FBQzt5QkFDTixDQUFDOztBQUVGLCtCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxtQ0FBTyxDQUFDO0FBQ0osb0NBQUksRUFBRSxJQUFJO0FBQ1YscUNBQUssRUFBRSxJQUFJLENBQUMsTUFBTTs2QkFDckIsQ0FBQyxDQUFDO3lCQUNOLENBQUMsQ0FBQztxQkFFTjs7O2lDQTVCUSxTQUFTO0FBQVQseUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVMiLCJmaWxlIjoibG9jYWwtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=