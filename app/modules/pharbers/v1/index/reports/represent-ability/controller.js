import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        changeData(type, id) {
            if (type === "index") {
                this.transitionToRoute('pharbers.v1.index.reports')
            } else {
                this.transitionToRoute('pharbers.v1.index.reports.' + type, id)
            }
        }
    }
});