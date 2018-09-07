import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let req = this.store.createRecord('request', {
            res: 'user',
        });

        let eqValues = [
            { type: 'eqcond', key: 'email', val: 'a' },
            { type: 'eqcond', key: 'password', val: 'p' },
        ]

        eqValues.forEach((elem, index) => {
            req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                key: elem.key,
                val: elem.val,
            }))
        });

        let conditions = this.store.object2JsonApi('request', req);

        // this.logger.log(conditions);
        return this.store.queryMultipleObject('/api/report/total', 'report-overview', conditions)
        // return {
        //     "id": "54654654231",
        //     "component_data": [{
        //         "key": "which-result",
        //         "values": {
        //             "current": "代表-产品销售报告",
        //             "selected": [
        //                 { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
        //                 { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
        //                 { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
        //                 { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
        //                 { "url": "pharbers.v1.reports.represent-ability", "text": "代表能力" },
        //             ]
        //         }
        //     }, {
        //         "key": "data-show-card",
        //         "values": [{
        //             "index": 1,
        //             "title": "表现最佳",
        //             "type": "info",
        //             "value": "医院1-产品1",
        //             "ext": {
        //                 "sub": {
        //                     "title": "份额",
        //                     "type": "percent",
        //                     "value": 0.12,
        //                     "ext": {
        //                         "type": "percent",
        //                         "change": "up",
        //                         "value": 0.07
        //                     }
        //                 }
        //             },
        //         }, {
        //             "index": 2,
        //             "title": "贡献度最高",
        //             "type": "info",
        //             "value": "医院3-产品3",
        //             "ext": {
        //                 "sub": {
        //                     "type": "title",
        //                     "value": 658432,
        //                     "ext": {
        //                         "type": "percent",
        //                         "change": "none",
        //                         "value": 0.11
        //                     }
        //                 }
        //             },
        //         }, {
        //             "index": 3,
        //             "title": "平均指标达成",
        //             "type": "percent",
        //             "value": 0.6,
        //         }, ]
        //     }, {
        //         "key": "result-table",
        //         "values": {
        //             "columns": [{
        //                     "label": '代表名称',
        //                     "valuePath": 'rep_name',
        //                     "width": '160px',
        //                     "align": 'center',
        //                     "sorted": false,
        //
        //                 }, {
        //                     "label": '产品名称',
        //                     "valuePath": 'brand_name',
        //                     "width": '130px',
        //                     "align": 'center',
        //                     "sorted": false,
        //
        //                 }, {
        //                     "label": '当期销售额',
        //                     "valuePath": 'sales',
        //                     "width": '130px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-thousands'
        //                 }, {
        //                     "label": '销售增长(%)',
        //                     "valuePath": 'sales_growth',
        //                     "width": '130px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-percent'
        //                 }, {
        //                     "label": '指标',
        //                     "valuePath": 'target',
        //                     "width": '140px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-thousands'
        //                 },
        //                 {
        //                     "label": '指标达成率(%)',
        //                     "valuePath": 'achieve_rate',
        //                     "width": '100px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-percent'
        //                 },
        //                 {
        //                     "label": '销售贡献率(%)',
        //                     "valuePath": 'contri_rate',
        //                     "width": '120px',
        //                     "align": 'center',
        //                     "cellComponent": 'table-number-percent'
        //                 }
        //             ],
        //             "columnsValue": [{
        //                     "rep_name": "代表01",
        //                     "brand_name": "测试产品1",
        //                     "sales": 26045,
        //                     "sales_growth": 0.11,
        //                     "target": 11709,
        //                     "achieve_rate": 0.1,
        //                     "contri_rate": 0.1
        //                 },
        //                 {
        //                     "rep_name": "代表02",
        //                     "brand_name": "测试产品2",
        //                     "sales": 48850,
        //                     "sales_growth": 0.22,
        //                     "target": 37416,
        //                     "achieve_rate": 0.2,
        //                     "contri_rate": 0.2
        //                 },
        //                 {
        //                     "rep_name": "代表03",
        //                     "brand_name": "测试产品3",
        //                     "sales": 4032,
        //                     "sales_growth": 0.33,
        //                     "target": 561318,
        //                     "achieve_rate": 0.3,
        //                     "contri_rate": 0.3
        //                 },
        //                 {
        //                     "rep_name": "代表04",
        //                     "brand_name": "测试产品4",
        //                     "sales": 26549,
        //                     "sales_growth": 0.44,
        //                     "target": 26299,
        //                     "achieve_rate": 0.4,
        //                     "contri_rate": 0.4
        //                 },
        //                 {
        //                     "rep_name": "代表05",
        //                     "brand_name": "测试产品5",
        //                     "sales": 26549,
        //                     "sales_growth": 0.44,
        //                     "target": 26299,
        //                     "achieve_rate": 0.4,
        //                     "contri_rate": 0.4
        //                 }
        //             ],
        //         }
        //     }, ],
        //
        // };
    }
});
