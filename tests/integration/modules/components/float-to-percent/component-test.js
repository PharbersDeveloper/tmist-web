import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-to-percent', 'Integration | Component | float to percent', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-to-percent}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#number-to-percent}}
      template block text
    {{/number-to-percent}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
