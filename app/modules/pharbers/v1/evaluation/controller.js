import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        getRadarData(component) {
            let req = this.store.createRecord('request', {
                res: 'assess_report',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'id',
                val: '5b9f952fe53d3735f0007497',
            }))
            let conditions = this.store.object2JsonApi('request', req);
            let cache = this.get('store').peekAll('evaluation_radar_data')
            if (cache.length == 0) {
                this.store.queryObject('/api/v1/evaluationRadar/0', 'evaluation_radar_data', conditions)
                    .then((rdata) => {
                        component.set('radarData', rdata);
                    });
            } else {
                component.set('radarData', cache.firstObject);
            }

        },

        getCardData(component) {
            let req = this.store.createRecord('request', {
                res: 'assess_report',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'id',
                val: '5b9f952fe53d3735f0007497',
            }))
            let conditions = this.store.object2JsonApi('request', req);

            // let cache = this.get('store').peekAll('evaluation_card_data');
            // if (cache.length == 0) {
            this.store.queryMultipleObject('/api/v1/evaluationCards/0', 'evaluation_card_data', conditions)
                .then((cdata) => {
                    console.log(cdata);
                    console.log("===========");
                    component.set('cardData', cdata);
                });
            // } else {
            // component.set('cardData', cache.firstObject);
            // }

        },
        getLineData(component) {
            let req = this.store.createRecord('request', {
                res: 'assess_report',
            });
            req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
                key: 'id',
                val: '5b9f952fe53d3735f0007497',
            }))
            let conditions = this.store.object2JsonApi('request', req);
            let cache = this.get('store').peekAll('evaluation_line_data')
            if (cache.length == 0) {
                this.store.queryObject('/api/v1/evaluationLine/0', 'evaluation_line_data', conditions)
                    .then((ldata) => {
                        component.set('lineData', ldata);
                    });
            } else {
                component.set('lineData', cache.firstObject);
            }

        },
    }
});