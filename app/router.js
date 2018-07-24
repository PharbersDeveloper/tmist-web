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
			this.route('hospital', { path: "hospital/:pid/:uuid" });
			this.route('hosp-detail', { path: "detail/:pid/:uuid/:hospid" });
			this.route('result', function() {
				this.route('whole');
				this.route('hospital-report');
				this.route('represent-report');
				this.route('resource');
				this.route('represent');
			});
		});
		this.route('v2', { path: 'v2/tm' });
	});
	this.route('nhwa', function() { this.route('v1') });
	this.route('demo');
});

export default Router;