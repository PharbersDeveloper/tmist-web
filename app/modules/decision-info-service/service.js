import Service from '@ember/service';
import styles from '../pharbers/v1/styles';
import { computed } from '@ember/object';

export default Service.extend({
    isShown: false,
    slideClassNames: computed('isShown', function () {
        const isShown = this.get('isShown');
        let baseClass = styles.mcontent;
        return isShown ? `${baseClass} ${styles.show}` : baseClass;
    }),
    show() {
        this.set('isShown', true);
    },
    hide() {
        this.set('isShown', false);
    }
});
