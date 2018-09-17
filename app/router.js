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
          this.route('index', { path: '/:uuid' }, function() {
              this.route('hosp-list', { path: "hosp-list" });
              this.route('hosp-list-detail', { path: "hosp-list-detail/:hospid" });
              this.route('reports', function() {
                  this.route('hosp-product', { path: "hosp-product/:id" });
                  this.route('represent-product', { path: "represent-product/:id" });
                  this.route('resource', { path: "resource/:id" });
                  this.route('represent-target', { path: "represent-target/:id" });
                  this.route('represent-ability', { path: "represent-ability/:id" });
              });
              this.route('decision');
          });
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
          this.route('evaluation');
        });
        this.route('v2', { path: 'v2/tm' });
    });
});

export default Router;