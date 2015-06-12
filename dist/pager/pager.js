System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var bindable, Pager;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			Pager = (function () {
				var _instanceInitializers = {};

				function Pager() {
					_classCallCheck(this, Pager);

					_defineDecoratedPropertyDescriptor(this, 'onPageChanged', _instanceInitializers);

					_defineDecoratedPropertyDescriptor(this, 'numToShow', _instanceInitializers);

					this.page = 1;
					this.pageCount = 0;
					this.pages = [];
				}

				_createDecoratedClass(Pager, [{
					key: 'changePage',
					value: function changePage(page) {

						var oldPage = this.page;

						this.page = this.cap(page);

						if (oldPage !== this.page) {
							this.onPageChanged(this.page);
						}
					}
				}, {
					key: 'update',
					value: function update(page, pagesize, totalItems) {
						this.page = page;
						this.totalItems = totalItems;
						this.pageSize = pagesize;

						this.createPages();
					}
				}, {
					key: 'cap',
					value: function cap(page) {
						if (page < 1) return 1;
						if (page > this.pageCount) return this.pageCount;

						return page;
					}
				}, {
					key: 'createPages',
					value: function createPages() {
						this.pageCount = Math.ceil(this.totalItems / this.pageSize);

						var numToRender = this.pageCount < this.numToShow ? this.pageCount : this.numToShow;

						var indicatorPosition = Math.ceil(numToRender / 2);

						var firstPageNumber = this.page - indicatorPosition + 1;

						if (firstPageNumber < 1) firstPageNumber = 1;

						var lastPageNumber = firstPageNumber + numToRender - 1;

						if (lastPageNumber > this.pageCount) {
							var dif = this.pageCount - lastPageNumber;

							firstPageNumber += dif;
							lastPageNumber += dif;
						}

						var pages = [];

						for (var i = firstPageNumber; i <= lastPageNumber; i++) {
							pages.push(i);
						};

						this.pages = pages;
					}
				}, {
					key: 'next',
					value: function next() {
						this.changePage(this.page + 1);
					}
				}, {
					key: 'prev',
					value: function prev() {
						this.changePage(this.page - 1);
					}
				}, {
					key: 'onPageChanged',
					decorators: [bindable],
					initializer: null,
					enumerable: true
				}, {
					key: 'numToShow',
					decorators: [bindable],
					initializer: function () {
						return 5;
					},
					enumerable: true
				}], null, _instanceInitializers);

				return Pager;
			})();

			_export('Pager', Pager);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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