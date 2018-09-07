import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.medicsnotice = {};
        this.repinputinfo = [];
    },
    actions: {
        runCalc() {
            this.transitionToRoute('pharbers.v1.reports', this.get('uuid'))
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
                    this.set('medicsnotice', mwithns);
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
            if (this.get('repinputinfo').length > 0) {
                component.set('totalRep', this.get('repinputinfo'));
            } else {
                this.store.queryMultipleObject('/api/repinputcards', 'repinputinfo', {})
                    .then((rinfo) => {
                        component.set('totalRep', rinfo)
                    });
            }

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