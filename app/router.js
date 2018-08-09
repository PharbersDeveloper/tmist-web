import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('page-not-found', { path: '/*path' });
    this.route('pharbers', function() {
        this.route('v1', { path: 'v1/tm' }, function() {
            this.route('report');
            this.route('train');
            this.route('evaluation');
            this.route('hospital', { path: "hospital/:pid/:uuid" });
            this.route('hosp-detail', { path: "detail/:pid/:uuid/:hospid" });
            this.route('result', function() {
                this.route('whole');
                this.route('hospital-report');
                this.route('represent-report');
                this.route('resource');
                this.route('represent');

            });
            this.route('talent-train', function() {
                this.route('talent-detail');
            });
            this.route('hosp-list', { path: "hosp-list/:pid/:uuid" });
            this.route('hosp-list-detail', { path: "hosp-list-detail/:pid/:uuid/:hospid" });
            this.route('imitate-train');
            this.route('reports', function() {
                this.route('hosp-product');
                this.route('represent-product');
                this.route('resource');
                this.route('represent-target');
                this.route('represent-ability');
            });
        });
        this.route('v2', { path: 'v2/tm' });
    });
    this.route('nhwa', function() { this.route('v1') });
    this.route('demo');
});

export default Router;