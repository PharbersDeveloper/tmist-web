export function initialize(application) {
	application.inject('route', 'hospitalinput', 'service:hospital-input-Service');
	application.inject('component', 'hospitalinput', 'service:hospital-input-Service');
	application.inject('controller', 'hospitalinput', 'service:hospital-input-Service');
}

export default { name: 'hospitalinput', initialize };