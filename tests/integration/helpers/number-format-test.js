import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-format', 'helper:number-format', {
	integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
	this.set('inputValue', '12345，678.11');

	this.render(hbs `{{number-format inputValue}}`);
	window.console.info(this.$().text())
	assert.equal(this.$().text().trim(), '12,345,678.11');
});