import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    actions: {
        getDropdawnData(component) {
            this.store.queryObject('/api/report/which', 'dropdown-data', {})
                .then((dropdowndata) => {
                    component.set('data', dropdowndata);
                });
        }
    }
    // ajax: inject(),
    // getAjaxOpt(data) {
    //     return {
    //         method: 'POST',
    //         dataType: 'json',
    //         cache: false,
    //         data: JSON.stringify(data),
    //         contentType: 'application/json',
    //         Accpt: 'application/json'
    //     }
    // },
    // queryTotal(uuid) {
    //     let condition = {
    //         "token": "bearera67c2dc93dfc7ff2a19baefee72034f4",
    //         "timestamp": 1530689119000,
    //         "version": {
    //             "major": 1,
    //             "minor": 0
    //         },
    //         "data": {
    //             "type": "which",
    //             "condition": {
    //                 "uuid": uuid
    //             }
    //         }
    //     }
    //     this.get('ajax')
    //         .request('/api/report/which', this.getAjaxOpt(condition))
    //         .then((res) => {
    //             if (res.status === "ok") {
    //                 let result = res.result.data.attribute;
    //                 return result;
    //             }
    //         }).then((res2) => {
    //             this.get('ajax')
    //                 .request('')
    //         })
    //
    // }
});