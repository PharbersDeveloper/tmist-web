import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "代表指标与资源",
                    "selected": [
                        { "url": "pharbers.v1.reports.index", "text": "整体销售报告" },
                        { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
                        { "url": "pharbers.v1.reports.represent-product", "text": "代表-产品销售报告" },
                        { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
                        { "url": "pharbers.v1.reports.represent-ability", "text": "代表能力" },
                    ]
                }
            }, {
                "key": "data-show-card",
                "values": [{
                    "index": 1,
                    "title": "指标最重",
                    "type": "info",
                    "value": "代表1",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "指标",
                            "ext": {
                                "type": "sales",
                                "change": "none",
                                "value": 5156544
                            }
                        }
                    },
                }, {
                    "index": 2,
                    "title": "资源最多",
                    "type": "info",
                    "value": "代表3",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "预算占比",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.15
                            }
                        }
                    },
                }, {
                    "index": 3,
                    "title": "达成率最高",
                    "type": "info",
                    "value": "代表2",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "达成率",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.27
                            }
                        }
                    },
                }, {
                    "index": 4,
                    "title": "贡献度最高",
                    "type": "info",
                    "value": "代表5",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "贡献度",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.07
                            }
                        }
                    },
                }, ]
            }, {
                "key": "result-table",
                "values": {
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'brand_name',
                            "width": '180px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '负责指标',
                            "valuePath": 'potential',
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '当期销售额',
                            "valuePath": 'sales',
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },
                        {
                            "label": '指标达成率(%)',
                            "valuePath": 'achieve_rate',
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '预算比例(%)',
                            "valuePath": 'budget_rate',
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },

                        {
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '工作天数',
                            "valuePath": 'workdays',
                            "width": '120px',
                            "align": 'center',
                        }, {
                            "label": '奖金',
                            "valuePath": 'target',
                            "width": '180px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },

                    ],
                    "columnsValue": [{
                            "brand_name": "代表1",
                            "potential": 30178,
                            "sales": 26045,
                            "achieve_rate": 0.1,
                            "budget_rate": 0.23,
                            "contri_rate": 0.1,
                            "workdays": 21,

                            "target": 11709,

                        },
                        {
                            "brand_name": "代表2",
                            "potential": 17803,
                            "sales": 48850,
                            "achieve_rate": 0.2,
                            "budget_rate": 0.53,

                            "contri_rate": 0.2,
                            "workdays": 21,

                            "target": 37416,

                        },
                        {
                            "brand_name": "代表3",
                            "potential": 16415,
                            "sales": 4032,
                            "achieve_rate": 0.3,
                            "budget_rate": 0.13,

                            "contri_rate": 0.3,
                            "workdays": 21,

                            "target": 561318,

                        },
                        {
                            "brand_name": "代表4",
                            "potential": 42369,
                            "sales": 26549,
                            "achieve_rate": 0.4,
                            "budget_rate": 0.29,

                            "contri_rate": 0.4,
                            "workdays": 21,

                            "target": 26299,

                        },
                        {
                            "brand_name": "代表4",
                            "potential": 34563,
                            "sales": 236572,
                            "achieve_rate": 0.6,
                            "budget_rate": 0.2,

                            "contri_rate": 0.7,
                            "workdays": 21,

                            "target": 56621,

                        }
                    ],
                }
            }, ],

        };
    }
});