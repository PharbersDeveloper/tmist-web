import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    setupController(controller, model) {
        this._super(controller, model);
        controller.queryTotal(model.uuid)
    },

    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "整体销售表现",
                    "selected": [
                        { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
                        { "url": "pharbers.v1.reports.represent-product", "text": "代表-产品销售报告" },
                        { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
                        { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
                        { "url": "pharbers.v1.reports.represent-ability", "text": "代表能力" },
                    ]
                }
            }, {
                "key": "data-show-card",
                "values": [{
                    "index": 1,
                    "title": "总销售额",
                    "type": "sales",
                    "value": 6039535
                }, {
                    "index": 2,
                    "title": "整体销售增长",
                    "type": "percent",
                    "value": 12,
                    "ext": {
                        "change": "up"
                    }
                }, {
                    "index": 3,
                    "title": "平均指标达成",
                    "type": "percent",
                    "value": 0.6,
                    // "ext": {
                    //     "change": "up"
                    // }
                }, ]
            }, {
                "key": "result-table",
                "values": {
                    "columns": [{
                            "label": '产品名称',
                            "valuePath": 'brand_name',
                            "width": '100px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '市场销售额',
                            "valuePath": 'potential',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '市场增长(%)',
                            "valuePath": 'market_growth',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'

                        }, {
                            "label": '当期销售额',
                            "valuePath": 'sales',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '销售增长(%)',
                            "valuePath": 'sales_growth',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": 'EV值(%)',
                            "valuePath": 'ev_value',
                            "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额(%)',
                            "valuePath": 'share',
                            "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额增长(%)',
                            "valuePath": 'share_change',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '指标',
                            "valuePath": 'target',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },
                        {
                            "label": '指标达成率(%)',
                            "valuePath": 'achieve_rate',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }
                    ],
                    "columnsValue": [{
                            "brand_name": "测试产品1",
                            "potential": 30178,
                            "market_growth": 0.1,
                            "sales": 26045,
                            "sales_growth": 0.11,
                            "ev_value": 0.1,
                            "share": 0.11,
                            "share_change": 0.1,
                            "target": 11709,
                            "achieve_rate": 0.1,
                            "contri_rate": 0.1
                        },
                        {
                            "brand_name": "测试产品2",
                            "potential": 17803,
                            "market_growth": 0.2,
                            "sales": 48850,
                            "sales_growth": 0.22,
                            "ev_value": 0.2,
                            "share": 0.22,
                            "share_change": 0.2,
                            "target": 37416,
                            "achieve_rate": 0.2,
                            "contri_rate": 0.2
                        },
                        {
                            "brand_name": "测试产品3",
                            "potential": 16415,
                            "market_growth": 0.3,
                            "sales": 4032,
                            "sales_growth": 0.33,
                            "ev_value": 0.3,
                            "share": 0.33,
                            "share_change": 0.3,
                            "target": 561318,
                            "achieve_rate": 0.3,
                            "contri_rate": 0.3
                        },
                        {
                            "brand_name": "测试产品4",
                            "potential": 42369,
                            "market_growth": 0.4,
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "ev_value": 0.4,
                            "share": 0.44,
                            "share_change": 0.4,
                            "target": 26299,
                            "achieve_rate": 0.4,
                            "contri_rate": 0.4
                        },
                        {
                            "brand_name": "测试产品5",
                            "potential": 423695,
                            "market_growth": 0.45,
                            "sales": 265495,
                            "sales_growth": 0.445,
                            "ev_value": 0.45,
                            "share": 0.445,
                            "share_change": 0.54,
                            "target": 262959,
                            "achieve_rate": 0.45,
                            "contri_rate": 0.45
                        },
                        {
                            "brand_name": "测试产品6",
                            "potential": 423696,
                            "market_growth": 0.46,
                            "sales": 265469,
                            "sales_growth": 0.464,
                            "ev_value": 0.64,
                            "share": 0.464,
                            "share_change": 0.46,
                            "target": 262969,
                            "achieve_rate": 0.46,
                            "contri_rate": 0.64
                        }
                    ],
                }
            }, ],

        };
    }
});