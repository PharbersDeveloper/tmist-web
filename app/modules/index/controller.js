import Controller from '@ember/controller';
import { inject } from '@ember/service';

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
        response(data) {
            if (data.status === "ok") {
                // console.log(data)
                this.get('cookies').write('user_token', data.result.data.attribute, { path: '/' });
                this.transitionToRoute('pharbers.v1.imitate-train');
            } else {
                alert('帐号或密码错误。');
            }
        },
    }
})