import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "资源投入与产出",
                    "selected": [
                        { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
                        { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
                        { "url": "pharbers.v1.reports.represent-product", "text": "代表-产品销售报告" },
                        { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
                        { "url": "pharbers.v1.reports.represent-ability", "text": "代表能力" },
                    ]
                }
            }, {
                "key": "data-show-card",
                "values": [{
                    "index": 1,
                    "title": "预算投入最多",
                    "type": "info",
                    "value": "医院3-产品3",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "预算占比",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.41
                            }
                        }
                    },
                }, {
                    "index": 2,
                    "title": "时间投入最多",
                    "type": "info",
                    "value": "医院1-产品3",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "小宋",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.26
                            }
                        }
                    },
                }, {
                    "index": 3,
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
                    "index": 4,
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
                }, ]
            }, {
                "key": "result-table",
                "values": {
                    "columns": [{
                            "label": '医院名称',
                            "valuePath": 'hosp_name',
                            "width": '100px',
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
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }
                    ],
                    "columnsValue": [{
                            "hosp_name": "医院001",
                            "brand_name": "测试产品1",
                            "potential": 30178,
                            "market_growth": 0.1,
                            "sales": 26045,
                            "sales_growth": 0.11,
                            "ev_value": 0.1,
                            "share": 0.11,
                            "share_change": 0.1,
                            "target": 11709,
                            "contri_rate": 0.1
                        },
                        {
                            "hosp_name": "医院002",

                            "brand_name": "测试产品2",
                            "potential": 17803,
                            "market_growth": 0.2,
                            "sales": 48850,
                            "sales_growth": 0.22,
                            "ev_value": 0.2,
                            "share": 0.22,
                            "share_change": 0.2,
                            "target": 37416,
                            "contri_rate": 0.2
                        },
                        {
                            "hosp_name": "医院003",

                            "brand_name": "测试产品3",
                            "potential": 16415,
                            "market_growth": 0.3,
                            "sales": 4032,
                            "sales_growth": 0.33,
                            "ev_value": 0.3,
                            "share": 0.33,
                            "share_change": 0.3,
                            "target": 561318,
                            "contri_rate": 0.3
                        },
                        {
                            "hosp_name": "医院004",

                            "brand_name": "测试产品4",
                            "potential": 42369,
                            "market_growth": 0.4,
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "ev_value": 0.4,
                            "share": 0.44,
                            "share_change": 0.4,
                            "target": 26299,
                            "contri_rate": 0.4
                        }
                    ],
                }
            }, ],

        };
    }
});