import Controller from '@ember/controller';

export default Controller.extend({
    queryConditions() {
        let evaid = this.get('evaluationid');
        let req = this.store.createRecord('request', {
            res: 'assess_report',
        });
        req.get('eqcond').pushObject(this.store.createRecord('eqcond', {
            key: 'id',
            val: evaid,
        }))
        let conditions = this.store.object2JsonApi('request', req);
        return conditions;
    },
    actions: {
        getRadarData(component) {
            let cache = this.get('store').peekAll('evaluation_radar_data')
            if (cache.length == 0) {
                this.store.queryObject('/api/v1/evaluationRadar/0', 'evaluation_radar_data', this.queryConditions())
                    .then((rdata) => {
                        component.set('radarData', rdata);
                    });
            } else {
                component.set('radarData', cache.firstObject);
            }
        },

        getCardData(component) {
            // let cache = this.get('store').peekAll('evaluation_card_data');
            // if (cache.length == 0) {
            this.store.queryMultipleObject('/api/v1/evaluationCards/0', 'evaluation_card_data', this.queryConditions())
                .then((cdata) => {
                    component.set('cardData', cdata);
                });
            // } else {
            // component.set('cardData', cache.firstObject);
            // }
        },

        getLineData(component) {
            let cache = this.get('store').peekAll('evaluation_line_data')
            if (cache.length == 0) {
                this.store.queryObject('/api/v1/evaluationLine/0', 'evaluation_line_data', this.queryConditions())
                    .then((ldata) => {
                        component.set('lineData', ldata);
                    });
            } else {
                component.set('lineData', cache.firstObject);
            }
        },
    }
});