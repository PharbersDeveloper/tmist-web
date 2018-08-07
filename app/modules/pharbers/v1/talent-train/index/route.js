import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            "id": "thisisAllRepre",
            "title": "成员能力概况",
            "reps": [{
                "id": "thisisxiaosong",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "name": '小松',
                "self": ['28岁', '研究生', '英语专业', '3年工作经验', '入职一年'],
                "square": [{
                    "title": "业务经验",
                    "value": ["心血管类", "抗生素类"]
                }, {
                    "title": "优势",
                    "value": ["客情关系", "学习能力", "幻灯演讲"]
                }, {
                    "title": "代提高",
                    "value": ["产品知识", "科室会", "专业性的拜访"]
                }],
                "scores": [{
                    "title": "销售技巧",
                    "score": 45,
                }, {
                    "title": "产品知识",
                    "score": 56,
                }, {
                    "title": "工作积极性",
                    "score": 65,
                }],
                "showinfo": [{
                    "key": "总能力值",
                    "value": 45,
                }, {
                    "key": "产品知识",
                    "value": 54,
                }, {
                    "key": "销售技巧",
                    "value": 32,
                }, {
                    "key": "工作积极性",
                    "value": 21,
                }]
            }, {
                "id": "this-is-bigzhang",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "name": '大张',
                "self": ['38岁', '研究生', '英语专业', '8年工作经验', '入职八年'],
                "square": [{
                    "title": "业务经验",
                    "value": ["心血管类", "抗生素类"]
                }, {
                    "title": "优势",
                    "value": ["客情关系", "学习能力", "幻灯演讲"]
                }, {
                    "title": "代提高",
                    "value": ["产品知识", "科室会", "专业性的拜访"]
                }],
                "scores": [{
                    "title": "销售技巧",
                    "score": 56,
                }, {
                    "title": "产品知识",
                    "score": 68,
                }, {
                    "title": "工作积极性",
                    "score": 76,
                }],
                "showinfo": [{
                    "key": "总能力值",
                    "value": 56,
                }, {
                    "key": "产品知识",
                    "value": 65,
                }, {
                    "key": "销售技巧",
                    "value": 43,
                }, {
                    "key": "工作积极性",
                    "value": 36,
                }]
            }],
            "detail": {}
        };
        // return allRep;
    },

});