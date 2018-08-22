import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.manager = {
            "component_data": [{
                "key": "target-hospital-info-card",
                "values": [{
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
                }]
            }, {
                "key": "vertical-tabs",
                "values": {
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
                }
            }, {
                "key": "rep-input-card",
                "values": []
            }]
        }
    },
});