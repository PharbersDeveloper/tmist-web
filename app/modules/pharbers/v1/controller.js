import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    decisionInfo: inject('decision-info-service'),
    isShowList: true,
    init() {
        this._super(...arguments);
        this.repList = {
            "id": "暂定UUID",
            "component_data": [
                {
                    "key": "target-representative-card",
                    "values": [
                        {
                            "id": "izteqaf57vb14mop",
                            "name": "小赵",
                            "ability": [
                                {
                                    "title": "总能力值",
                                    "value": 45
                                },
                                {
                                    "title": "产品知识",
                                    "value": 54
                                },
                                {
                                    "title": "销售技巧",
                                    "value": 32
                                },
                                {
                                    "title": "工作积极性",
                                    "value": 21
                                }
                            ],
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-decision-ember-addon/a1.jpeg"
                        },
                        {
                            "id": "izteqaf57vb14mob",
                            "name": "小钱",
                            "ability": [
                                {
                                    "title": "总能力值",
                                    "value": 45
                                },
                                {
                                    "title": "产品知识",
                                    "value": 54
                                },
                                {
                                    "title": "销售技巧",
                                    "value": 32
                                },
                                {
                                    "title": "工作积极性",
                                    "value": 21
                                }
                            ],
                            "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-decision-ember-addon/a2.jpeg"
                        }
                    ]
                },
                {
                    "key": "target-rep-detail",
                    "values": [
                        {
                            "id": "izteqaf57vb14mop",
                            "lable": {
                                "name": "小赵",
                                "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-decision-ember-addon/a1.jpeg",
                                "age": 28,
                                "education": "研究生",
                                "specialities": "英语专业",
                                "working_hours": 8,
                                "entry_hours": 1
                            },
                            "self_business": [
                                {
                                    "title": "业务经验",
                                    "value": [
                                        "心血管类",
                                        "抗生素类"
                                    ]
                                },
                                {
                                    "title": "优势",
                                    "value": [
                                        "客情关系",
                                        "学习能力",
                                        "幻灯演讲"
                                    ]
                                },
                                {
                                    "title": "代提高",
                                    "value": [
                                        "产品知识",
                                        "科室会",
                                        "专业性的拜访"
                                    ]
                                }
                            ],
                            "score": [
                                {
                                    "title": "销售技巧",
                                    "score": 45
                                },
                                {
                                    "title": "产品知识",
                                    "score": 56
                                },
                                {
                                    "title": "工作积极性",
                                    "score": 65
                                }
                            ]
                        },
                        {
                            "id": "izteqaf57vb14mob",
                            "lable": {
                                "name": "小钱",
                                "rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-decision-ember-addon/a2.jpeg",
                                "age": 28,
                                "education": "研究生",
                                "specialities": "英语专业",
                                "working_hours": 8,
                                "entry_hours": 1
                            },
                            "self_business": [
                                {
                                    "title": "业务经验",
                                    "value": [
                                        "心血管类",
                                        "抗生素类"
                                    ]
                                },
                                {
                                    "title": "优势",
                                    "value": [
                                        "客情关系",
                                        "学习能力",
                                        "幻灯演讲"
                                    ]
                                },
                                {
                                    "title": "代提高",
                                    "value": [
                                        "产品知识",
                                        "科室会",
                                        "专业性的拜访"
                                    ]
                                }
                            ],
                            "score": [
                                {
                                    "title": "销售技巧",
                                    "score": 45
                                },
                                {
                                    "title": "产品知识",
                                    "score": 56
                                },
                                {
                                    "title": "工作积极性",
                                    "score": 65
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    actions: {
        close() {
            this.get('decisionInfo').hide()
        }
    }
});
