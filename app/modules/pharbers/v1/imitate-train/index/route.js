import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.modelFor('pharbers.v1.imitate-train')
    },
    actions: {
        simulation(uuid) {
            this.transitionTo('pharbers.v1.imitate-train.decision', uuid)
        },
    }
});