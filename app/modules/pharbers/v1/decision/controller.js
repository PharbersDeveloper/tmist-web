import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        queryAllDecision(component) {
            this.store.queryMultipleObject('/api/decision', 'alldecision', {})
                .then((data) => {
                    component.set('total', data)
                }, (error) => {
                    console.log("aaaaaaaahhhhhhhhhhh")
                    console.log(error);
                });
        }
    }
});
