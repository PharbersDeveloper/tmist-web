import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    intro: DS.attr(),
    total_days: DS.attr('number'),
    used_days: DS.attr('number'),
    product_train: DS.attr(),
    sales_train: DS.attr(),
    team_meet: DS.attr(),
    total_used_days: computed('used_days', 'product_train', 'sales_train', 'team_meet', function() {
        return Number(this.get('used_days') || 0) +
            Number(this.get('product_train') || 0) +
            Number(this.get('sales_train') || 0) +
            Number(this.get('team_meet') || 0)
    }),
    repInfo: DS.belongsTo('representative', { async: false }),
});