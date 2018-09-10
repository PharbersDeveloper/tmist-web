import Route from '@ember/routing/route';

export default Route.extend({
    model(param) {
        this.controllerFor('pharbers.v1.decision').set('uuid', param.uuid);

        return this.store.queryMultipleObject('/api/v1/layoutLst/0', 'alldecision', {})
    },
    actions: {

    }
});