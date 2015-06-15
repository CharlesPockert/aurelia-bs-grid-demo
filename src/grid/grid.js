import {bindable, inject } from 'aurelia-framework';
import {GridColumn} from './grid-column';

@inject(Element)
export class Grid {

	/* == Options == */

	// Pagination
	@bindable serverPaging = false;
	@bindable pageable = true;
	@bindable pageSize = 10;
	@bindable page = 1;

	// Sortination
	@bindable serverSorting = false;
	@bindable sortable = true;
	sorting = {};

	// Burnination?
	Trogdor = true;

	// Column defs
	@bindable autoGenerateColumns;	
	columnHeaders = [];
	columns = [];
	
	// Selection
	@bindable selectable = false;
	@bindable selectedItem = null;

	// Misc
	@bindable noRowsMessage = "";

	// Data ....
	@bindable autoLoad = true;
	loading = false;
	@bindable loadingMessage = "Loading...";

	// Read
	@bindable read = null;
	@bindable onReadError = null;

	// Tracking
	cache = [];
	data = [];
	count = 0;

	constructor(element) {
		this.element = element;
	}

	/* === Lifecycle === */
	attached() {
		if(this.autoLoad)
		    this.refresh();
	}

	bind(executionContext) {

		this["$parent"] = executionContext;

		// Ensure the grid settings
		// If we can page on the server and we can't server sort, we can't sort locally
		if(this.serverPaging && !this.serverSorting)
			this.sortable = false;

		// Get the columns from the duplicate of the user columns template
		var columnTemplate = this.element.querySelector("template"), 
		columnElements = Array.prototype.slice.call(columnTemplate.content.querySelectorAll("td")),
		columnContainer = this.element.querySelector("div");

		// Iterate the tds and build a column list based on attributes
		columnElements.forEach(c => {

			var attrs = Array.prototype.slice.call(c.attributes), colHash = {};
			attrs.forEach(a => colHash[a.name] = a.value);

			var col = new GridColumn(colHash);

			this.addColumn(col);
		});

		columnContainer.parentNode.removeChild(columnContainer);

		
	}

	addColumn(col) {

		// No-sort if grid is not sortable
		if(!this.sortable)
			col.nosort = true;

		this.columns.push(col);
	}

	/* === Paging === */
	pageChanged(page) {

		this.page = Number(page);

		if(this.cache.length == 0)
			this.refresh();
		else		
			this.applyPage();
	}

	pageSizeChanged() {
		this.pageChanged(1);
		this.updatePager();
	}

	applyPage() {
		if(!this.pageable) return;
		
		if(!this.serverPaging) {
			var start = (Number(this.page) - 1) * Number(this.pageSize);
			this.data = this.cache.slice(start, start + Number(this.pageSize));
		} 

		this.updatePager();
	}

	/* === Sorting === */
	sortByProperty(prop, dir) {
	   return (a,b) => {
	        if (typeof a[prop] == "number") {
	            return (a[prop] - b[prop]) * dir;
	        } else {
	            return ((a[prop] < b[prop]) ? -1 : ((a[prop] > b[prop]) ? 1 : 0)) * dir;
	        }
	    };
	}	

	sortChanged(field) {
		// Determine new sort
		var newSort = undefined;

	    switch(this.sorting[field]) {
	    	case "asc":
	    			newSort = "desc";
	    		break;
	    		case "desc":
	    			if(!this.serverSorting)
	    				newSort = "asc";
	    		break;
	    		default:
	    			newSort = "asc";
	    		break;
	    }

	    this.sorting[field] = newSort;
		this.applySort(field);
	}

	applySort(field) {

		var newSort = this.sorting[field];
	    var dir = newSort == 'asc' ? 1 : -1;

		// If server sort, just refresh
		if (this.serverSorting)
		{
		    this.refresh();
		}
		else {
			// Client side sort, first sort the cache, then page
			this.cache.sort(this.sortByProperty(field, dir));
		    this.applyPage();
		}
	}

	/* === Data === */
	refresh() {

		if(!this.read)
			throw new Error("No read method specified for grid");

		// TODO: Implement progress indicator
		this.loading = true;

		// Try to read from the data adapter
		this.read({ 
			sorting: this.sorting, 
			paging: { page: Number(this.page), size: Number(this.pageSize) }
		})
		.then((result) => {

			// Data should be in the result so grab it and assign it to the data property
			this.handleResult(result);

			this.loading = false;
		}, (result) => {
			// Something went terribly wrong, notify the consumer
			if(this.onReadError)
				this.onReadError(result);

			this.loading = false;
		});

	}

	handleResult(result) {

		// TODO: Check valid stuff was returned
		var data = result.data;

		// Is the data being paginated on the client side?
		if(this.pageable && !this.serverPaging && !this.serverSorting) {
			// Cache the data and slice into the array
			this.cache = result.data;
			this.applyPage();
		} else {
			this.data = result.data;
		}
	
	    this.count = result.count;

	    // Update the pager - maybe the grid options should contain an update callback instead of reffing the
	    // pager into the current VM?
	    this.updatePager();
	}

	updatePager() {
		this.pager.update(Number(this.page), Number(this.pageSize), Number(this.count));
	}

	/* === Selection === */

	select(item) {
		if(this.selectable)
			this.selectedItem = item;
	}

	/* === Change handlers === */
	noRowsMessageChanged() {
		this.showNoRowsMessage = this.noRowsMessage !== "";
	}



}

