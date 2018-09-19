import DS from 'ember-data';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default DS.Model.extend({
    target: DS.attr('number'),
    budget: DS.attr('number'),
    asignday: DS.attr('number'),
    managerwith: DS.attr('number'),
    representative: DS.belongsTo('representative', { async: false }),
    hospmedicinfos: DS.hasMany('hospmedicinfo', { async: false }),
    hospital: DS.belongsTo('hospital', { async: false }),
    target_change: computed('target', function() {
        let change = this.get('target');
        if (isEmpty(change)) {
            return "";
        } else {
            let medic = this.get('hospmedicinfos').firstObject;
            let preTarget = medic.pre_target;
            change = (change * 100 / preTarget).toFixed(2);
            return change;
        }
    }),
    budget_change: computed('budget', function() {
        let change = this.get('budget');
        if (isEmpty(change)) {
            return "";
        } else {
            let medic = this.get('hospmedicinfos').firstObject;
            let totalBudget = medic.total_budget;
            change = (change * 100 / totalBudget).toFixed(2);
            return change;
        }
    }),
});