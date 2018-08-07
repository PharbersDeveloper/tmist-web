import Component from '@ember/component';
import {
	computed
} from '@ember/object';
import Table from 'ember-light-table';

export default Component.extend({
	classNames: ['table-center'],
	selfheight: '180px',
	sort: '',
	dir: 'asc',
	sortedModel: computed.sort('model', 'sortBy').readOnly(),
	sortBy: computed('dir', 'sort', function() {
		return [`${this.get('sort')}:${this.get('dir')}`];
	}).readOnly(),
	setRows: function(rows, that) {
		that.get('table').setRows([]);
		that.get('table').setRows(rows);
	},
	filterAndSortModel: function(that) {
		let model = that.get('sortedModel');
		that.get('setRows')(model, that);
	},
	tableColumns: [],
	table: computed('model', function() {
		return new Table(this.get('tableColumns'), this.get('model'));
	}),
	actions: {
		onColumnClick(column) {
			if (column.sorted) {
				this.setProperties({
					dir: column.ascending ? 'asc' : 'desc',
					sort: column.get('valuePath'),
				});
				this.set('sort', column.get('valuePath'))

				this.get('filterAndSortModel')(this);
			}
		}
	}

});