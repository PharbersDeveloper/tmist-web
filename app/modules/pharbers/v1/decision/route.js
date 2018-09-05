import Route from '@ember/routing/route';

export default Route.extend({
    model(param) {
        this.controllerFor('pharbers.v1.decision').set('uuid', param.uuid);
        let data = this.Data
        data.set('attributes.res', "tm-login")
        data.set('relationships.conditions', { data: [{ id: '2', type: 'eq_cond' }] });
        let include = [{ id: '2', type: 'eq_cond', key: 'a', val: 'p' }];

        let conditions = this.Contact.joint(data, include);
        return this.store.queryMultipleObject('/api/layout/lst', 'alldecision', conditions)
    },
    actions: {

    }
});