import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        queryAllDecision(component) {
            // this.store.queryMultipleObject('/api/decision', 'alldecision', {})
            //     .then((result) => {
            //         component.set('total', result);
            //     });


        },
        getMedicNotices(component) {
            this.store.queryObject('/api/medicsnotices', 'medicsnotices', {})
                .then((mwithns) => {
                    component.set('data', mwithns);
                });
        },
        getHospInfo(component) {
            this.store.queryMultipleObject('/api/hospitalinfo', 'hospitalbaseinfo', {})
                .then((hinfo) => {
                    component.set('data', hinfo)
                });
        },
        getRepBudget(component) {
            this.store.queryMultipleObject('/api/repsbudgets', 'repsbudgets', {})
                .then((randbs) => {
                    component.set('data', randbs)
                });
        }
    },
});