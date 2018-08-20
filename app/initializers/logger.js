import EmberObject from '@ember/object';

export function initialize(application) {
    let Logger = EmberObject.extend({
        log(m) {
            window.console.log(m);
        }
    });

    application.register('logger:main', Logger);

    application.inject('route', 'logger', 'logger:main');
    application.inject('component', 'logger', 'logger:main');
    application.inject('controller', 'logger', 'logger:main');
    application.inject('service', 'logger', 'logger:main');
}

export default { name: 'logger', initialize };
