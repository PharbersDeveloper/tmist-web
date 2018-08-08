import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "代表-产品销售报告",
                    "selected": [
                        { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
                        { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
                        { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
                        { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
                        { "url": "pharbers.v1.reports.represent-ability", "text": "代表能力" },
                    ]
                }
            }, {
                "key": "data-show-card",
                "values": [{
                    "index": 1,
                    "title": "表现最佳",
                    "type": "info",
                    "value": "医院1-产品1",
                    "ext": {
                        "sub": {
                            "title": "份额",
                            "type": "percent",
                            "value": 0.12,
                            "ext": {
                                "type": "percent",
                                "change": "up",
                                "value": 0.07
                            }
                        }
                    },
                }, {
                    "index": 2,
                    "title": "贡献度最高",
                    "type": "info",
                    "value": "医院3-产品3",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": 658432,
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.11
                            }
                        }
                    },
                }, {
                    "index": 3,
                    "title": "平均指标达成",
                    "type": "percent",
                    "value": 0.6,
                }, ]
            }, {
                "key": "result-table",
                "values": {
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'rep_name',
                            "width": '120px',
                            "align": 'center',
                            "sorted": false,

                        }, {
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
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }
                    ],
                    "columnsValue": [{
                            "rep_name": "代表01",
                            "brand_name": "测试产品1",
                            "potential": 30178,
                            "market_growth": 0.1,
                            "sales": 26045,
                            "sales_growth": 0.11,
                            "ev_value": 0.1,
                            "target": 11709,
                            "achieve_rate": 0.1,
                            "contri_rate": 0.1
                        },
                        {
                            "rep_name": "代表02",

                            "brand_name": "测试产品2",
                            "potential": 17803,
                            "market_growth": 0.2,
                            "sales": 48850,
                            "sales_growth": 0.22,
                            "ev_value": 0.2,
                            "target": 37416,
                            "achieve_rate": 0.2,
                            "contri_rate": 0.2
                        },
                        {
                            "rep_name": "代表03",

                            "brand_name": "测试产品3",
                            "potential": 16415,
                            "market_growth": 0.3,
                            "sales": 4032,
                            "sales_growth": 0.33,
                            "ev_value": 0.3,
                            "target": 561318,
                            "achieve_rate": 0.3,
                            "contri_rate": 0.3
                        },
                        {
                            "rep_name": "代表04",

                            "brand_name": "测试产品4",
                            "potential": 42369,
                            "market_growth": 0.4,
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "ev_value": 0.4,
                            "target": 26299,
                            "achieve_rate": 0.4,
                            "contri_rate": 0.4
                        },
                        {
                            "rep_name": "代表05",

                            "brand_name": "测试产品5",
                            "potential": 42369,
                            "market_growth": 0.4,
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "ev_value": 0.4,
                            "target": 26299,
                            "achieve_rate": 0.4,
                            "contri_rate": 0.4
                        }
                    ],
                }
            }, ],

        };
    }
});