import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        changeData(type, id) {
            this.transitionToRoute('pharbers.v1.index.reports.' + type, id)
        }
    }
});