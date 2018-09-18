import DS from 'ember-data';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default DS.Model.extend({
    target: DS.attr(),
    budget: DS.attr(),
    asignday: DS.attr(),
    managerwith: DS.attr(),
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
            change = (change / preTarget).toFixed(2);
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