import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "54654654231",
            "component_data": [{
                "key": "which-result",
                "values": {
                    "current": "代表能力",
                    "selected": [
                        { "url": "pharbers.v1.reports.index", "text": "整体销售表现" },
                        { "url": "pharbers.v1.reports.hosp-product", "text": "医院-产品销售报告" },
                        { "url": "pharbers.v1.reports.represent-product", "text": "代表-产品销售报告" },
                        { "url": "pharbers.v1.reports.resource", "text": "资源投入与产出" },
                        { "url": "pharbers.v1.reports.represent-target", "text": "代表指标与资源" },
                    ]
                }
            }, {
                "key": "data-show-card",
                "values": [{
                    "index": 1,
                    "title": "综合能力最强",
                    "type": "info",
                    "value": "代表3",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "指标",
                            "ext": {
                                "type": "sales",
                                "change": "none",
                                "value": 2547835
                            }
                        }
                    },
                }, {
                    "index": 2,
                    "title": "成长最快",
                    "type": "info",
                    "value": "代表5",
                    "ext": {
                        "sub": {
                            "type": "title",
                            "value": "预算占比",
                            "ext": {
                                "type": "percent",
                                "change": "none",
                                "value": 0.09
                            }
                        }
                    },
                }, ]
            }, {
                "key": "result-table",
                "values": {
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'rep_name',
                            "width": '180px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '总能力值',
                            "valuePath": 'ability',
                            "width": '200px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '产品知识',
                            "valuePath": 'prod_know',
                            "width": '200px',
                            "align": 'center',
                        }, {
                            "label": '销售技巧',
                            "valuePath": 'sales',
                            "width": '150px',
                            "align": 'center',
                        }, {
                            "label": '增长',
                            "valuePath": 'sales_growth',
                            "width": '150px',
                            "align": 'center',
                        }, {
                            "label": '工作积极性',
                            "valuePath": 'work_activity',
                            "width": '180px',
                            "align": 'center',
                        },
                        //  {
                        //     "label": '份额(%)',
                        //     "valuePath": 'share',
                        //     "width": '80px',
                        //     "align": 'center',
                        //     "cellComponent": 'table-number-percent'
                        // }, {
                        //     "label": '份额增长(%)',
                        //     "valuePath": 'share_change',
                        //     "width": '100px',
                        //     "align": 'center',
                        //     "cellComponent": 'table-number-percent'
                        // }, {
                        //     "label": '指标',
                        //     "valuePath": 'target',
                        //     "width": '100px',
                        //     "align": 'center',
                        //     "cellComponent": 'table-number-thousands'
                        // },
                        // {
                        //     "label": '指标达成率(%)',
                        //     "valuePath": 'achieve_rate',
                        //     "width": '100px',
                        //     "align": 'center',
                        //     "cellComponent": 'table-number-percent'
                        // },
                        // {
                        //     "label": '销售贡献率(%)',
                        //     "valuePath": 'contri_rate',
                        //     "width": '100px',
                        //     "align": 'center',
                        //     "cellComponent": 'table-number-percent'
                        // }
                    ],
                    "columnsValue": [{
                            "rep_name": "代表1",
                            "ability": 45,
                            "prod_know": 65,
                            "sales": 56,
                            "sales_growth": 4,
                            "work_activity": 88,
                            // "share": 0.11,
                            // "share_change": 0.1,
                            // "target": 11709,
                            // "achieve_rate": 0.1,
                            // "contri_rate": 0.1
                        },
                        {
                            "rep_name": "代表2",
                            "ability": 65,
                            "prod_know": 35,
                            "sales": 87,
                            "sales_growth": 5,
                            "work_activity": 45,
                            // "share": 0.22,
                            // "share_change": 0.2,
                            // "target": 37416,
                            // "achieve_rate": 0.2,
                            // "contri_rate": 0.2
                        },
                        {
                            "rep_name": "代表3",
                            "ability": 34,
                            "prod_know": 62,
                            "sales": 89,
                            "sales_growth": 5,
                            "work_activity": 21,
                            // "share": 0.33,
                            // "share_change": 0.3,
                            // "target": 561318,
                            // "achieve_rate": 0.3,
                            // "contri_rate": 0.3
                        },
                        {
                            "rep_name": "代表4",
                            "ability": 55,
                            "prod_know": 23,
                            "sales": 68,
                            "sales_growth": 2,
                            "work_activity": 74,
                            // "share": 0.44,
                            // "share_change": 0.4,
                            // "target": 26299,
                            // "achieve_rate": 0.4,
                            // "contri_rate": 0.4
                        },
                        {
                            "rep_name": "代表5",
                            "ability": 46,
                            "prod_know": 55,
                            "sales": 62,
                            "sales_growth": 6,
                            "work_activity": 19,
                            // "share": 0.44,
                            // "share_change": 0.4,
                            // "target": 26299,
                            // "achieve_rate": 0.4,
                            // "contri_rate": 0.4
                        }
                    ],
                }
            }, ],

        };
    }
});