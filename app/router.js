import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('page-not-found', { path: '/*path' });
    this.route('pharbers', function() {
        this.route('v1', function() {
            this.route('imitate-train', function() {
                this.route('decision', { path: "decision/:uuid" });
            });
            this.route('reports', { path: 'reports/:uuid' }, function() {
                this.route('hosp-product');
                this.route('represent-product');
                this.route('resource');
                this.route('represent-target');
                this.route('represent-ability');
            });
            this.route('evaluation', { path: "evaluation/:evaid" });
        });
        this.route('v2', { path: 'v2/tm' });
    });
});

export default Router;