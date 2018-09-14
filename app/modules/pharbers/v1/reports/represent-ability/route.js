import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let req = this.store.createRecord('request', {
            res: 'report',
        });

        let eqValues = [
            { type: 'eqcond', key: "id", val: '5b643430e53d3732b00047ea' },
        ]

        eqValues.forEach((elem, index) => {
            req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                key: elem.key,
                val: elem.val,
            }))
        });

        let conditions = this.store.object2JsonApi('request', req);

        return this.store.queryMultipleObject('/api/v1/reportLayout/0', 'report-layout', conditions)
        // return {
        //     "id": "54654654231",
        //     "component_data": [{
        //         "key": "which-result",
        //         "values": {
        //             "current": "代表能力",
        //             "selected": [
        //                 { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
        //                 { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
        //                 { "url": "pharbers.v1.reports.represent-product", "text": "代表-产品销售报告" },
        //                 { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
        //                 { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
        //             ]
        //         }
        //     }, {
        //         "key": "data-show-card",
        //         "values": [{
        //             "index": 1,
        //             "title": "综合能力最强",
        //             "type": "info",
        //             "value": "代表3",
        //             "ext": {
        //                 "sub": {
        //                     "type": "title",
        //                     "value": "指标",
        //                     "ext": {
        //                         "type": "sales",
        //                         "change": "none",
        //                         "value": 2547835
        //                     }
        //                 }
        //             },
        //         }, {
        //             "index": 2,
        //             "title": "成长最快",
        //             "type": "info",
        //             "value": "代表5",
        //             "ext": {
        //                 "sub": {
        //                     "type": "title",
        //                     "value": "预算占比",
        //                     "ext": {
        //                         "type": "percent",
        //                         "change": "none",
        //                         "value": 0.09
        //                     }
        //                 }
        //             },
        //         }, ]
        //     }, {
        //         "key": "result-table",
        //         "values": {
        //             "columns": [{
        //                     "label": '代表名称',
        //                     "valuePath": 'rep_name',
        //                     "width": '180px',
        //                     "align": 'center',
        //                     "sorted": false,
        //
        //                 }, {
        //                     "label": '总能力值',
        //                     "valuePath": 'ability',
        //                     "width": '200px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-thousands'
        //                 }, {
        //                     "label": '产品知识',
        //                     "valuePath": 'prod_know',
        //                     "width": '200px',
        //                     "align": 'center',
        //                 }, {
        //                     "label": '销售技巧',
        //                     "valuePath": 'sales',
        //                     "width": '150px',
        //                     "align": 'center',
        //                 }, {
        //                     "label": '增长',
        //                     "valuePath": 'sales_growth',
        //                     "width": '150px',
        //                     "align": 'center',
        //                 }, {
        //                     "label": '工作积极性',
        //                     "valuePath": 'work_activity',
        //                     "width": '180px',
        //                     "align": 'center',
        //                 },
        //
        //             ],
        //             "columnsValue": [{
        //                     "rep_name": "代表1",
        //                     "ability": 45,
        //                     "prod_know": 65,
        //                     "sales": 56,
        //                     "sales_growth": 4,
        //                     "work_activity": 88,
        //
        //                 },
        //                 {
        //                     "rep_name": "代表2",
        //                     "ability": 65,
        //                     "prod_know": 35,
        //                     "sales": 87,
        //                     "sales_growth": 5,
        //                     "work_activity": 45,
        //
        //                 },
        //                 {
        //                     "rep_name": "代表3",
        //                     "ability": 34,
        //                     "prod_know": 62,
        //                     "sales": 89,
        //                     "sales_growth": 5,
        //                     "work_activity": 21,
        //
        //                 },
        //                 {
        //                     "rep_name": "代表4",
        //                     "ability": 55,
        //                     "prod_know": 23,
        //                     "sales": 68,
        //                     "sales_growth": 2,
        //                     "work_activity": 74,
        //
        //                 },
        //                 {
        //                     "rep_name": "代表5",
        //                     "ability": 46,
        //                     "prod_know": 55,
        //                     "sales": 62,
        //                     "sales_growth": 6,
        //                     "work_activity": 19,
        //
        //                 }
        //             ],
        //         }
        //     }, ],
        //
        // };
    }
});