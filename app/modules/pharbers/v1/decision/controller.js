import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
    },
    actions: {
        runCalc() {
            this.transitionToRoute('pharbers.v1.reports', this.get('uuid'))
        },
        // queryAllDecision(component) {
        //     this.store.queryMultipleObject('/api/decision', 'alldecision', {})
        //         .then((result) => {
        //             component.set('total', result);
        //         });
        // },
        getMedicNotices(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [
                { type: 'eqcond', key: 'uuid', val: this.get('uuid') },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.store.object2JsonApi('request', req);
            console.log('this is from decision routes getMedicNotices function');
            let alreadydata = this.store.peekAll('medicsnotice');
            console.log(alreadydata.length);
            // if (alreadydata.length === 0) {
            this.store.queryObject('/api/v1/medicsnotices/0', 'medicsnotice', conditions)
                .then((mwithns) => {
                    component.set('data', mwithns);
                });
            // } else {
            //     component.set('data', alreadydata);
            // }
        },
        getHospInfo(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [
                { type: 'eqcond', key: 'uuid', val: this.get('uuid') },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.store.object2JsonApi('request', req);

            let alreadydata = this.store.peekAll('hospitalbaseinfo');
            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/hospitalinfo/0', 'hospitalbaseinfo', conditions)
                    .then((hinfo) => {
                        component.set('data', hinfo);
                    });
            } else {
                component.set('data', alreadydata);
            }

        },


        getRepBudget(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [
                { type: 'eqcond', key: 'uuid', val: this.get('uuid') },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.store.object2JsonApi('request', req);

            let alreadydata = this.store.peekAll('repinputinfo');
            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions)
                    .then((rinfo) => {
                        component.set('data', rinfo)
                    });
            } else {
                component.set('data', alreadydata)
            }

        },
        getInputCard(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [
                { type: 'eqcond', key: 'uuid', val: this.get('uuid') },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.store.object2JsonApi('request', req);

            let alreadydata = this.store.peekAll('repinputinfo');
            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions)
                    .then((rinfo) => {
                        component.set('data', rinfo);
                    });
            } else {
                component.set('data', alreadydata)
            }
        },
    },
});