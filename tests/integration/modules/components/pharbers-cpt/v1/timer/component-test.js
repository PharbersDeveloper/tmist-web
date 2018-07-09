import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pharbers-cpt/v1/timer', 'Integration | Component | pharbers cpt/v1/timer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pharbers-cpt/v1/timer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pharbers-cpt/v1/timer}}
      template block text
    {{/pharbers-cpt/v1/timer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
