import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "medicines": [{
                "id": "drug0001",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "口服抗生素",
                "name": "舒普深",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }, {
                "id": "drug0002",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "口服抗生素",
                "name": "舒普深",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }],
            "notices": [{
                "id": "notice0001",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "医院通知",
                "name": "通知",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }, {
                "id": "notice0002",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "药品通知",
                "name": "通知",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }],
            "hospitals": [{
                    "id": "hospid-1",
                    "overview": {
                        "patients_payment_capacity": "中",
                        "hosp_level": "三级",
                        "surgery_yearly": 10500,
                        "hosp_name": "人民医院",
                        "represents": [{
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "motivation_val": 45,
                            "overall_val": 62,
                            "entry_time": 3,
                            "profe_bg": "医学院校临床专业毕业",
                            "weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
                            "rep_name": "小宋",
                            "advantage": "善于发现客户需求;善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 70,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 70,
                            "service_year": 8
                        }],
                        "academic_influence": "高",
                        "focus_department": "神经内科;骨科;心血管内科",
                        "department": "神经内科;感染疾病科;骨科;消化内科;胸外科;妇产科;普通外科",
                        "hosp_category": "综合",
                        "id": "5b641342aa8de31ed8fb11e3",
                        "academic_acceptance_rate": "高",
                        "drug_intake": "",
                        "init_time": 1920,
                        "client_grade": "",
                        "inpatient_yearly": 30000,
                        "type": "hosp",
                        "patients_distribution_department": "神经内科;骨科;心血管内科",
                        "hosp_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                        "outpatient_yearly": 675000,
                        "beds": 1000,
                        "featured_outpatient": "神经内科"

                    },
                    "medicines": [{
                        "compete_goods": {
                            "value": ""
                        },
                        "history": {
                            "columns": [{
                                    "label": "时间",
                                    "valuePath": "time",
                                    "align": "center",
                                    "sortable": true,
                                    "sorted": true,
                                    "minResizeWidth": '70px',
                                },
                                {
                                    "label": "负责代表",
                                    "valuePath": "rep_name",
                                    "align": "center"
                                },
                                {
                                    "label": "时间分配",
                                    "valuePath": "use_day",
                                    "align": "center"
                                },
                                {
                                    "label": "预算分配",
                                    "valuePath": "use_budget",
                                    "align": "center"
                                },
                                {
                                    "label": "预算比例",
                                    "valuePath": "budget_proportion",
                                    "align": "center"
                                },
                                {
                                    "label": "指标设定",
                                    "valuePath": "target",
                                    "align": "center"
                                },
                                {
                                    "label": "指标增长",
                                    "valuePath": "target_growth",
                                    "align": "center"
                                },
                                {
                                    "label": "指标达成率",
                                    "valuePath": "achieve_rate",
                                    "align": "center"
                                }
                            ],
                            "columnsValue": [{
                                    "use_budget": 25,
                                    "budget_proportion": 0.22,
                                    "rep_name": "小宋",
                                    "target": 23,
                                    "target_growth": 0.24,
                                    "achieve_rate": 0.06,
                                    "time": "周期4",
                                    "use_day": 21
                                },
                                {
                                    "use_budget": 0,
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": 0,
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期3",
                                    "use_day": 0
                                },
                                {
                                    "use_budget": 0,
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": 0,
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期2",
                                    "use_day": 0
                                }
                            ]
                        },
                        "pre_target": 23,
                        "id": "5b435533ed925c05565b5c2c",
                        "overview": [{
                                "key": "药品市场潜力",
                                "value": 4100456
                            },
                            {
                                "key": "增长潜力",
                                "value": 0.05
                            },
                            {
                                "key": "上期销售额",
                                "value": 27280667
                            },
                            {
                                "key": "上期增长",
                                "value": 3410083.375
                            },
                            {
                                "key": "份额",
                                "value": 0.5
                            },
                            {
                                "key": "上期贡献率",
                                "value": 0.333333333
                            }
                        ],
                        "detail": {
                            "columns": [{
                                    "label": "商品名",
                                    "valuePath": "prod_name",
                                    "align": "center",
                                    "sortable": false,
                                    // "sorted": true
                                },
                                {
                                    "label": "类别",
                                    "valuePath": "prod_category",
                                    "align": "center"
                                },
                                {
                                    "label": "治疗领域",
                                    "valuePath": "therapeutic_field",
                                    "align": "center"
                                },
                                {
                                    "label": "上市时间",
                                    "valuePath": "launch_time",
                                    "align": "center"
                                },
                                {
                                    "label": "医保类型",
                                    "valuePath": "insure_type",
                                    "align": "center"
                                },
                                {
                                    "label": "研发类型",
                                    "valuePath": "research_type",
                                    "align": "center"
                                },
                                {
                                    "label": "公司考核价",
                                    "valuePath": "ref_price",
                                    "align": "center"
                                }
                            ],
                            "columnsValue": [{
                                    "ref_price": 56,
                                    "unit_cost": 20,
                                    "prod_features": "降血压效果持久稳定，毒副作用小",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b435533ed925c05565b5c2c",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2015,
                                    "type": "med",
                                    "corp_name": "King‘s Cross",
                                    "prod_category": "降压药",
                                    "prod_name": "卢卡"
                                },
                                {
                                    "ref_price": 50,
                                    "unit_cost": 20,
                                    "prod_features": "上市时间久，临床经验稳定，疗效好",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b6d4d9ceeefcc037639300a",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2003,
                                    "type": "med",
                                    "corp_name": "Euston",
                                    "prod_category": "降压药",
                                    "prod_name": "海德薇"
                                },
                                {
                                    "ref_price": 30,
                                    "unit_cost": 20,
                                    "prod_features": "价格便宜，降压效果还可以",
                                    "research_type": "仿制",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b6d4da0eeefcc037639300b",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2006,
                                    "type": "med",
                                    "corp_name": "Piccadily",
                                    "prod_category": "降压药",
                                    "prod_name": "韦斯莱"
                                }
                            ]
                        },
                        "prod_category": "降压药"
                    }]

                }, {
                    "id": "hospid-2",
                    "overview": {
                        "patients_payment_capacity": "中",
                        "hosp_level": "三级",
                        "surgery_yearly": 10500,
                        "hosp_name": "人民医院",
                        "represents": [{
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "motivation_val": 45,
                            "overall_val": 62,
                            "entry_time": 3,
                            "profe_bg": "医学院校临床专业毕业",
                            "weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
                            "rep_name": "小宋",
                            "advantage": "善于发现客户需求;善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 70,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 70,
                            "service_year": 8
                        }],
                        "academic_influence": "高",
                        "focus_department": "神经内科;骨科;心血管内科",
                        "department": "神经内科;感染疾病科;骨科;消化内科;胸外科;妇产科;普通外科",
                        "hosp_category": "综合",
                        "id": "5b641342aa8de31ed8fb11e3",
                        "academic_acceptance_rate": "高",
                        "drug_intake": "",
                        "init_time": 1920,
                        "client_grade": "",
                        "inpatient_yearly": 30000,
                        "type": "hosp",
                        "patients_distribution_department": "神经内科;骨科;心血管内科",
                        "hosp_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                        "outpatient_yearly": 675000,
                        "beds": 1000,
                        "featured_outpatient": "神经内科"

                    },
                    "medicines": [{
                        "compete_goods": {
                            "value": ""
                        },
                        "history": {
                            "columns": [{
                                    "label": "时间",
                                    "valuePath": "time",
                                    "align": "center",
                                    "sortable": true,
                                    "sorted": true,
                                    "minResizeWidth": '70px',
                                },
                                {
                                    "label": "负责代表",
                                    "valuePath": "rep_name",
                                    "align": "center"
                                },
                                {
                                    "label": "时间分配",
                                    "valuePath": "use_day",
                                    "align": "center"
                                },
                                {
                                    "label": "预算分配",
                                    "valuePath": "use_budget",
                                    "align": "center"
                                },
                                {
                                    "label": "预算比例",
                                    "valuePath": "budget_proportion",
                                    "align": "center"
                                },
                                {
                                    "label": "指标设定",
                                    "valuePath": "target",
                                    "align": "center"
                                },
                                {
                                    "label": "指标增长",
                                    "valuePath": "target_growth",
                                    "align": "center"
                                },
                                {
                                    "label": "指标达成率",
                                    "valuePath": "achieve_rate",
                                    "align": "center"
                                }
                            ],
                            "columnsValue": [{
                                    "use_budget": 25,
                                    "budget_proportion": 0.22,
                                    "rep_name": "小宋",
                                    "target": 23,
                                    "target_growth": 0.24,
                                    "achieve_rate": 0.06,
                                    "time": "周期4",
                                    "use_day": 21
                                },
                                {
                                    "use_budget": 0,
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": 0,
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期3",
                                    "use_day": 0
                                },
                                {
                                    "use_budget": 0,
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": 0,
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期2",
                                    "use_day": 0
                                }
                            ]
                        },
                        "pre_target": 23,
                        "id": "5b435533ed925c05565b5c2c",
                        "overview": [{
                                "key": "药品市场潜力",
                                "value": 4100456
                            },
                            {
                                "key": "增长潜力",
                                "value": 0.05
                            },
                            {
                                "key": "上期销售额",
                                "value": 27280667
                            },
                            {
                                "key": "上期增长",
                                "value": 3410083.375
                            },
                            {
                                "key": "份额",
                                "value": 0.5
                            },
                            {
                                "key": "上期贡献率",
                                "value": 0.333333333
                            }
                        ],
                        "detail": {
                            "columns": [{
                                    "label": "商品名",
                                    "valuePath": "prod_name",
                                    "align": "center",
                                    "sortable": false,
                                    // "sorted": true
                                },
                                {
                                    "label": "类别",
                                    "valuePath": "prod_category",
                                    "align": "center"
                                },
                                {
                                    "label": "治疗领域",
                                    "valuePath": "therapeutic_field",
                                    "align": "center"
                                },
                                {
                                    "label": "上市时间",
                                    "valuePath": "launch_time",
                                    "align": "center"
                                },
                                {
                                    "label": "医保类型",
                                    "valuePath": "insure_type",
                                    "align": "center"
                                },
                                {
                                    "label": "研发类型",
                                    "valuePath": "research_type",
                                    "align": "center"
                                },
                                {
                                    "label": "公司考核价",
                                    "valuePath": "ref_price",
                                    "align": "center"
                                }
                            ],
                            "columnsValue": [{
                                    "ref_price": 56,
                                    "unit_cost": 20,
                                    "prod_features": "降血压效果持久稳定，毒副作用小",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b435533ed925c05565b5c2c",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2015,
                                    "type": "med",
                                    "corp_name": "King‘s Cross",
                                    "prod_category": "降压药",
                                    "prod_name": "卢卡"
                                },
                                {
                                    "ref_price": 50,
                                    "unit_cost": 20,
                                    "prod_features": "上市时间久，临床经验稳定，疗效好",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b6d4d9ceeefcc037639300a",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2003,
                                    "type": "med",
                                    "corp_name": "Euston",
                                    "prod_category": "降压药",
                                    "prod_name": "海德薇"
                                },
                                {
                                    "ref_price": 30,
                                    "unit_cost": 20,
                                    "prod_features": "价格便宜，降压效果还可以",
                                    "research_type": "仿制",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "therapeutic_field": "心血管",
                                    "id": "5b6d4da0eeefcc037639300b",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2006,
                                    "type": "med",
                                    "corp_name": "Piccadily",
                                    "prod_category": "降压药",
                                    "prod_name": "韦斯莱"
                                }
                            ]
                        },
                        "prod_category": "降压药"
                    }]

                }

            ]
        }
        // return
    }
});
