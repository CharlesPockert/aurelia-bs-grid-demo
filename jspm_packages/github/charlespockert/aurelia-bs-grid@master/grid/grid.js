/* */ 
System.register(['aurelia-framework', './grid-column', 'gooy/aurelia-compiler'], function (_export) {
	'use strict';

	var bindable, inject, skipContentProcessing, GridColumn, Compiler, Grid;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
			skipContentProcessing = _aureliaFramework.skipContentProcessing;
		}, function (_gridColumn) {
			GridColumn = _gridColumn.GridColumn;
		}, function (_gooyAureliaCompiler) {
			Compiler = _gooyAureliaCompiler.Compiler;
		}],
		execute: function () {
			Grid = (function () {
				var _instanceInitializers = {};

				function Grid(element, compiler) {
					_classCallCheck(this, _Grid);

					_defineDecoratedPropertyDescriptor(this, 'serverPaging', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

					this.pageNumber = 1;

					_defineDecoratedPropertyDescriptor(this, 'serverSorting', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

					this.sorting = {};
					this.Trogdor = true;

					_defineDecoratedPropertyDescriptor(this, 'autoGenerateColumns', _instanceInitializers);

					this.columnHeaders = [];
					this.columns = [];

					_defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'noRowsMessage', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'autoLoad', _instanceInitializers);

					this.loading = false;

					_defineDecoratedPropertyDescriptor(this, 'loadingMessage', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'read', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'onReadError', _instanceInitializers);

					this.cache = [];
					this.data = [];
					this.count = 0;

					this.element = element;
					this.compiler = compiler;

					this.processUserTemplate();
				}

				var _Grid = Grid;

				_createDecoratedClass(_Grid, [{
					key: 'processUserTemplate',
					value: function processUserTemplate() {
						var _this = this;

						var rowElement = this.element.querySelector('grid-row');
						var columnElements = Array.prototype.slice.call(rowElement.querySelectorAll('grid-col'));

						columnElements.forEach(function (c) {

							var attrs = Array.prototype.slice.call(c.attributes),
							    colHash = {};
							attrs.forEach(function (a) {
								return colHash[a.name] = a.value;
							});

							var col = new GridColumn(colHash, c.innerHTML);

							_this.addColumn(col);
						});

						this.rowAttrs = {};
						var attrs = Array.prototype.slice.call(rowElement.attributes);
						attrs.forEach(function (a) {
							return _this.rowAttrs[a.name] = a.value;
						});

						while (this.element.childNodes.length > 0) this.element.removeChild(this.element.childNodes[0]);
					}
				}, {
					key: 'attached',
					value: function attached() {
						if (this.autoLoad) this.refresh();
					}
				}, {
					key: 'bind',
					value: function bind(executionContext) {

						this['$parent'] = executionContext;

						if (this.serverPaging && !this.serverSorting) this.sortable = false;

						var table = this.element.querySelector('table>tbody');
						var rowTemplate = Array.prototype.slice.call(table.querySelectorAll('tr'))[1];

						var fragment = document.createDocumentFragment();

						fragment.appendChild(rowTemplate);

						rowTemplate.setAttribute('repeat.for', '$item of data');
						rowTemplate.setAttribute('class', '${ $item === $parent.selectedItem ? \'info\' : \'\' }');

						for (var prop in this.rowAttrs) {
							if (this.rowAttrs.hasOwnProperty(prop)) {
								rowTemplate.setAttribute(prop, this.rowTemplate[prop]);
							}
						}

						this.columns.forEach(function (c) {
							var td = document.createElement('td');

							for (var prop in c) {
								if (c.hasOwnProperty(prop)) {

									if (prop == 'template') td.innerHTML = c[prop];else td.setAttribute(prop, c[prop]);
								}
							}

							rowTemplate.appendChild(td);
						});

						this.compiler.compile(table, this, undefined, fragment);
					}
				}, {
					key: 'addColumn',
					value: function addColumn(col) {
						if (!this.sortable) col.nosort = true;

						this.columns.push(col);
					}
				}, {
					key: 'pageChanged',
					value: function pageChanged(page) {

						this.pageNumber = Number(page);

						if (this.cache.length == 0) this.refresh();else this.applyPage();
					}
				}, {
					key: 'pageSizeChanged',
					value: function pageSizeChanged() {
						this.pageChanged(1);
						this.updatePager();
					}
				}, {
					key: 'applyPage',
					value: function applyPage() {
						if (!this.pageable) return;

						if (!this.serverPaging) {
							var start = (Number(this.pageNumber) - 1) * Number(this.pageSize);
							this.data = this.cache.slice(start, start + Number(this.pageSize));
						}

						this.updatePager();
					}
				}, {
					key: 'sortByProperty',
					value: function sortByProperty(prop, dir) {
						return function (a, b) {
							if (typeof a[prop] == 'number') {
								return (a[prop] - b[prop]) * dir;
							} else {
								return (a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0) * dir;
							}
						};
					}
				}, {
					key: 'sortChanged',
					value: function sortChanged(field) {
						var newSort = undefined;

						switch (this.sorting[field]) {
							case 'asc':
								newSort = 'desc';
								break;
							case 'desc':
								if (!this.serverSorting) newSort = 'asc';
								break;
							default:
								newSort = 'asc';
								break;
						}

						this.sorting[field] = newSort;
						this.applySort(field);
					}
				}, {
					key: 'applySort',
					value: function applySort(field) {

						var newSort = this.sorting[field];
						var dir = newSort == 'asc' ? 1 : -1;

						if (this.serverSorting) {
							this.refresh();
						} else {
							this.cache.sort(this.sortByProperty(field, dir));
							this.applyPage();
						}
					}
				}, {
					key: 'refresh',
					value: function refresh() {
						var _this2 = this;

						if (!this.read) throw new Error('No read method specified for grid');

						this.loading = true;

						this.read({
							sorting: this.sorting,
							paging: { page: this.pageNumber, size: Number(this.pageSize) }
						}).then(function (result) {
							_this2.handleResult(result);

							_this2.loading = false;
						}, function (result) {
							if (_this2.onReadError) _this2.onReadError(result);

							_this2.loading = false;
						});
					}
				}, {
					key: 'handleResult',
					value: function handleResult(result) {
						var data = result.data;

						if (this.pageable && !this.serverPaging && !this.serverSorting) {
							this.cache = result.data;
							this.applyPage();
						} else {
							this.data = result.data;
						}

						this.count = result.count;

						this.updatePager();
					}
				}, {
					key: 'updatePager',
					value: function updatePager() {
						this.pager.update(this.pageNumber, Number(this.pageSize), Number(this.count));
					}
				}, {
					key: 'select',
					value: function select(item) {
						if (this.selectable) this.selectedItem = item;
					}
				}, {
					key: 'noRowsMessageChanged',
					value: function noRowsMessageChanged() {
						this.showNoRowsMessage = this.noRowsMessage !== '';
					}
				}, {
					key: 'serverPaging',
					decorators: [bindable],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'pageable',
					decorators: [bindable],
					initializer: function initializer() {
						return true;
					},
					enumerable: true
				}, {
					key: 'pageSize',
					decorators: [bindable],
					initializer: function initializer() {
						return 10;
					},
					enumerable: true
				}, {
					key: 'page',
					decorators: [bindable],
					initializer: function initializer() {
						return 1;
					},
					enumerable: true
				}, {
					key: 'serverSorting',
					decorators: [bindable],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'sortable',
					decorators: [bindable],
					initializer: function initializer() {
						return true;
					},
					enumerable: true
				}, {
					key: 'autoGenerateColumns',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'selectable',
					decorators: [bindable],
					initializer: function initializer() {
						return false;
					},
					enumerable: true
				}, {
					key: 'selectedItem',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'noRowsMessage',
					decorators: [bindable],
					initializer: function initializer() {
						return '';
					},
					enumerable: true
				}, {
					key: 'autoLoad',
					decorators: [bindable],
					initializer: function initializer() {
						return true;
					},
					enumerable: true
				}, {
					key: 'loadingMessage',
					decorators: [bindable],
					initializer: function initializer() {
						return 'Loading...';
					},
					enumerable: true
				}, {
					key: 'read',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}, {
					key: 'onReadError',
					decorators: [bindable],
					initializer: function initializer() {
						return null;
					},
					enumerable: true
				}], null, _instanceInitializers);

				Grid = inject(Element, Compiler)(Grid) || Grid;
				Grid = skipContentProcessing()(Grid) || Grid;
				return Grid;
			})();

			_export('Grid', Grid);
		}
	};
});