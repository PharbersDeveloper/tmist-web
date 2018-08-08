import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        simulation(pid, uuid) {
            this.transitionTo('pharbers.v1.hospital', pid, uuid)
        }
    }
});