import Controller from '@ember/controller';

export default Controller.extend({
    isShowList: true,
    init() {
        this._super(...arguments);
        this.month = {
            "month": "08"
        };
        this.dropdownData = {
            "text": "提交执行",
            "budget": {
                "used": 6000,
                "total": 8000,
            },
            "manpower": [{
                "name": "小赵",
                "total": 30,
                "used": 10
            }, {
                "name": "小钱",
                "total": 30,
                "used": 23
            }, {
                "name": "小孙",
                "total": 30,
                "used": 13
            }, {
                "name": "小李",
                "total": 30,
                "used": 5
            }, {
                "name": "小秦",
                "total": 30,
                "used": 28
            }],
        };
    },
    actions: {
        showDetail(id) {
            this.set('isShowList', false);
            this.get('model.reps').forEach((ele) => {
                if (ele.id === id) {
                    this.set('model.detail', ele);
                }
            })
        },
        hideDetail() {
            this.set("isShowList", true)
        },
        submitRun(text) {
            alert('请填写相关管理数据')
        },
        backPrev() {
            let previousTransition = this.get('previousTransition');
            this.logger.log(previousTransition);
            // this.transitionToRoute(previousTransition.intent.url);
            if (previousTransition.intent.url) {
                this.transitionToRoute(previousTransition.intent.url);
            } else {
                let params = "/";
                for (let i = 0, len = previousTransition.intent.contexts.length; i < len; i++) {
                    params = params + previousTransition.intent.contexts[i] + '/';
                }
                let newP = previousTransition.intent.name.replace(/\./g, '/');
                let font = "/" + newP.slice(0, 11) + "/tm" + newP.slice(11, newP.length)
                this.transitionToRoute(font + params)

            }

        }
    }
});
