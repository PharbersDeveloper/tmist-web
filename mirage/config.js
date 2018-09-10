export default function() {

    this.post('/api/v1/login/0', (schema, request) => {
        window.console.warn(request.requestBody);

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
                },
                "id": "5b7e454a8fb8076c3c3304p0",
                "type": "proposal"
            }, {
                "attributes": {
                    "name": "关卡二",
                    "desc": "This is second proposal",
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
                    "signrep": {
                        "data": {
                            "type": "hosprep",
                            "id": "hospitalbaseinfo01-repid001"
                        }
                    }
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
                    "signrep": {
                        "data": {
                            "type": "hosprep",
                            "id": "hospitalbaseinfo02-repid002"
                        }
                    }
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
                {
                    "type": "hosprep",
                    "id": "hospitalbaseinfo02-repid002",
                    "attributes": {
                        "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                        "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
                        "motivation_val": 45,
                        "overall_val": 62,
                        "entry_time": 3,
                        "total_days": 30,
                        "used_days": 22,
                        "profe_bg": "医学院校临床专业毕业",
                        "weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
                        "rep_name": "大宋",
                        "advantage": "善于发现客户需求;善于探查客户心理",
                        "age": 37,
                        "sales_skills_val": 70,
                        "business_exp": "抗肿瘤类;心血管类",
                        "rep_level": "senior",
                        "education": "本科",
                        "prod_knowledge_val": 70,
                        "service_year": 8
                    }
                },
                {
                    "type": "hosprep",
                    "id": "hospitalbaseinfo01-repid001",
                    "attributes": {
                        "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                        "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
                        "motivation_val": 45,
                        "overall_val": 62,
                        "entry_time": 3,
                        "total_days": 30,
                        "used_days": 22,
                        "profe_bg": "医学院校临床专业毕业",
                        "weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
                        "rep_name": "小张",
                        "advantage": "善于发现客户需求;善于探查客户心理",
                        "age": 37,
                        "sales_skills_val": 70,
                        "business_exp": "抗肿瘤类;心血管类",
                        "rep_level": "senior",
                        "education": "本科",
                        "prod_knowledge_val": 70,
                        "service_year": 8
                    }
                }

            ]
        }
    })

    this.post('/api/repsbudgets', (schema, request) => {

        return {
            "data": {
                "type": "repsbudget",
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
                    "rep_name": "小张",
                    "advantage": "善于发现客户需求;善于探查客户心理",
                    "age": 37,
                    "sales_skills_val": 70,
                    "business_exp": "抗肿瘤类;心血管类",
                    "rep_level": "senior",
                    "education": "本科",
                    "prod_knowledge_val": 70,
                    "service_year": 8
                }
            }, {
                "type": "budgetinfo",
                "id": "budgetone",
                "attributes": {
                    "used_days": 24,
                    "name": "小宋",
                    "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "total_days": 30,
                }
            }, {
                "type": "budgetinfo",
                "id": "budgettwo",
                "attributes": {
                    "used_days": 16,
                    "name": "小张",
                    "image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                    "total_days": 30,
                }
            }, ]

        }
    })

    this.post('/api/medicsnotices', (schema, request) => {
        return {
            "data": {
                "type": "medicsnotice",
                "id": "1",
                "attributes": {
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "medicines": {
                        "data": [{
                            "type": "medicineinfo",
                            "id": "0",
                        }, {
                            "type": "medicineinfo",
                            "id": "1",
                        }]
                    },
                    "notices": {
                        "data": [{
                            "type": "notice",
                            "id": "0"
                        }, {
                            "type": "notice",
                            "id": "1"
                        }]
                    },
                }
            },
            "included": [{
                "type": "medicineinfo",
                "id": "0",
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
                "type": "medicineinfo",
                "id": "1",
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
                "type": "notice",
                "id": "0",
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
                "type": "notice",
                "id": "1",
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

    this.post('/api/repinputcards', (schema, request) => {
        return {
            "data": [{
                    "type": "repinputinfo",
                    "id": "repinputinfoishere",
                    "attributes": {
                        "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                        "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
                        "total_days": 120,
                        "used_days": 33,
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
                        "education": "本科",
                        "prod_knowledge_val": 70,
                        "service_year": 8
                    },
                    "relationships": {}
                },
                {
                    "type": "repinputinfo",
                    "id": "repinputinfoishere02",
                    "attributes": {
                        "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
                        "intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
                        "total_days": 120,
                        "used_days": 33,
                        "motivation_val": 45,
                        "overall_val": 62,
                        "entry_time": 3,
                        "profe_bg": "医学院校临床专业毕业",
                        "weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
                        "rep_name": "小诸葛",
                        "advantage": "善于发现客户需求;善于探查客户心理",
                        "age": 37,
                        "sales_skills_val": 70,
                        "business_exp": "抗肿瘤类;心血管类",
                        "rep_level": "senior",
                        "education": "本科",
                        "prod_knowledge_val": 70,
                        "service_year": 8
                    },
                    "relationships": {}
                }
            ]
        }
    })

    this.post('/api/layout/lst', (schema, request) => {
        return {
            "data": [{
                    "type": "alldecision",
                    "id": "tmp_12351c38-5cfb-4175-916d-7acd180b3b0d",
                    "attributes": {
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

    this.post('/api/report/total', (schema, request) => {
        return {
            "data": [{
                    "type": "report-overview",
                    "id": "overview-1",
                    "attributes": {
                        "component_name": "which-result",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "dropdown": {
                            "data": {
                                "type": "dropdowndata",
                                "id": "dropdown-data-total",
                            }
                        }
                    }
                },
                {
                    "type": "report-overview",
                    "id": "overview-2",
                    "attributes": {
                        "component_name": "data-show-card",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "resultcard": {
                            "data": {
                                "type": "result-card",
                                "id": "result-card-total",
                            }
                        },
                    }
                },
                {
                    "type": "report-overview",
                    "id": "overview-3",
                    "attributes": {
                        "component_name": "result-table",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "resulttable": {
                            "data": {
                                "type": "result-table-data",
                                "id": "result-table-data-total",
                            }
                        },
                    }
                }
            ],
            "included": [{
                    "type": "dropdowndata",
                    "id": "dropdown-data-1",
                    "attributes": {
                        "whichpage": "index",
                        "text": "整体销售表现",
                        "major": 1,
                        "minor": 0
                    }
                },
                {
                    "type": "result-card",
                    "id": "result-card-total",
                    "attributes": {
                        "component_name": "data-show-card"
                    }
                },
                {
                    "type": "result-table-data",
                    "id": "result-table-data-index",
                    "attributes": {
                        "component_name": "result-table"
                    }
                },
            ]
        }
    })

    this.post('/api/report/which', (schema, request) => {
        return {
            "data": [{
                    "type": "dropdowndata",
                    "id": "dropdown-data-1",
                    "attributes": {
                        "whichpage": "index",
                        "text": "整体销售表现",
                        "major": 1,
                        "minor": 0
                    },
                },
                {
                    "type": "dropdowndata",
                    "id": "dropdown-data-2",
                    "attributes": {
                        "whichpage": "hosp-product",
                        "text": "医院-产品销售报告",
                        "major": 1,
                        "minor": 0
                    },
                },
                {
                    "type": "dropdowndata",
                    "id": "dropdown-data-3",
                    "attributes": {
                        "whichpage": "represent-product",
                        "text": "代表-产品销售报告",
                        "major": 1,
                        "minor": 0
                    },
                },
                {
                    "type": "dropdowndata",
                    "id": "dropdown-data-4",
                    "attributes": {
                        "whichpage": "resource",
                        "text": "资源投入与产出",
                        "major": 1,
                        "minor": 0
                    },
                },
                {
                    "type": "dropdowndata",
                    "id": "dropdown-data-5",
                    "attributes": {
                        "whichpage": "represent-target",
                        "text": "代表指标与资源",
                        "major": 1,
                        "minor": 0
                    },
                },
                {
                    "type": "dropdowndata",
                    "id": "dropdown-data-6",
                    "attributes": {
                        "whichpage": "represent-ability",
                        "text": "代表能力",
                        "major": 1,
                        "minor": 0
                    },
                },
            ],

        }
    })

    this.post('/api/report/cards/index', (schema, request) => {
        return {
            "data": [{
                    "type": "result-card",
                    "id": "result-card-1",
                    "attributes": {
                        "index": 1,
                        "title": "总销售额",
                        "type": "sales",
                        "value": 6039535
                    },
                },
                {
                    "type": "result-card",
                    "id": "result-card-2",
                    "attributes": {
                        "index": 2,
                        "title": "整体销售增长",
                        "type": "percent",
                        "value": 12,
                        "ext": {
                            "change": "up"
                        }
                    },
                },
                {
                    "type": "result-card",
                    "id": "result-card-3",
                    "attributes": {
                        "index": 3,
                        "title": "平均指标达成",
                        "type": "percent",
                        "value": 0.6,
                    },
                },
            ],

        }
    })

    this.post('/api/report/table/index', (schema, request) => {
        return {
            "data": {
                "type": "result-table-data",
                "id": "result-table-data-index",
                "attributes": {
                    "columns": [{
                            "label": '产品名称',
                            "valuePath": 'brand_name',
                            // "width": '100px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '市场销售额',
                            "valuePath": 'potential',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '市场增长(%)',
                            "valuePath": 'market_growth',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'

                        }, {
                            "label": '当期销售额',
                            "valuePath": 'sales',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '销售增长(%)',
                            "valuePath": 'sales_growth',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": 'EV值(%)',
                            "valuePath": 'ev_value',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额(%)',
                            "valuePath": 'share',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额增长(%)',
                            "valuePath": 'share_change',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '指标',
                            "valuePath": 'target',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },
                        {
                            "label": '指标达成率(%)',
                            "valuePath": 'achieve_rate',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            // "width": '100px',
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
            }
        }
    })

    this.post('/api/report/cards/hosp-product',(schema,request) => {
        return {
            "data":[{
                "type":"result-card",
                "id":"result-card-4",
                "attributes":{
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
                        }
                }
            },{
                    "type":"result-card",
                    "id":"result-card-5",
                    "attributes":{
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
                    }
                },{
                        "type":"result-card",
                        "id":"result-card-6",
                        "attributes":{
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
                        }
            },{
                "type":"result-card",
                "id":"result-card-7",
                "attributes":{
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
                }
            },{
                "type":"result-card",
                "id":"result-card-8",
                "attributes":{
                    "index": 5,
                    "title": "平均指标达成",
                    "type": "percent",
                    "value": 0.6,
                }
            }]
        }
    })

    this.post('/api/report/table/hosp-product',(schema,request) => {
        return {
            "data":{
                "type": "result-table-data",
                "id": "result-table-data-hosp-product",
                "attributes":{
                    "columns": [{
                        "label": '医院名称',
                        "valuePath": 'hosp_name',
                        // "width": '100px',
                        "align": 'center',
                        "sorted": false,
                    }, {
                        "label": '产品名称',
                        "valuePath": 'brand_name',
                        // "width": '100px',
                        "align": 'center',
                        "sorted": false,

                    }, {
                        "label": '市场潜力',
                        "valuePath": 'potential',
                        // "width": '100px',
                        "align": 'center',
                        "cellComponent": 'table-number-thousands'
                    }, {
                        "label": '市场增长(%)',
                        "valuePath": 'market_growth',
                        // "width": '80px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'

                    }, {
                        "label": '当期销售额',
                        "valuePath": 'sales',
                        // "width": '100px',
                        "align": 'center',
                        "cellComponent": 'table-number-thousands'
                    }, {
                        "label": '销售增长(%)',
                        "valuePath": 'sales_growth',
                        // "width": '80px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }, {
                        "label": 'EV值(%)',
                        "valuePath": 'ev_value',
                        // "width": '80px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }, {
                        "label": '份额(%)',
                        "valuePath": 'share',
                        // "width": '80px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }, {
                        "label": '份额增长(%)',
                        "valuePath": 'share_change',
                        // "width": '80px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }, {
                        "label": '指标',
                        "valuePath": 'target',
                        // "width": '100px',
                        "align": 'center',
                        "cellComponent": 'table-number-thousands'
                    },
                    {
                        "label": '指标达成率(%)',
                        "valuePath": 'achieve_rate',
                        // "width": '100px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }, {
                        "label": '销售贡献率(%)',
                        "valuePath": 'sales_contri',
                        // "width": '100px',
                        "align": 'center',
                        "cellComponent": 'table-number-percent'
                    }
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
                        "sales_contri": 0.2
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
                        "sales_contri": 0.2

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
                        "sales_contri": 0.2

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
                        "sales_contri": 0.2

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
                        "sales_contri": 0.2

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
                        "sales_contri": 0.2

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
                        "sales_contri": 0.2

                    }
                ],
                }


            }
        }
    })

    this.post('/api/report/cards/represent-product',(schema,request) => {
        return {
            "data":[{
                "type":"result-card",
                "id":"product-card-1",
                "attributes":{
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
                },
            },{
                "type":"result-card",
                "id":"product-card-2",
                "attributes":{
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
                },
            },{
                "type":"result-card",
                "id":"product-card-3",
                "attributes":{
                    "index": 3,
                    "title": "平均指标达成",
                    "type": "percent",
                    "value": 0.6,
                },
            }]
        }
    })

    this.post('/api/report/table/represent-product',(schema,request) => {
        return {
            "data":{
                "type": "result-table-data",
                "id": "result-table-data-represent-product",
                "attributes":{
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'rep_name',
                            // "width": '160px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '产品名称',
                            "valuePath": 'brand_name',
                            // "width": '130px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '当期销售额',
                            "valuePath": 'sales',
                            // "width": '130px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '销售增长(%)',
                            "valuePath": 'sales_growth',
                            // "width": '130px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '指标',
                            "valuePath": 'target',
                            // "width": '140px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },
                        {
                            "label": '指标达成率(%)',
                            "valuePath": 'achieve_rate',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }
                    ],
                    "columnsValue": [{
                            "rep_name": "代表01",
                            "brand_name": "测试产品1",
                            "sales": 26045,
                            "sales_growth": 0.11,
                            "target": 11709,
                            "achieve_rate": 0.1,
                            "contri_rate": 0.1
                        },
                        {
                            "rep_name": "代表02",
                            "brand_name": "测试产品2",
                            "sales": 48850,
                            "sales_growth": 0.22,
                            "target": 37416,
                            "achieve_rate": 0.2,
                            "contri_rate": 0.2
                        },
                        {
                            "rep_name": "代表03",
                            "brand_name": "测试产品3",
                            "sales": 4032,
                            "sales_growth": 0.33,
                            "target": 561318,
                            "achieve_rate": 0.3,
                            "contri_rate": 0.3
                        },
                        {
                            "rep_name": "代表04",
                            "brand_name": "测试产品4",
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "target": 26299,
                            "achieve_rate": 0.4,
                            "contri_rate": 0.4
                        },
                        {
                            "rep_name": "代表05",
                            "brand_name": "测试产品5",
                            "sales": 26549,
                            "sales_growth": 0.44,
                            "target": 26299,
                            "achieve_rate": 0.4,
                            "contri_rate": 0.4
                        }
                    ],
                }
            }
        }
    })

    this.post('/api/report/cards/resource',(schema,request) => {
        return {
            "data":[{
                "type":"result-card",
                "id":"resource-card-1",
                "attributes":{
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
                }
            },{
                "type":"result-card",
                "id":"resource-card-2",
                "attributes":{
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
                }
            },{
                "type":"result-card",
                "id":"resource-card-3",
                "attributes":{
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
                }
            },{
                "type":"result-card",
                "id":"resource-card-4",
                "attributes":{
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
                }
            }]
        }
    })

    this.post('/api/report/table/resource',(schema,request) => {
        return {
            "data":{
                "type": "result-table-data",
                "id": "result-table-data-resource",
                "attributes":{
                    "columns": [{
                            "label": '医院名称',
                            "valuePath": 'hosp_name',
                            // "width": '100px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '产品名称',
                            "valuePath": 'brand_name',
                            // "width": '100px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '分配代表',
                            "valuePath": 'rep',
                            // "width": '80px',
                            "align": 'center',
                        }, {
                            "label": '时间分配(天)',
                            "valuePath": 'time',
                            // "width": '80px',
                            "align": 'center',

                        }, {
                            "label": '预算分配',
                            "valuePath": 'budget',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '市场潜力(%)',
                            "valuePath": 'potential',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '潜力增长(%)',
                            "valuePath": 'potential_growth',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '销售额',
                            "valuePath": 'sales',
                            // "width": '100px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '销售增长(%)',
                            "valuePath": 'sales_growth',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额(%)',
                            "valuePath": 'share',
                            // "width": '80px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '份额增长(%)',
                            "valuePath": 'share_change',
                            // "width": '100px',
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
                            "hosp_name": "医院001",
                            "brand_name": "测试产品1",
                            "rep": "小赵",
                            "time": 0.1,
                            "budget": 26045,
                            "potential": 0.11,
                            "potential_growth": 0.1,
                            "sales": 11709,
                            "sales_growth": 0.01,
                            "share": 0.11,
                            "share_change": 0.1,
                            "contri_rate": 0.1
                        },
                        {
                            "hosp_name": "医院002",
                            "brand_name": "测试产品2",
                            "rep": "小钱",
                            "time": 0.2,
                            "budget": 48850,
                            "potential": 0.22,
                            "potential_growth": 0.2,
                            "sales": 37416,
                            "sales_growth": 0.01,
                            "share": 0.22,
                            "share_change": 0.2,
                            "contri_rate": 0.2
                        },
                        {
                            "hosp_name": "医院003",
                            "brand_name": "测试产品3",
                            "rep": "小孙",
                            "time": 0.3,
                            "budget": 4032,
                            "potential": 0.33,
                            "potential_growth": 0.3,
                            "sales": 561318,
                            "sales_growth": 0.01,
                            "share": 0.33,
                            "share_change": 0.3,
                            "contri_rate": 0.3
                        },
                        {
                            "hosp_name": "医院004",
                            "brand_name": "测试产品4",
                            "rep": "小李",
                            "time": 0.4,
                            "budget": 26549,
                            "potential": 0.44,
                            "potential_growth": 0.4,
                            "sales": 26299,
                            "sales_growth": 0.01,
                            "share": 0.44,
                            "share_change": 0.4,
                            "contri_rate": 0.4
                        }
                    ],
                }
            }
        }
    })

    this.post('/api/report/cards/represent-target',(schema,request) => {
        return {
            "data":[{
                "type":"result-card",
                "id":"traget-card-1",
                "attributes":{
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
                }
            },{
                "type":"result-card",
                "id":"target-card-2",
                "attributes": {
                    "index": 2,
                    "title": "资源最多",
                    "type": "info",
                    "value": "代表2",
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
                }
            },{
                "type":"result-card",
                "id":"target-card-3",
                "attributes":{
                    "index": 3,
                    "title": "达成率最高",
                    "type": "info",
                    "value": "代表3",
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
                }
            },{
                "type":"result-card",
                "id":"target-card-4",
                "attributes":{
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
                },
            }]
        }
    })

    this.post('/api/report/table/represent-target',(schema,request) => {
        return {
            "data":{
                "type": "result-table-data",
                "id": "result-table-data-target",
                "attributes":{
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'brand_name',
                            // "width": '180px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '负责指标',
                            "valuePath": 'potential',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '当期销售额',
                            "valuePath": 'sales',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        },
                        {
                            "label": '指标达成率(%)',
                            "valuePath": 'achieve_rate',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '预算比例(%)',
                            "valuePath": 'budget_rate',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        },
                        {
                            "label": '销售贡献率(%)',
                            "valuePath": 'contri_rate',
                            // "width": '120px',
                            "align": 'center',
                            "cellComponent": 'table-number-percent'
                        }, {
                            "label": '工作天数',
                            "valuePath": 'workdays',
                            // "width": '120px',
                            "align": 'center',
                        }, {
                            "label": '奖金',
                            "valuePath": 'target',
                            // "width": '160px',
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
            }
        }
    })

    this.post('/api/report/cards/represent-ability',(schema,request) => {
        return {
            "data":[{
                "type":"result-card",
                "id":"ability-card-1",
                "attributes": {
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
            },
        },{
                "type":"result-card",
                "id":"ability-card-2",
                "attributes":{
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
                }
        }]
        }
    })

    this.post('/api/report/table/represent-ability',(schema,request) => {
        return {
            "data":{
                "type": "result-table-data",
                "id": "result-table-data-ability",
                "attributes":{
                    "columns": [{
                            "label": '代表名称',
                            "valuePath": 'rep_name',
                            // "width": '180px',
                            "align": 'center',
                            "sorted": false,

                        }, {
                            "label": '总能力值',
                            "valuePath": 'ability',
                            // "width": '200px',
                            "align": 'center',
                            "cellComponent": 'table-number-thousands'
                        }, {
                            "label": '产品知识',
                            "valuePath": 'prod_know',
                            // "width": '200px',
                            "align": 'center',
                        }, {
                            "label": '销售技巧',
                            "valuePath": 'sales',
                            // "width": '150px',
                            "align": 'center',
                        }, {
                            "label": '增长',
                            "valuePath": 'sales_growth',
                            // "width": '150px',
                            "align": 'center',
                        }, {
                            "label": '工作积极性',
                            "valuePath": 'work_activity',
                            // "width": '180px',
                            "align": 'center',
                        },

                    ],
                    "columnsValue": [{
                            "rep_name": "代表1",
                            "ability": 45,
                            "prod_know": 65,
                            "sales": 56,
                            "sales_growth": 4,
                            "work_activity": 88,

                        },
                        {
                            "rep_name": "代表2",
                            "ability": 65,
                            "prod_know": 35,
                            "sales": 87,
                            "sales_growth": 5,
                            "work_activity": 45,

                        },
                        {
                            "rep_name": "代表3",
                            "ability": 34,
                            "prod_know": 62,
                            "sales": 89,
                            "sales_growth": 5,
                            "work_activity": 21,

                        },
                        {
                            "rep_name": "代表4",
                            "ability": 55,
                            "prod_know": 23,
                            "sales": 68,
                            "sales_growth": 2,
                            "work_activity": 74,

                        },
                        {
                            "rep_name": "代表5",
                            "ability": 46,
                            "prod_know": 55,
                            "sales": 62,
                            "sales_growth": 6,
                            "work_activity": 19,

                        }
                    ],
                }
            }
        }
    })

}
