import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "医院-产品销售报告",
                    "selected": [
                        { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
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
                        "title": "表现最差",
                        "type": "info",
                        "value": "医院2-产品1",
                        "ext": {
                            "sub": {
                                "title": "份额",
                                "type": "percent",
                                "value": 0.25,
                                "ext": {
                                    "type": "percent",
                                    "change": "down",
                                    "value": 0.1
                                }
                            }
                        },
                    }, {
                        "index": 3,
                        "title": "销售增长最快",
                        "type": "info",
                        "value": "医院2-产品3",
                        "ext": {
                            "sub": {
                                "type": "title",
                                "value": 658432,
                                "ext": {
                                    "type": "percent",
                                    "change": "up",
                                    "value": 0.14
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
                    }, {
                        "index": 5,
                        "title": "平均指标达成",
                        "type": "percent",
                        "value": 0.6,
                    },
                    // {
                    //     "index": 5,
                    //     "title": 'baifeibi',
                    //     "type": 'info',
                    //     "value": "hosp-pord",
                    //     "ext": {
                    //         "sub": {
                    //             "title": '份额',
                    //             "type": 'sales', // percent
                    //             "value": 6525423, // 12
                    //             "ext": {
                    //                 "type": 'percent',
                    //                 "change": "none", // down,stable,none
                    //                 "value": 7,
                    //             }
                    //         }
                    //     },
                    // }
                ]
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
                            "label": '市场潜力',
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
                    ],
                    "columnsValue": [{
                            "hosp_name": "医院01",
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
                        },
                        {
                            "hosp_name": "医院02",
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
                        },
                        {
                            "hosp_name": "医院03",
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
                        },
                        {
                            "hosp_name": "医院04",
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
                        },
                        {
                            "hosp_name": "医院05",
                            "brand_name": "测试产品4",
                            "potential": 42369,
                            "market_growth": 0.54,
                            "sales": 265459,
                            "sales_growth": 0.45,
                            "ev_value": 0.4,
                            "share": 0.454,
                            "share_change": 0.54,
                            "target": 262959,
                            "achieve_rate": 0.54,
                        },
                        {
                            "hosp_name": "医院06",
                            "brand_name": "测试产品4",
                            "potential": 42369,
                            "market_growth": 0.64,
                            "sales": 265649,
                            "sales_growth": 0.64,
                            "ev_value": 0.64,
                            "share": 0.464,
                            "share_change": 0.64,
                            "target": 266299,
                            "achieve_rate": 0.64,
                        },
                        {
                            "hosp_name": "医院07",
                            "brand_name": "测试产品4",
                            "potential": 423679,
                            "market_growth": 0.47,
                            "sales": 265479,
                            "sales_growth": 0.47,
                            "ev_value": 0.47,
                            "share": 0.74,
                            "share_change": 0.74,
                            "target": 262799,
                            "achieve_rate": 0.477,
                        }
                    ],
                }
            }, ],
        };
    }
});