import Controller from '@ember/controller';

import RSVP from 'rsvp';

export default Controller.extend({
    init() {
        this._super(...arguments);

    },
    actions: {
        runCalc() {
            let repRecord = this.store.peekAll('repinputinfo');
            let manRecord = this.store.peekAll('managerinputinfo').firstObject;
            manRecord._internalModel.__relationships = { initializedRelationships: {} };
            let hospRecord = this.store.peekAll('hospitalbaseinfo');
            let hospRecordJsonApi = this.store.object2JsonApi('hospitalbaseinfo', hospRecord);
            let manRecordJsonApi = this.store.object2JsonApi('managerinputinfo', manRecord);
            let repRecordJsonApi = this.store.object2JsonApi('repinputinfo', repRecord);
            console.log(hospRecordJsonApi);
            console.log(manRecordJsonApi);
            console.log(repRecordJsonApi);
            // this.transitionToRoute('pharbers.v1.reports', this.get('uuid'))
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
            if( cache.length == 0 ) {
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
                    if( cache ) {
                        that.store.pushPayload(JSON.parse(cache))
                    }
                })
            }

            let hospitalCache = this.get('store').peekAll('hospitalbaseinfo')
            let repInputCache = this.get('store').peekAll('repinputinfo')
            if ( hospitalCache.length == 0 || repInputCache.length == 0) {
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

            if( repInputCache.length == 0 || managerInputCache.length == 0) {
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

        getManagerTime(component) {
            // let malreadydata = this.store.peekAll('managerinputinfo').firstObject;
            // if (malreadydata.length == 0) {
            //     this.store.queryObject('/api/v1/managerInputInfo/0', 'managerinputinfo', this.queryConditions())
            //         .then((minfo) => {
            //             console.log(minfo)
            //             component.set('mdata', minfo)
            //         });
            // } else {
            //     component.set('mdata', malreadydata);
            // };
            // let malreadydata = this.store.peekAll('managerinputinfo');
            // if (malreadydata.length == 0) {
            this.store.queryObject('/api/v1/managerInputInfo/0', 'managerinputinfo', this.queryConditions())
                .then((minfo) => {
                    component.set('mdata', minfo);
                    this.recoveryRepresentativeModelRelationship(minfo, 'maninfo', 'manStorageData');
                });
            // } else {
            //     component.set('mdata', malreadydata);
            // }
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
            
            let cache = this.get('store').peekAll('repinputinfo')

            if ( cache.length == 0 ) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions).then((rinfo) => {
                    component.set('repList', rinfo);
                }); 
            } else {
                component.set('repList', cache); 
            }

        },

        recoveryHospInput(hospid) {
        },

        hospInput(id) {
        },

        chooseRep(repid) {
        },

        repInput(rid) {
        },

        getManagerTime(component) {
        }
    },
});