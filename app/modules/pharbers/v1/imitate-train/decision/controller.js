import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.storageData = [];
    },
    asyncRepDays: observer('storageData.@each', function() {
        let data = this.get('storageData');
        let totalUsedBudget = 0;
        data.map((hosp) => {
            totalUsedBudget = totalUsedBudget + Number(hosp.data.attributes.budget);
        })
        let repInputRecords = this.store.peekAll('repinputinfo');
        let perRep = {};
        repInputRecords.map((rep) => {
            let useday = 0;
            data.map((hosp) => {
                hosp.included.map((inc) => {
                    if (inc.type == "representative") {
                        if (inc.id == rep.id) {
                            useday = useday + Number(hosp.data.attributes.asignday);
                        }
                    }
                });
            });
            rep.set('used_days', useday);
        })
        let totalManagerUsedDay = 0;
        data.map((hosp) => {
            totalManagerUsedDay = totalManagerUsedDay + Number(hosp.data.attributes.managerwith);
        });
        console.log(totalManagerUsedDay);

    }),
    actions: {
        runCalc() {
            this.transitionToRoute('pharbers.v1.reports', this.get('uuid'))
        },

        getMedicNotices(component) {
            let req = this.store.createRecord('request', { res: 'scenario' });
            let eqValues = [{ type: 'eqcond', key: 'uuid', val: this.get('uuid') }];

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            this.store.queryObject('/api/v1/medicsnotices/0', 'medicsnotice', conditions)
                .then((mwithns) => {
                    component.set('data', mwithns);
                });
        },

        getHospInfo(component) {
            component.set('uuid', this.get('uuid'));
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [{ type: 'eqcond', key: 'uuid', val: this.get('uuid') }];

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    key: elem.key,
                    val: elem.val,
                }))
            });

            let conditions = this.store.object2JsonApi('request', req);

            let alreadydata = this.store.peekAll('hospitalbaseinfo');
            let allrepresent = this.store.peekAll('repinputinfo');

            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/hospitalinfo/0', 'hospitalbaseinfo', conditions)
                    .then((hinfo) => {
                        component.set('data', hinfo);
                    });
            } else {
                component.set('data', alreadydata);
            }

            if (allrepresent.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', conditions)
                    .then((rinfo) => {
                        component.set('totalRep', rinfo)
                    });
            } else {
                component.set('totalRep', allrepresent)
            }
        },

        getRepBudget(component) {
            let req = this.store.createRecord('request', {
                res: 'scenario',
            });

            let eqValues = [
                { type: 'eqcond', key: 'uuid', val: this.get('uuid') },
            ];

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
            let req = this.store.createRecord('request', { res: 'scenario' });

            let eqValues = [{ type: 'eqcond', key: 'uuid', val: this.get('uuid') }];

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

        recoveryHospInput(hospid) {
            this.set('currentHospId', hospid);
            let alreadyStorage = JSON.parse(localStorage.getItem('hospinput_' + this.get('uuid') + "_" + hospid));
            if (!isEmpty(alreadyStorage)) {
                let totalHospRecord = this.store.peekAll('hospitalbaseinfo');
                totalHospRecord.map((item) => {
                    let repInStorage = "";
                    let repInStorageId = "";

                    if (item.id == hospid) {
                        alreadyStorage.hospinfo.included.map((included) => {
                            if (included.type == "representative") {
                                console.log('inside')
                                repInStorage = included;
                                repInStorageId = included.id;
                            }
                        });
                        let repRecord = '';
                        if (repInStorageId) {
                            repRecord = this.store.peekRecord('representative', repInStorageId);
                            item.set('representative', repRecord);
                        }
                        item.set("target", alreadyStorage.hospinfo.data.attributes.target || "");
                        item.set("budget", alreadyStorage.hospinfo.data.attributes.budget || "");
                        item.set("asignday", alreadyStorage.hospinfo.data.attributes.asignday || "");
                        item.set("managerwith", alreadyStorage.hospinfo.data.attributes.managerwith || "");
                    }
                })
            }
        },

        hospInput(id) {
            let uuid = this.get('uuid');
            let record = this.store.peekRecord('hospitalbaseinfo', id);
            let recordJsonApi = this.store.object2JsonApi('hospitalbaseinfo', record, false);
            let hospInputInfo = {
                uuid: uuid,
                hospinfo: recordJsonApi
                // hosp_id: id,
                // target: recordJsonApi.data.attributes.target,
                // budget: recordJsonApi.data.attributes.budget,
                // asignday: recordJsonApi.data.attributes.asignday,
                // managerwith: recordJsonApi.data.attributes.managerwith
            };

            localStorage.setItem('hospinput_' + uuid + "_" + id, JSON.stringify(hospInputInfo));
            let arrayObject = this.get('storageData').filter((item) => {
                return item.data.id != id
            });
            arrayObject.pushObject(recordJsonApi);
            this.set('storageData', arrayObject);
        },

        chooseRep(repid) {
            let uuid = this.get('uuid');
            let hospid = this.get('currentHospId');
            let repRecord = this.store.peekRecord('representative', repid);
            let hospRecord = this.store.peekRecord('hospitalbaseinfo', hospid);
            hospRecord.set('representative', repRecord);
            let hospRecordJsonApi = this.store.object2JsonApi('hospitalbaseinfo', hospRecord, false);
            let hospInputInfo = {
                uuid: uuid,
                hospinfo: hospRecordJsonApi
            };
            // this.set('currentRep',repid);
            localStorage.setItem('hospinput_' + uuid + "_" + hospid, JSON.stringify(hospInputInfo));
        }
    },
});