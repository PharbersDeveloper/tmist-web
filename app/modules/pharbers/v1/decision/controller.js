import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        queryAllDecision(component) {
            console.log("sssssssssssshould")
            this.store.queryMultipleObject('/api/decision', 'alldecision', {})
                .then((data) => {
                    console.log('in controller ...............');
                    console.log(data)
                    component.set('total', data)
                });
        }
    }
});