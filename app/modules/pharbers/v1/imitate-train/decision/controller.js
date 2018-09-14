import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { computed, observer } from '@ember/object';
import { isArray } from '@ember/array';
export default Controller.extend({
    recoveryModelRelationship(totalHospBaseInfoRecovery) {
        let uuid = this.get('uuid');
        let storageData = [];
        totalHospBaseInfoRecovery.map((hosp) => {
            let object = {};
            object = JSON.parse(localStorage.getItem('hospinput_' + uuid + "_" + hosp.id));
            if (object) {
                storageData.pushObject(object.hospinfo);
            }
        });
        this.set('HospStorageData', storageData);
    },

    recoveryRepresentativeModelRelationship(totalRepInputInfo, localType, localArray) {
        let uuid = this.get('uuid');
        let storageData = [];
        if (isArray(totalRepInputInfo)) {
            totalRepInputInfo.map((item) => {
                let object = {};
                object = JSON.parse(localStorage.getItem(localType + '_' + uuid + "_" + item.id));
                if (object) {
                    storageData.pushObject(object[localType]);
                }
            });
        } else {
            let object = {};
            object = JSON.parse(localStorage.getItem(localType + '_' + uuid + "_" + totalRepInputInfo.id));
            if (object) {
                storageData.pushObject(object[localType]);
            }
        }

        this.set(localArray, storageData);
    },

    init() {
        this._super(...arguments);
        this.HospStorageData = [];
        this.repStorageData = [];
        this.manStorageData = [];
    },

    setManagersTime(data) {
        let totalUsedBudget = 0;
        let totalManagerUsedDay = 0;

        data.map((hosp) => {
            totalUsedBudget = totalUsedBudget + (Number(hosp.data.attributes.budget) || 0);
            totalManagerUsedDay = totalManagerUsedDay + (Number(hosp.data.attributes.managerwith) || 0);
        });
        this.get('verticalRightComponent').set('budget', totalUsedBudget);
        this.get('verticalRightComponent').set('totalUsedDays', totalManagerUsedDay);
        return totalManagerUsedDay;
    },

    asyncHospInputAlreadyData: observer('HospStorageData.@each', function() {
        let data = this.get('HospStorageData');

        if (!this.get('verticalRightComponent').get('isDestroyed') ||
            !this.get('verticalRightComponent').get('isDestroying')) {
            let totalManUesdDay = this.setManagersTime(data);
            let managerinputinfo = this.store.peekAll('managerinputinfo').firstObject;
            managerinputinfo.set('used_day', totalManUesdDay);
        }
        let repInputRecords = this.store.peekAll('repinputinfo');

        repInputRecords.map((rep) => {
            let useday = 0;
            data.map((hosp) => {
                hosp.included.map((inc) => {
                    if (inc.type == "representative") {
                        if (inc.id == rep.id) {
                            useday = useday + (Number(hosp.data.attributes.asignday) || 0);
                        }
                    }
                });
            });
            rep.set('used_days', useday);

        });
    }),

    asyncRepInputDays: observer('repStorageData.@each', function() {
        let data = this.get('repStorageData');
        let repInputRecords = this.store.peekAll('repinputinfo');
        repInputRecords.forEach((rep) => {
            data.forEach((localRep) => {
                if (rep.id == localRep.data.id) {
                    rep.set('product_train', Number(localRep.data.attributes.product_train) || 0);
                    rep.set('sales_train', Number(localRep.data.attributes.sales_train) || 0);
                };
            });
        });
    }),

    asyncManInput: observer('manStorageData.@each', function() {
        let data = this.get('manStorageData')[0];
        let managerTotalSalesTrain = 0;
        let repInputRecords = this.store.peekAll('repinputinfo');
        let managerInputRecord = this.store.peekAll('managerinputinfo').firstObject;

        repInputRecords.forEach((rep) => {
            // console.log(rep)
            managerTotalSalesTrain = managerTotalSalesTrain + (Number(rep.sales_train) || 0);
            rep.set('team_meet', data.data.attributes.team_meet);
        });

        managerInputRecord.set('sales_train', managerTotalSalesTrain);
        managerInputRecord.set('team_meet', data.data.attributes.team_meet);
        managerInputRecord.set('admin_work', data.data.attributes.admin_work);
        managerInputRecord.set('kpi_analysi', data.data.attributes.kpi_analysi);
    }),

    //更新localstorage数组数据
    updateLocalStorageArray(uuid, id, newdata, dataType) {
        let arrayObject = this.get(dataType).filter((item) => {
            return item.data.id != id
        });
        arrayObject.pushObject(newdata);
        this.set(dataType, arrayObject);
    },

    queryConditions() {
        let req = this.store.createRecord('request', { res: 'scenario' });
        let eqValues = [{ type: 'eqcond', key: 'uuid', val: this.get('uuid') }];

        eqValues.forEach((elem, index) => {
            req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                key: elem.key,
                val: elem.val,
            }))
        });

        let conditions = this.store.object2JsonApi('request', req);
        return conditions;
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

            this.store.queryObject('/api/v1/medicsnotices/0', 'medicsnotice', this.queryConditions())
                .then((mwithns) => {
                    component.set('data', mwithns);
                });
        },

        getHospInfo(component) {
            component.set('uuid', this.get('uuid'));

            let alreadydata = this.store.peekAll('hospitalbaseinfo');
            let allrepresent = this.store.peekAll('repinputinfo');

            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/hospitalinfo/0', 'hospitalbaseinfo', this.queryConditions())
                    .then((hinfo) => {
                        component.set('data', hinfo);
                        this.recoveryModelRelationship(hinfo);
                    });
            } else {
                component.set('data', alreadydata);
                this.recoveryModelRelationship(alreadydata);
            }

            if (allrepresent.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', this.queryConditions())
                    .then((rinfo) => {
                        component.set('totalRep', rinfo)
                    });
            } else {
                component.set('totalRep', allrepresent)
            }
        },

        getRepBudget(component) {
            let data = this.get('HospStorageData');
            this.set('verticalRightComponent', component);
            this.setManagersTime(data);

            let alreadydata = this.store.peekAll('repinputinfo');

            let malreadydata = this.store.peekAll('managerinputinfo');

            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', this.queryConditions())
                    .then((rinfo) => {
                        component.set('data', rinfo)
                    });
            } else {
                component.set('data', alreadydata);
            };
            if (malreadydata.length == 0) {
                this.store.queryObject('/api/v1/managerInputInfo/0', 'managerinputinfo', this.queryConditions())
                    .then((minfo) => {
                        component.set('mdata', minfo)
                    });
            } else {
                component.set('mdata', malreadydata);

            }

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

            let alreadydata = this.store.peekAll('repinputinfo');

            if (alreadydata.length === 0) {
                this.store.queryMultipleObject('/api/v1/repinputcards/0', 'repinputinfo', this.queryConditions())
                    .then((rinfo) => {
                        component.set('data', rinfo);
                        this.recoveryRepresentativeModelRelationship(rinfo, 'repinfo', 'repStorageData');
                    });
            } else {
                component.set('data', alreadydata);
                this.recoveryRepresentativeModelRelationship(alreadydata, 'repinfo', 'repStorageData');
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
            };

            localStorage.setItem('hospinput_' + uuid + "_" + id, JSON.stringify(hospInputInfo));
            this.updateLocalStorageArray(uuid, id, recordJsonApi, 'HospStorageData');

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
            localStorage.setItem('hospinput_' + uuid + "_" + hospid, JSON.stringify(hospInputInfo));

            this.updateLocalStorageArray(uuid, hospid, hospRecordJsonApi, 'HospStorageData');
        },

        repInput(rid) {
            let uuid = this.get('uuid');
            let repRecord = this.store.peekRecord('repinputinfo', rid);
            let recordJsonApi = this.store.object2JsonApi('repinputinfo', repRecord, false);
            let repInputInfo = {
                uuid: uuid,
                repinfo: recordJsonApi
            };

            localStorage.setItem('repinfo_' + uuid + "_" + rid, JSON.stringify(repInputInfo));
            this.updateLocalStorageArray(uuid, rid, recordJsonApi, 'repStorageData');
        },

        managerInput(mid) {
            let uuid = this.get('uuid');
            let manRecord = this.store.peekRecord('managerinputinfo', mid);
            manRecord._internalModel.__relationships = { initializedRelationships: {} }
            let recordJsonApi = this.store.object2JsonApi('managerinputinfo', manRecord, false);
            let manInputInfo = {
                uuid: uuid,
                maninfo: recordJsonApi
            };

            localStorage.setItem('maninfo_' + uuid + "_" + mid, JSON.stringify(manInputInfo));
            this.updateLocalStorageArray(uuid, mid, recordJsonApi, 'manStorageData');
        }

    },
});