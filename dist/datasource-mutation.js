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

                _createClass(LocalData, [{
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

                var _LocalData = LocalData;
                LocalData = inject(HttpClient)(LocalData) || LocalData;
                return LocalData;
            })();

            _export('LocalData', LocalData);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UtbXV0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRCQUlhLFNBQVM7Ozs7Ozs7OzRDQUpkLFVBQVU7O3VDQUNWLE1BQU07OztBQUdELHFCQUFTO0FBS1AseUJBTEYsU0FBUyxDQUtOLFVBQVUsRUFBRTs7O3lCQUh4QixJQUFJLEdBQUcsRUFBRTt5QkFDVCxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7O0FBRzFGLHdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7OzZCQVBRLFNBQVM7OzJCQVNOLHNCQUFDLFdBQVcsRUFBRTs7O0FBRXRCLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNCLGdDQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNSLGtDQUFFLEVBQUUsQ0FBQztBQUNMLG9DQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NkJBQ3RCLENBQUMsQ0FBQzt5QkFDTixDQUFDOztBQUVGLCtCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQyxtQ0FBTyxDQUFDO0FBQ0osb0NBQUksRUFBRSxNQUFLLElBQUk7QUFDZixxQ0FBSyxFQUFFLE1BQUssSUFBSSxDQUFDLE1BQU07NkJBQzFCLENBQUMsQ0FBQzt5QkFDTixDQUFDLENBQUM7cUJBRU47OzsyQkFFUSxxQkFBRztBQUNSLDRCQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDeEI7QUFDSSxnQ0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRXpCLGdDQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNYLGtDQUFFLEVBQUUsQ0FBQztBQUNMLG9DQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NkJBQ3RCLENBQUMsQ0FBQzt5QkFDTjtxQkFDSjs7OzJCQUVXLHdCQUFHO0FBQ1gsNEJBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQ3BCLGdDQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUNuQjtxQkFDSjs7O2lDQTNDUSxTQUFTO0FBQVQseUJBQVMsR0FEckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVM7OztpQ0FBVCxTQUFTIiwiZmlsZSI6ImRhdGFzb3VyY2UtbXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9