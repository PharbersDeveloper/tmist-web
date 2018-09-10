import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    cookies: inject(),
    actions: {
        login(a, p, component) {

            let req = this.store.createRecord('request', {
                res: 'user',
            });

            let eqValues = [
                { id: 'email', type: 'eqcond', key: 'email', val: a },
                { id: 'password', type: 'eqcond', key: 'password', val: p },
            ]

            eqValues.forEach((elem, index) => {
                req.get(elem.type).pushObject(this.store.createRecord(elem.type, {
                    id: elem.id,
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.store.object2JsonApi('request', req);


            component.set('cookies', this.get('cookies'));
            component.set('result', this.store.queryObject('/api/v1/login/0', 'auth', conditions));
            component.get('setcookies').then((result) => {
                if (result.state === "success") {
                    this.transitionToRoute('pharbers.v1.imitate-train')
                }
            });
        }
    }
});