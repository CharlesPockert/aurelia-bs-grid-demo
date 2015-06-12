import {bindable, inject } from 'aurelia-framework';

@inject(Element)
export class Grid {

	@bindable read = null;
	@bindable autoGenerateColumns;	
	@bindable pageable = true;
	@bindable sortable = true;
	@bindable selectable = true;
	@bindable selectedItem = null;
	@bindable noRowsMessage = "";
	@bindable serverSorting = false;
	@bindable columnHeaders = [];

	data = [];
	sorting = {};
	paging = { page:1, size: 10 };
	count = 0;

	constructor(element) {
		this.element = element;
		this.loading = false;
	}

	attached() {
		// Refresh data
	    this.refresh();
	}

	pageChanged(page) {
		this.paging.page = page;
		this.refresh();
	}

	bind(executionContext) {

		this["$parent"] = executionContext;

		// Get the columns from the duplicate of the user columns template
		var template = this.element.querySelector("template"); 
		var cols = Array.prototype.slice.call(template.content.querySelectorAll("td"));
		var container = this.element.querySelector("div");

		// Iterate the tds and build a column list based on attributes
		this.columns = [];

		cols.forEach(c => {

			var attrs = Array.prototype.slice.call(c.attributes);

			// TODO: Make this a column class so user can programatically add columns
			var col = {
				field: "",
				heading: ""
			};

			attrs.forEach(a => {
				col[a.name] = a.value;
			});

			if(col.nosort !== undefined || !this.sortable)
				col.nosort = true;

			this.columns.push(col);
		});

		container.parentNode.removeChild(container);
	}

	refresh() {

		if(!this.read) {
			console.error("No read method specified for grid");
			return;
		}

		// TODO: Implement progress indicator
		this.loading = true;

		// Try to read from the data adapter
		this.read({ 
			sort: this.sorting, 
			page: this.paging
		})
		.then((result) => {
			// Data should be in the result so grab it and assign it to the data property
			this.data = result.data;
			this.count = result.count;

			// Update the pager - maybe the grid options should contain an update callback instead of reffing the
			// pager into the current VM?
			// this.pager.update(this.paging.page, this.paging.size, this.count);
			console.log("Retrieved " + result.data.length + " rows");
			this.loading = false;
		});

	}

	noRowsMessageChanged() {
		this.showNoRowsMessage = this.noRowsMessage !== "";
	}

	sortByProperty(prop) {
	   return (a,b) => {
	        if (typeof a[prop] == "number") {
	            return (a[prop] - b[prop]);
	        } else {
	            return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0));
	        }
	    };
	}	
	applySort(column) {

	    // If the sort already exists
	    var newSort = undefined;

	    switch(this.sorting[column.field]) {
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

	    var dir = newSort == 'asc' ? 1 : -1;

		// If server sort, just refresh
		if (this.serverSorting)
		    this.refresh();
		else {
		    this.data.sort((a, b) => {
		        if (typeof a[column.field] == "number") {
		            return ((a[column.field] - b[column.field])) * dir;
		        } else {
		            return (((a[column.field] < b[column.field]) ? -1 : ((a[column.field] > b[column.field]) ? 1 : 0))) * dir;
		        }
		    });
		}
	}

	select(item) {
		this.selectedItem = item;
		console.log("Selected");
	}


}

