import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(transition) {
        let talentController = this.controllerFor('pharbers.v1.talent-train.index');
        talentController.set('previousTransition', transition);
    },
    model() {
        return {
            "month": {
                "month": "08",
            },
            "dropdownData": {
                "text": "查看报告",
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
            }
        }
    }
});