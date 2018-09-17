import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
    stringVerification: service(),
    actions: {
        runCalc() {
            let repRecord = this.store.peekAll('repinputinfo');
            let manRecord = this.store.peekAll('managerinputinfo').firstObject;
            let hospRecord = this.store.peekAll('hospitalbaseinfo');

            let totalData = this.store.createRecord('allotResult', {
                "major": 1,
                "minor": 0
            });
            hospRecord.map((hosp) => {
                totalData.get('hospitalbaseinfo').pushObject(hosp);
            });
            repRecord.map((rep) => {
                totalData.get('representative').pushObject(rep);
            });

            totalData.set('managerinputinfo', manRecord);
            let conditions = this.store.object2JsonApi('allotResult', totalData, false);
            let verficationNull = this.stringVerification.stringIsEmpty(conditions);
            if (verficationNull.state) {
                console.log('ok');
            } else {
                console.log('not ok')
            };
            // conditions.included.forEach((singledata) => {
            //     console.log(singledata);
            //     if (this.stringVerification.stringIsEmpty(singledata).state) {
            //         console.log('no empty')
            //     } else {
            //         console.log('has blankddf')
            //     }
            // })
            // this.store.queryObject('/api/v1/taskAllot/0', 'allotResult', conditions)
            //     .then((res) => {
            //         if (!isEmpty(res.report_id)) {
            //             this.transitionToRoute('pharbers.v1.reports', this.get('uuid'))
            //         }
            //     });
        },

        getMedicNotices(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'uuid',
                val: this.get('uuid'),
            }))
            let conditions = this.store.object2JsonApi('request', req);
            let cache = this.get('store').peekAll('medicsnotice')
            if (cache.length == 0) {
                this.store.queryObject('/api/v1/medicsnotices/0', 'medicsnotice', conditions).then((mwithns) => {
                    component.set('data', mwithns);
                });
            } else {
                component.set('data', cache.firstObject);
            }

        },

        getHospInfo(component) {
            let that = this
            component.set('uuid', this.get('uuid'));
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'uuid',
                val: this.get('uuid'),
            }))
            let conditions = this.store.object2JsonApi('request', req);

            let loadHospitallocalStorage = function(data) {
                data.forEach(elem => {
                    let cache = localStorage.getItem('hospinput_' + that.get('uuid') + "_" + elem.id);
                    if (cache) {
                        that.store.pushPayload(JSON.parse(cache))
                    }
                })
            }

            let hospitalCache = this.get('store').peekAll('hospitalbaseinfo')
            let repInputCache = this.get('store').peekAll('repinputinfo')
            if (hospitalCache.length == 0 || repInputCache.length == 0) {
                new RSVP.all([
                    this.store.queryMultipleObject('/api/v1/hospitalinfo/0', 'hospitalbaseinfo', conditions),
                    this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions)
                ]).then(function(data) {
                    component.set('data', data[0]);
                    component.set('totalRep', data[1]);
                    loadHospitallocalStorage(component.get('data'));
                })

            } else {
                component.set('data', hospitalCache);
                component.set('totalRep', repInputCache);
                loadHospitallocalStorage(component.get('data'));
            }

        },

        totalBugdetRatio(totalBudget) {
            this.get('totalBudgetRatio').set('budget', totalBudget);
        },

        getRepBudget(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'uuid',
                val: this.get('uuid'),
            }))
            let conditions = this.store.object2JsonApi('request', req);

            let repInputCache = this.get('store').peekAll('repinputinfo')
            let managerInputCache = this.get('store').peekAll('managerinputinfo')

            if (repInputCache.length == 0 || managerInputCache.length == 0) {
                new RSVP.all([
                    this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions),
                    this.store.queryObject('/api/v1/managerInputInfo/0', 'managerinputinfo', conditions)
                ]).then(function(data) {
                    component.set('data', data[0])
                    component.set('mdata', data[1])
                })
            } else {
                component.set('data', repInputCache)
                component.set('mdata', managerInputCache.firstObject)
            }
            this.set('totalBudgetRatio', component);
        },

        getInputCard(component) {
            component.set('uuid', this.get('uuid'));
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'uuid',
                val: this.get('uuid'),
            }))
            let conditions = this.store.object2JsonApi('request', req);

            let cache = this.get('store').peekAll('repinputinfo');

            if (cache.length == 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions).then((rinfo) => {
                    component.set('repList', rinfo);
                });
            } else {
                component.set('repList', cache);
            }

        },





    },
});