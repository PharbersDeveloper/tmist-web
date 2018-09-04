import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        runCalc() {
            console.log('runcal ');
            this.transitionToRoute('pharbers.v1.reports')
        },
        queryAllDecision(component) {
            // this.store.queryMultipleObject('/api/decision', 'alldecision', {})
            //     .then((result) => {
            //         component.set('total', result);
            //     });
        },
        getMedicNotices(component) {
            let data = this.Data
            data.set('attributes.res', "tm-login")
            data.set('relationships.conditions', { data: [{ id: '2', type: 'eq_cond' }] });
            let include = [{ id: '2', type: 'eq_cond', key: 'a', val: 'p' }];

            let conditions = this.Contact.joint(data, include);
            this.store.queryObject('/api/medicsnotices', 'medicsnotice', {})
                .then((mwithns) => {
                    component.set('data', mwithns);
                });
        },
        //  获取manager 决策页面的药品与通知信息。
        getManagerMedicNotices(component) {
            let data = this.Data
            data.set('attributes.res', "tm-login")
            data.set('relationships.conditions', { data: [{ id: '2', type: 'eq_cond' }] });
            let include = [{ id: '2', type: 'eq_cond', key: 'a', val: 'p' }];

            let conditions = this.Contact.joint(data, include);
            this.store.queryObject('/api/medicsnotices', 'medicsnotice', {})
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
            this.store.queryObject('/api/repsbudgets', 'repsbudget', {})
                .then((randbs) => {
                    let result = randbs;
                    component.set('data', result)
                });
        },
        getHospCardInfo(component) {
            this.store.queryMultipleObject('/api/hospitalinfo', 'hospitalbaseinfo', {})
                .then((hinfo) => {
                    component.set('data', hinfo)
                });
        },
        getInputCard(component) {
            this.store.queryMultipleObject('/api/repinputcards', 'repinputinfo', {})
                .then((rinfo) => {
                    component.set('data', rinfo)
                });
        },
    },
});