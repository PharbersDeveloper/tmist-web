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
          this.route('evaluation');
          this.route('hosp-list', { path: "hosp-list/:uuid" });
          this.route('hosp-list-detail', { path: "hosp-list-detail/:uuid/:hospid" });
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
});

export default Router;
