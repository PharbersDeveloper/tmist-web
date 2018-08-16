import Controller from '@ember/controller';
import { observer, computed }from '@ember/object';
import { once } from '@ember/runloop';

export default Controller.extend({
    flatten(arr) {
        while (arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr);
        }
        return arr;
    },
    arrayDemo: {
        uuid: "a",
        values: [
            {
                id: "1",
                attrs: [
                    {name: "qp"}
                ]
            },
            {
                id: "2",
                attrs: [
                    {name: "alex"}
                ]
            }
        ]
    },
    attrs: computed('arrayDemo.values.@each.attrs', function() {
		return this.flatten(this.get('arrayDemo.values').mapBy('attrs'))
	}),
    watchData: observer('attrs.@each.name', function() {
        window.console.info(123)
	}),
    actions: {
        test() {
            console.info(this.flatten(this.get('arrayDemo.values').mapBy('attrs')))
        }
    }
});
