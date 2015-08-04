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
                        var names = ['charles', 'john', 'oliver', 'fred', 'dean', 'chris', 'pete', 'steve', 'lee', 'rob', 'alex', 'rose', 'mike', 'dan', 'james', 'rebecca', 'heather', 'kate', 'liam'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsU0FBUzs7Ozs7Ozs7NENBSmQsVUFBVTs7dUNBQ1YsTUFBTTs7O0FBR0QscUJBQVM7QUFFUCx5QkFGRixTQUFTLENBRU4sVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2lCQUNoQzs7NkJBSlEsU0FBUzs7MkJBTU4sc0JBQUMsV0FBVyxFQUFFO0FBRXRCLDRCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCw0QkFBSSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFaEwsNkJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O0FBRzlCLGdDQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0NBQUksQ0FBQyxJQUFJLENBQUM7QUFDTixrQ0FBRSxFQUFFLENBQUM7QUFDTCxvQ0FBSSxFQUFFLENBQUM7NkJBQ1YsQ0FBQyxDQUFDO3lCQUNOLENBQUM7O0FBRUYsK0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLG1DQUFPLENBQUM7QUFDSixvQ0FBSSxFQUFFLElBQUk7QUFDVixxQ0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNOzZCQUNyQixDQUFDLENBQUM7eUJBQ04sQ0FBQyxDQUFDO3FCQUVOOzs7aUNBNUJRLFNBQVM7QUFBVCx5QkFBUyxHQURyQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sU0FBUyxLQUFULFNBQVM7dUJBQVQsU0FBUzs7O2lDQUFULFNBQVMiLCJmaWxlIjoiY29tcG9zZS1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==