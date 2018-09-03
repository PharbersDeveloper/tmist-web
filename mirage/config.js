export default function() {

    this.post('/login', (schema, request) => {
        return {
            "data": {
                "type": "auth",
                "id": "5b7e454a8fb8076c3c3304l0",
                "attributes": {
                    "token": "This is proposal first.It's for test."
                },
            },
        }
    });

    this.post('/api/proposal/lst', (schema, request) => {
        window.console.warn(request.requestBody);
        return {
            "data": [{
                "attributes": {
                    "name": "关卡一",
                    "desc": "This is proposal first.",
                    "scenario_id": "dddd"

                },
                "id": "5b7e454a8fb8076c3c3304p0",
                "type": "proposal"
            }, {
                "attributes": {
                    "name": "关卡二",
                    "desc": "This is second proposal",
                    "scenario_id": "cccc"

                },
                "id": "5b7e454a8fb8076c3c3304p1",
                "type": "proposal"
            }, ]
        }
    });

    this.post('/api/hospitalinfo', (schema, request) => {
        return {
            "data": [{
                "type": "hospitalbaseinfo",
                "id": "hospitalbaseinfo01",
                "attributes": {
                    "patients_payment_capacity": "中",
                    "hosp_level": "三级",
                    "surgery_yearly": 10500,
                    "hosp_name": "英雄医院",
                    "academic_influence": "高",
                    "focus_department": "神经内科;骨科;心血管内科",
                    "department": "神经内科;感染疾病科;骨科;消化内科;胸外科;妇产科;普通外科",
                    "hosp_category": "综合",
                    "academic_acceptance_rate": "高",
                    "drug_intake": "",
                    "init_time": 1920,
                    "client_grade": "",
                    "inpatient_yearly": 30000,
                    "patients_distribution_department": "神经内科;骨科;心血管内科",
                    "hosp_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                    "outpatient_yearly": 675000,
                    "beds": 1000,
                    "featured_outpatient": "神经内科",
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "medicines": {
                        "data": [{
                            "type": "hospmedicinfo",
                            "id": "medicinesinfo01",
                        }, ]
                    },
                }
            }, {
                "type": "hospitalbaseinfo",
                "id": "hospitalbaseinfo02",
                "attributes": {
                    "patients_payment_capacity": "中",
                    "hosp_level": "三级",
                    "surgery_yearly": 10500,
                    "hosp_name": "人民医院",
                    "academic_influence": "高",
                    "focus_department": "神经内科;骨科;心血管内科",
                    "department": "神经内科;感染疾病科;骨科;消化内科;胸外科;妇产科;普通外科",
                    "hosp_category": "综合",
                    "academic_acceptance_rate": "高",
                    "drug_intake": "",
                    "init_time": 1920,
                    "client_grade": "",
                    "inpatient_yearly": 30000,
                    "patients_distribution_department": "神经内科;骨科;心血管内科",
                    "hosp_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                    "outpatient_yearly": 675000,
                    "beds": 1000,
                    "featured_outpatient": "神经内科",
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "medicines": {
                        "data": [{
                            "type": "hospmedicinfo",
                            "id": "medicinesinfo11",
                        }, ]
                    },
                }
            }],
            "included": [{
                    "type": "hospmedicinfo",
                    "id": "medicinesinfo11",
                    "attributes": {
                        "history": {
                            "columns": [{
                                    "label": "时间",
                                    "valuePath": "time",
                                    "align": "center",
                                    "sortable": false,
                                    "sorted": true,
                                    "minResizeWidth": '70px',
                                },
                                {
                                    "label": "负责代表",
                                    "valuePath": "rep_name",
                                    "align": "left",
                                    "sortable": false,
                                },
                                {
                                    "label": "时间分配(天)",
                                    "valuePath": "use_day",
                                    "align": "left",
                                    "sortable": false,
                                },
                                {
                                    "label": "预算(元)/比例",
                                    "valuePath": "use_budget",
                                    "align": "left",
                                    "sortable": false,
                                },

                                {
                                    "label": "指标/增长/达成率",
                                    "valuePath": "target",
                                    "align": "left",
                                    "sortable": false,
                                },

                            ],
                            "columnsValue": [{
                                    "use_budget": "25天/0.22",
                                    "rep_name": "小宋",
                                    "target": "23 / 0.24 / 0.06",
                                    "time": "周期4",
                                    "use_day": 21
                                },
                                {
                                    "use_budget": "0 / 0",
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": "0 / 0 / 0",
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期3",
                                    "use_day": 0
                                },
                                {
                                    "use_budget": "0 / 0",
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": "0 / 0 / 0",
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期2",
                                    "use_day": 0
                                }
                            ]
                        },
                        "pre_target": 23,
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
                                    "id": "5b435533ed925c05565b5c2c",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2015,
                                    "type": "med",
                                    "corp_name": "King‘s Cross",
                                    "prod_name": "卢卡"
                                },
                                {
                                    "ref_price": 50,
                                    "unit_cost": 20,
                                    "prod_features": "上市时间久，临床经验稳定，疗效好",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "id": "5b6d4d9ceeefcc037639300a",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2003,
                                    "type": "med",
                                    "corp_name": "Euston",
                                    "prod_name": "海德薇"
                                },
                                {
                                    "ref_price": 30,
                                    "unit_cost": 20,
                                    "prod_features": "价格便宜，降压效果还可以",
                                    "research_type": "仿制",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "id": "5b6d4da0eeefcc037639300b",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2006,
                                    "type": "med",
                                    "corp_name": "Piccadily",
                                    "prod_name": "韦斯莱"
                                }
                            ]
                        },
                        "prod_category": "降压药"

                    }
                },
                {
                    "type": "hospmedicinfo",
                    "id": "medicinesinfo01",
                    "attributes": {
                        "history": {
                            "columns": [{
                                    "label": "时间",
                                    "valuePath": "time",
                                    "align": "center",
                                    "sortable": false,
                                    "sorted": true,
                                    "minResizeWidth": '70px',
                                },
                                {
                                    "label": "负责代表",
                                    "valuePath": "rep_name",
                                    "align": "left",
                                    "sortable": false,
                                },
                                {
                                    "label": "时间分配(天)",
                                    "valuePath": "use_day",
                                    "align": "left",
                                    "sortable": false,
                                },
                                {
                                    "label": "预算(元)/比例",
                                    "valuePath": "use_budget",
                                    "align": "left",
                                    "sortable": false,
                                },

                                {
                                    "label": "指标/增长/达成率",
                                    "valuePath": "target",
                                    "align": "left",
                                    "sortable": false,
                                },

                            ],
                            "columnsValue": [{
                                    "use_budget": "25天/0.22",
                                    "rep_name": "小宋",
                                    "target": "23 / 0.24 / 0.06",
                                    "time": "周期4",
                                    "use_day": 21
                                },
                                {
                                    "use_budget": "0 / 0",
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": "0 / 0 / 0",
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期3",
                                    "use_day": 0
                                },
                                {
                                    "use_budget": "0 / 0",
                                    "budget_proportion": 0,
                                    "rep_name": "小宋",
                                    "target": "0 / 0 / 0",
                                    "target_growth": 0,
                                    "achieve_rate": 0,
                                    "time": "周期2",
                                    "use_day": 0
                                }
                            ]
                        },
                        "pre_target": 23,
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
                                    "id": "5b435533ed925c05565b5c2c",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2015,
                                    "type": "med",
                                    "corp_name": "King‘s Cross",
                                    "prod_name": "卢卡"
                                },
                                {
                                    "ref_price": 50,
                                    "unit_cost": 20,
                                    "prod_features": "上市时间久，临床经验稳定，疗效好",
                                    "research_type": "原研",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "id": "5b6d4d9ceeefcc037639300a",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2003,
                                    "type": "med",
                                    "corp_name": "Euston",
                                    "prod_name": "海德薇"
                                },
                                {
                                    "ref_price": 30,
                                    "unit_cost": 20,
                                    "prod_features": "价格便宜，降压效果还可以",
                                    "research_type": "仿制",
                                    "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                    "id": "5b6d4da0eeefcc037639300b",
                                    "insure_type": "非医保药",
                                    "target_department": "心血管内科",
                                    "launch_time": 2006,
                                    "type": "med",
                                    "corp_name": "Piccadily",
                                    "prod_name": "韦斯莱"
                                }
                            ]
                        },
                        "prod_category": "降压药"
                    }
                },


            ]
        }
    })

    this.post('/api/repsbudgets', (schema, request) => {

        return {
            "data": {
                "type": "repsbudgets",
                "id": "repsbudgets001",
                "attributes": {
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "represents": {
                        "data": [{
                                "type": "representsinfo",
                                "id": "repone",
                            },
                            {
                                "type": "representsinfo",
                                "id": "reptwo",
                            },
                        ]
                    },
                    "budgets": {
                        "data": [{
                                "type": "budgetinfo",
                                "id": "budgetone"
                            },
                            {
                                "type": "budgetinfo",
                                "id": "budgettwo"
                            },
                        ]
                    }
                }
            },
            "included": [{
                "type": "representsinfo",
                "id": "repone",
                "attributes": {
                    "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
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
                }
            }, {
                "type": "representsinfo",
                "id": "reptwo",
                "attributes": {
                    "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
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
                }
            }, {
                "type": "budgetinfo",
                "id": "budgetone",
                "attributes": {
                    "used": 66,
                    "name": "小宋",
                    "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "total": 30,
                }
            }, {
                "type": "budgetinfo",
                "id": "budgettwo",
                "attributes": {
                    "used": 66,
                    "name": "小宋",
                    "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "total": 30,
                }
            }, ]

        }
    })

    this.post('/api/medicsnotices', (schema, request) => {
        return {
            "data": {
                "type": "medicsnotices",
                "id": "medicesandnotices",
                "attributes": {
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "medicines": {
                        "data": [{
                            "type": "medicineinfos",
                            "id": "medicineinfos1",
                        }, {
                            "type": "medicineinfos",
                            "id": "medicineinfos2",
                        }]
                    },
                    "notices": {
                        "data": [{
                            "type": "notices",
                            "id": "notices1"
                        }, {
                            "type": "notices",
                            "id": "notices2"
                        }]
                    },
                }
            },
            "included": [{
                "type": "medicineinfos",
                "id": "medicineinfos1",
                "attributes": {
                    "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                    "class": "口服抗生素",
                    "name": "舒普深",
                    "missionValue": 48903384,
                    "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                    "heal": ['治疗院内感染'],
                    "department": ['呼吸', '急诊', 'ICU'],
                    "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
                }
            }, {
                "type": "medicineinfos",
                "id": "medicineinfos2",
                "attributes": {
                    "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                    "class": "阿莫西林",
                    "name": "阿莫西林",
                    "missionValue": 48903384,
                    "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                    "heal": ['治疗院内感染'],
                    "department": ['呼吸', '急诊', 'ICU'],
                    "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
                }
            }, {
                "type": "notices",
                "id": "notices1",
                "attributes": {
                    "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                    "class": "医院通知",
                    "name": "通知",
                    "missionValue": 48903384,
                    "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                    "heal": ['治疗院内感染'],
                    "department": ['呼吸', '急诊', 'ICU'],
                    "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
                }
            }, {
                "type": "notices",
                "id": "notices2",
                "attributes": {
                    "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                    "class": "医院通知",
                    "name": "通知",
                    "missionValue": 48903384,
                    "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                    "heal": ['治疗院内感染'],
                    "department": ['呼吸', '急诊', 'ICU'],
                    "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
                }
            }, ]
        }
    });

    this.post('/api/decision', (schema, request) => {
        window.console.info(request.requestBody);
        return {
            "data": [{
                "type": "alldecision",
                "id": "tmp_12351c38-5cfb-4175-916d-7acd180b3b0d",
                "attributes": {
                    "test": "tehdfsadfald",
                    "component_name": "hospital-decision",
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "hospitallist": {
                        "data": [{
                            "type": "hospitallist",
                            "id": "thisishospitallist1",
                        }, {
                            "type": "hospitallist",
                            "id": "thisishospitallist2",
                        }]
                    },
                    "medics-notices": {
                        "data": {
                            "type": "medicnotices",
                            "id": "thisisvertical-tabs-medicines-and-notices"
                        }
                    },
                    "rep-budget": {
                        "data": {
                            "type": "repbudget",
                            "id": "thisisvertical-right-reps-budget"
                        }
                    }
                }
            }, {
                "type": "alldecision",
                "id": "tmp_2892571b-30be-46f0-b47b-db753ed38c50",
                "attributes": {
                    "test": "aaaaaaaaaaa",
                    "component_name": "manager-decision",
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "hospitallist": {
                        "data": [{
                            "type": "hospitallist",
                            "id": "thisishospitallist1",
                        }, {
                            "type": "hospitallist",
                            "id": "thisishospitallist2",
                        }]
                    },
                    "medics-notices": {
                        "data": {
                            "type": "medicnotices",
                            "id": "thisisvertical-tabs-medicines-and-notices"
                        }
                    },
                    "rep-budget": {
                        "data": {
                            "type": "repbudget",
                            "id": "thisisvertical-right-reps-budget"
                        }
                    }
                }
            }],
            "included": [{
                    "type": "hospitallist",
                    "id": "thisishospitallist1",
                    "attributes": {
                        "overview": {
                            "patients_payment_capacity": "中",
                            "hosp_level": "三级",
                            "surgery_yearly": 10500,
                            "hosp_name": "英雄医院",
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
                            "history": {
                                "columns": [{
                                        "label": "时间",
                                        "valuePath": "time",
                                        "align": "center",
                                        "sortable": false,
                                        "sorted": true,
                                        "minResizeWidth": '70px',
                                    },
                                    {
                                        "label": "负责代表",
                                        "valuePath": "rep_name",
                                        "align": "left",
                                        "sortable": false,
                                    },
                                    {
                                        "label": "时间分配(天)",
                                        "valuePath": "use_day",
                                        "align": "left",
                                        "sortable": false,
                                    },
                                    {
                                        "label": "预算(元)/比例",
                                        "valuePath": "use_budget",
                                        "align": "left",
                                        "sortable": false,
                                    },

                                    {
                                        "label": "指标/增长/达成率",
                                        "valuePath": "target",
                                        "align": "left",
                                        "sortable": false,
                                    },

                                ],
                                "columnsValue": [{
                                        "use_budget": "25天/0.22",
                                        "rep_name": "小宋",
                                        "target": "23 / 0.24 / 0.06",
                                        "time": "周期4",
                                        "use_day": 21
                                    },
                                    {
                                        "use_budget": "0 / 0",
                                        "budget_proportion": 0,
                                        "rep_name": "小宋",
                                        "target": "0 / 0 / 0",
                                        "target_growth": 0,
                                        "achieve_rate": 0,
                                        "time": "周期3",
                                        "use_day": 0
                                    },
                                    {
                                        "use_budget": "0 / 0",
                                        "budget_proportion": 0,
                                        "rep_name": "小宋",
                                        "target": "0 / 0 / 0",
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
                                        "id": "5b435533ed925c05565b5c2c",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2015,
                                        "type": "med",
                                        "corp_name": "King‘s Cross",
                                        "prod_name": "卢卡"
                                    },
                                    {
                                        "ref_price": 50,
                                        "unit_cost": 20,
                                        "prod_features": "上市时间久，临床经验稳定，疗效好",
                                        "research_type": "原研",
                                        "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                        "id": "5b6d4d9ceeefcc037639300a",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2003,
                                        "type": "med",
                                        "corp_name": "Euston",
                                        "prod_name": "海德薇"
                                    },
                                    {
                                        "ref_price": 30,
                                        "unit_cost": 20,
                                        "prod_features": "价格便宜，降压效果还可以",
                                        "research_type": "仿制",
                                        "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                        "id": "5b6d4da0eeefcc037639300b",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2006,
                                        "type": "med",
                                        "corp_name": "Piccadily",
                                        "prod_name": "韦斯莱"
                                    }
                                ]
                            },
                            "prod_category": "降压药"
                        }]
                    }
                },
                {
                    "type": "hospitallist",
                    "id": "thisishospitallist2",
                    "attributes": {
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
                                        "sortable": false,
                                        "sorted": true,
                                        "minResizeWidth": '70px',
                                    },
                                    {
                                        "label": "负责代表",
                                        "valuePath": "rep_name",
                                        "align": "left",
                                        "sortable": false,
                                    },
                                    {
                                        "label": "时间分配(天)",
                                        "valuePath": "use_day",
                                        "align": "left",
                                        "sortable": false,
                                    },
                                    {
                                        "label": "预算(元)/比例",
                                        "valuePath": "use_budget",
                                        "align": "left",
                                        "sortable": false,
                                    },

                                    {
                                        "label": "指标/增长/达成率",
                                        "valuePath": "target",
                                        "align": "left",
                                        "sortable": false,
                                    },

                                ],
                                "columnsValue": [{
                                        "use_budget": "25天/0.22",
                                        "rep_name": "小宋",
                                        "target": "23 / 0.24 / 0.06",
                                        "time": "周期4",
                                        "use_day": 21
                                    },
                                    {
                                        "use_budget": "0 / 0",
                                        "budget_proportion": 0,
                                        "rep_name": "小宋",
                                        "target": "0 / 0 / 0",
                                        "target_growth": 0,
                                        "achieve_rate": 0,
                                        "time": "周期3",
                                        "use_day": 0
                                    },
                                    {
                                        "use_budget": "0 / 0",
                                        "budget_proportion": 0,
                                        "rep_name": "小宋",
                                        "target": "0 / 0 / 0",
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
                                        "id": "5b435533ed925c05565b5c2c",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2015,
                                        "type": "med",
                                        "corp_name": "King‘s Cross",
                                        "prod_name": "卢卡"
                                    },
                                    {
                                        "ref_price": 50,
                                        "unit_cost": 20,
                                        "prod_features": "上市时间久，临床经验稳定，疗效好",
                                        "research_type": "原研",
                                        "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                        "id": "5b6d4d9ceeefcc037639300a",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2003,
                                        "type": "med",
                                        "corp_name": "Euston",
                                        "prod_name": "海德薇"
                                    },
                                    {
                                        "ref_price": 30,
                                        "unit_cost": 20,
                                        "prod_features": "价格便宜，降压效果还可以",
                                        "research_type": "仿制",
                                        "prod_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
                                        "id": "5b6d4da0eeefcc037639300b",
                                        "insure_type": "非医保药",
                                        "target_department": "心血管内科",
                                        "launch_time": 2006,
                                        "type": "med",
                                        "corp_name": "Piccadily",
                                        "prod_name": "韦斯莱"
                                    }
                                ]
                            },
                            "prod_category": "降压药"
                        }]
                    }
                },
                {
                    "type": "medicnotices",
                    "id": "thisisvertical-tabs-medicines-and-notices",
                    "attributes": {
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
                    }
                },
                {
                    "type": "repbudget",
                    "id": "thisisvertical-right-reps-budget",
                    "attributes": {
                        "represents": [{
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
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
                        }, {
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "motivation_val": 85,
                            "overall_val": 79,
                            "entry_time": 3,
                            "profe_bg": "贵州医学院临床专业毕业",
                            "weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "rep_name": "老张",
                            "advantage": "善于鼓舞士气，善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 76,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 84,
                            "service_year": 8
                        }, {
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "motivation_val": 85,
                            "overall_val": 79,
                            "entry_time": 3,
                            "profe_bg": "贵州医学院临床专业毕业",
                            "weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "rep_name": "老张",
                            "advantage": "善于鼓舞士气，善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 76,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 84,
                            "service_year": 8
                        }, {
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "motivation_val": 85,
                            "overall_val": 79,
                            "entry_time": 3,
                            "profe_bg": "贵州医学院临床专业毕业",
                            "weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "rep_name": "老张",
                            "advantage": "善于鼓舞士气，善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 76,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 84,
                            "service_year": 8
                        }, {
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "motivation_val": 85,
                            "overall_val": 79,
                            "entry_time": 3,
                            "profe_bg": "贵州医学院临床专业毕业",
                            "weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "rep_name": "老张",
                            "advantage": "善于鼓舞士气，善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 76,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 84,
                            "service_year": 8
                        }, {
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                            "intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "motivation_val": 85,
                            "overall_val": 79,
                            "entry_time": 3,
                            "profe_bg": "贵州医学院临床专业毕业",
                            "weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
                            "rep_name": "老张",
                            "advantage": "善于鼓舞士气，善于探查客户心理",
                            "age": 37,
                            "sales_skills_val": 76,
                            "business_exp": "抗肿瘤类;心血管类",
                            "rep_level": "senior",
                            "id": "5b43564ded925c05565b5c33",
                            "education": "本科",
                            "prod_knowledge_val": 84,
                            "service_year": 8
                        }],
                        "manpower": [{
                                "used": 66,
                                "name": "小宋",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 30,
                                "id": "5b43564ded925c05565b5c33"
                            },
                            {
                                "used": 0,
                                "name": "小兰",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 30,
                                "id": "5b43565ced925c05565b5c34"
                            },
                            {
                                "used": 0,
                                "name": "小木",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 30,
                                "id": "5b6d484eeeefcc0376393007"
                            },
                            {
                                "used": 0,
                                "name": "小白",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 30,
                                "id": "5b6d4852eeefcc0376393008"
                            },
                            {
                                "used": 0,
                                "name": "小青",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 30,
                                "id": "5b6d4897eeefcc0376393009"
                            },
                            {
                                "used": 65324,
                                "name": "总预算",
                                "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                                "total": 800000,
                                "id": "5b6d4897eeefcc0376393000"
                            }
                        ]
                    }
                },
            ]
        }
    });

    this.post('/api/layout/lst', (schema, request) => {
        return {
            "data": [{
                    "type": "alldecision",
                    "id": "tmp_12351c38-5cfb-4175-916d-7acd180b3b0d",
                    "attributes": {
                        "test": "hhhhhhhhhhhhhhhh",
                        "component_name": "hospital-decision",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "hospitaldecison": {
                            "data": {
                                "type": "hospdecision",
                                "id": "tmp_57e02e26-6e5a-4af2-9a97-b2f5feff8a1c",
                            }
                        }
                    }
                },
                {
                    "type": "alldecision",
                    "id": "tmp_2892571b-30be-46f0-b47b-db753ed38c50",
                    "attributes": {
                        "test": "mmmmmmmmmmmmmmm",
                        "component_name": "manager-decision",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "managerdecision": {
                            "data": {
                                "type": "mgrdecision",
                                "id": "tmp_f5463806-32ce-4000-a0c4-bdb799ab17b8",
                            }
                        },
                    }
                }
            ],
            "included": [{
                    "type": "mgrdecision",
                    "id": "tmp_f5463806-32ce-4000-a0c4-bdb799ab17b8",
                    "attributes": {
                        "component_name": "manager-decision"
                    }
                },
                {
                    "type": "hospdecision",
                    "id": "tmp_57e02e26-6e5a-4af2-9a97-b2f5feff8a1c",
                    "attributes": {
                        "component_name": "hospital-decision"
                    }
                },
            ]
        }
    })

}