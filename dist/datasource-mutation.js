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

                    this.data = [];
                    this.names = ['charles', 'john', 'oliver', 'fred', 'dirk', 'mike', 'ewan', 'gary', 'james', 'pete'];

                    this.httpClient = httpClient;
                }

                var _LocalData = LocalData;

                _createClass(_LocalData, [{
                    key: 'getLocalData',
                    value: function getLocalData(gridOptions) {
                        var _this = this;

                        for (var i = 0; i < 3; i++) {
                            this.data.push({
                                id: i,
                                name: this.names[i]
                            });
                        };

                        return new Promise(function (resolve, reject) {
                            resolve({
                                data: _this.data,
                                count: _this.data.length
                            });
                        });
                    }
                }, {
                    key: 'addPerson',
                    value: function addPerson() {
                        if (this.data.length < 10) {
                            var i = this.data.length;

                            this.data.push({
                                id: i,
                                name: this.names[i]
                            });
                        }
                    }
                }, {
                    key: 'removePerson',
                    value: function removePerson() {
                        if (this.data.length > 0) {
                            this.data.pop();
                        }
                    }
                }]);

                LocalData = inject(HttpClient)(LocalData) || LocalData;
                return LocalData;
            })();

            _export('LocalData', LocalData);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UtbXV0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFNBQVM7Ozs7Ozs7OzRDQUpkLFVBQVU7O3VDQUNWLE1BQU07OztBQUdELHFCQUFTO0FBS1AseUJBTEYsU0FBUyxDQUtOLFVBQVUsRUFBRTs7O3lCQUh4QixJQUFJLEdBQUcsRUFBRTt5QkFDVCxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7O0FBRzFGLHdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7O2lDQVBRLFNBQVM7Ozs7MkJBU04sc0JBQUMsV0FBVyxFQUFFOzs7QUFFdEIsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsZ0NBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ1Isa0NBQUUsRUFBRSxDQUFDO0FBQ0wsb0NBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFDdEIsQ0FBQyxDQUFDO3lCQUNOLENBQUM7O0FBRUYsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLG1DQUFPLENBQUM7QUFDSixvQ0FBSSxFQUFFLE1BQUssSUFBSTtBQUNmLHFDQUFLLEVBQUUsTUFBSyxJQUFJLENBQUMsTUFBTTs2QkFDMUIsQ0FBQyxDQUFDO3lCQUNOLENBQUMsQ0FBQztxQkFFTjs7OzJCQUVRLHFCQUFHO0FBQ1IsNEJBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUN4QjtBQUNJLGdDQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7QUFFekIsZ0NBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ1gsa0NBQUUsRUFBRSxDQUFDO0FBQ0wsb0NBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs2QkFDdEIsQ0FBQyxDQUFDO3lCQUNOO3FCQUNKOzs7MkJBRVcsd0JBQUc7QUFDWCw0QkFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7QUFDcEIsZ0NBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7eUJBQ25CO3FCQUNKOzs7QUEzQ1EseUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVM7OztpQ0FBVCxTQUFTIiwiZmlsZSI6ImRhdGFzb3VyY2UtbXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9