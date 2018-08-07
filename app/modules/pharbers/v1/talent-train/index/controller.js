import Controller from '@ember/controller';

export default Controller.extend({
    isShowList: true,
    actions: {
        showDetail(id) {
            console.log("form application" + id);
            this.set('isShowList', false);
            this.get('model.reps').forEach((ele) => {
                if (ele.id === id) {
                    this.set('model.detail', ele);
                }
            })
        },
        hideDetail() {
            console.log('sss')
            this.set("isShowList", true)
        }
    }
});