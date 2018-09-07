import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let data = this.Data
        data.set('attributes.res', "tm-login")
        data.set('relationships.conditions', { data: [{ id: '2', type: 'eq_cond' }] });
        let include = [{ id: '2', type: 'eq_cond', key: 'a', val: 'p' }];

        let conditions = this.Contact.joint(data, include);

        return this.store.queryMultipleObject('/api/proposal/lst', 'proposal', conditions);

    },
    actions: {
        simulation(uuid) {
            this.transitionTo('pharbers.v1.decision', uuid)
        },
    }
});