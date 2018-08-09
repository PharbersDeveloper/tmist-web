// import Controller from '@ember/controller';
//
// export default Controller.extend({
//
// });
//
import Controller from '@ember/controller';
import { inject } from '@ember/service';
import rsvp from 'rsvp';

export default Controller.extend({
    cookies: inject(),
    ajax: inject(),

    getAjaxOpt(data) {
        return {
            method: 'POST',
            dataType: "json",
            cache: false,
            data: JSON.stringify(data),
            contentType: "application/json",
            Accpt: "application/json"
        }
    },
    actions: {
        login() {
            let condition = {
                "token": "token123456789",
                "timestamp": 1530689119000,
                "version": {
                    "major": 1,
                    "minor": 0
                },
                "data": {
                    "type": "user",
                    "condition": {
                        "email": this.get('account'),
                        "password": this.get('password')
                    }
                }
            };

            new rsvp.Promise((resolve, reject) => {
                return this.get('ajax').request('api/user/login',
                    this.getAjaxOpt(condition)).then((response) => {
                        if (response.status === "ok") {
                            this.get('cookies').write('user_token', response.result.data.attribute, { path: '/' });
                            // this.transitionToRoute('pharbers.v1.train');
                            this.transitionToRoute('pharbers.v1.imitate-train');
                        } else {
                            alert('帐号或密码错误。');
                        }
                        return resolve({
                            result: response
                        });
                    },
                    () => {
                        return reject("Access Error");
                    }
                );
            });
        }
    }
})