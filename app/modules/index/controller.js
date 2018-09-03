import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    cookies: inject(),
    actions: {
        login(a, p, component) {
            let data = this.Data
            data.set('attributes.res', "tm-login")
            data.set('relationships.conditions', { data: [{ id: '2', type: 'eq_cond' }] });
            let include = [{ id: '2', type: 'eq_cond', key: a, val: p }];

            let conditions = this.Contact.joint(data, include);
            component.set('cookies', this.get('cookies'));
            component.set('result', this.store.queryObject('/login', 'auth', conditions));
            component.get('setcookies').then((result) => {
                if (result.state === "success") {
                    this.transitionToRoute('pharbers.v1.imitate-train')
                }
            });
        }
    }
});