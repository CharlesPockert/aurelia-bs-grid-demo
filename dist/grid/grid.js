System.register(["aurelia-framework"], function (_export) {
	"use strict";

	var bindable, inject, Grid;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			Grid = (function () {
				var _instanceInitializers = {};

				function Grid(element) {
					_classCallCheck(this, _Grid);

					_defineDecoratedPropertyDescriptor(this, "read", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "autoGenerateColumns", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "pageable", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "sortable", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "selectable", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "selectedItem", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "noRowsMessage", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "serverSorting", _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, "columnHeaders", _instanceInitializers);

					this.data = [];
					this.sorting = {};
					this.paging = { page: 1, size: 10 };
					this.count = 0;

					this.element = element;
					this.loading = false;
				}

				var _Grid = Grid;

				_createDecoratedClass(_Grid, [{
					key: "attached",
					value: function attached() {
						this.refresh();
					}
				}, {
					key: "pageChanged",
					value: function pageChanged(page) {
						this.paging.page = page;
						this.refresh();
					}
				}, {
					key: "bind",
					value: function bind(executionContext) {
						var _this = this;

						this["$parent"] = executionContext;

						var template = this.element.querySelector("template");
						var cols = Array.prototype.slice.call(template.content.querySelectorAll("td"));
						var container = this.element.querySelector("div");

						this.columns = [];

						cols.forEach(function (c) {

							var attrs = Array.prototype.slice.call(c.attributes);

							var col = {
								field: "",
								heading: ""
							};

							attrs.forEach(function (a) {
								col[a.name] = a.value;
							});

							if (col.nosort !== undefined || !_this.sortable) col.nosort = true;

							_this.columns.push(col);
						});

						container.parentNode.removeChild(container);
					}
				}, {
					key: "refresh",
					value: function refresh() {
						var _this2 = this;

						if (!this.read) {
							console.error("No read method specified for grid");
							return;
						}

						this.loading = true;

						this.read({
							sort: this.sorting,
							page: this.paging
						}).then(function (result) {
							_this2.data = result.data;
							_this2.count = result.count;

							console.log("Retrieved " + result.data.length + " rows");
							_this2.loading = false;
						});
					}
				}, {
					key: "noRowsMessageChanged",
					value: function noRowsMessageChanged() {
						this.showNoRowsMessage = this.noRowsMessage !== "";
					}
				}, {
					key: "sortByProperty",
					value: function sortByProperty(prop) {
						return function (a, b) {
							if (typeof a[prop] == "number") {
								return a[prop] - b[prop];
							} else {
								return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
							}
						};
					}
				}, {
					key: "applySort",
					value: function applySort(column) {
						var newSort = undefined;

						switch (this.sorting[column.field]) {
							case "asc":
								newSort = "desc";
								break;
							case "desc":
								break;
							default:
								newSort = "asc";
								break;
						}

						this.sorting[column.field] = newSort;
						column.sort = newSort;

						var dir = newSort == "asc" ? 1 : -1;

						if (this.serverSorting) this.refresh();else {
							this.data.sort(function (a, b) {
								if (typeof a[column.field] == "number") {
									return (a[column.field] - b[column.field]) * dir;
								} else {
									return (a[column.field] < b[column.field] ? -1 : a[column.field] > b[column.field] ? 1 : 0) * dir;
								}
							});
						}
					}
				}, {
					key: "select",
					value: function select(item) {
						this.selectedItem = item;
						console.log("Selected");
					}
				}, {
					key: "read",
					decorators: [bindable],
					initializer: function () {
						return null;
					},
					enumerable: true
				}, {
					key: "autoGenerateColumns",
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: "pageable",
					decorators: [bindable],
					initializer: function () {
						return true;
					},
					enumerable: true
				}, {
					key: "sortable",
					decorators: [bindable],
					initializer: function () {
						return true;
					},
					enumerable: true
				}, {
					key: "selectable",
					decorators: [bindable],
					initializer: function () {
						return true;
					},
					enumerable: true
				}, {
					key: "selectedItem",
					decorators: [bindable],
					initializer: function () {
						return null;
					},
					enumerable: true
				}, {
					key: "noRowsMessage",
					decorators: [bindable],
					initializer: function () {
						return "";
					},
					enumerable: true
				}, {
					key: "serverSorting",
					decorators: [bindable],
					initializer: function () {
						return false;
					},
					enumerable: true
				}, {
					key: "columnHeaders",
					decorators: [bindable],
					initializer: function () {
						return [];
					},
					enumerable: true
				}], null, _instanceInitializers);

				Grid = inject(Element)(Grid) || Grid;
				return Grid;
			})();

			_export("Grid", Grid);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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dEIsVUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBR3ZDLFVBQUksSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQ2Q7QUFDRCxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDckIsWUFBSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO0FBQ3BDLGdCQUFPLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLEdBQUssR0FBRyxDQUFDO1NBQ3RELE1BQU07QUFDSCxnQkFBTyxDQUFFLEFBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFJLEFBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSyxHQUFHLENBQUM7U0FDN0c7UUFDSixDQUFDLENBQUM7T0FDTjtNQUNEOzs7WUFFSyxnQkFBQyxJQUFJLEVBQUU7QUFDWixVQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6QixhQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO01BQ3hCOzs7a0JBakpBLFFBQVE7O2FBQVEsSUFBSTs7Ozs7a0JBQ3BCLFFBQVE7Ozs7O2tCQUNSLFFBQVE7O2FBQVksSUFBSTs7Ozs7a0JBQ3hCLFFBQVE7O2FBQVksSUFBSTs7Ozs7a0JBQ3hCLFFBQVE7O2FBQWMsSUFBSTs7Ozs7a0JBQzFCLFFBQVE7O2FBQWdCLElBQUk7Ozs7O2tCQUM1QixRQUFROzthQUFpQixFQUFFOzs7OztrQkFDM0IsUUFBUTs7YUFBaUIsS0FBSzs7Ozs7a0JBQzlCLFFBQVE7O2FBQWlCLEVBQUU7Ozs7O0FBVmhCLFFBQUksR0FEaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILElBQUksS0FBSixJQUFJO1dBQUosSUFBSTs7O21CQUFKLElBQUkiLCJmaWxlIjoiZ3JpZC9ncmlkLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==