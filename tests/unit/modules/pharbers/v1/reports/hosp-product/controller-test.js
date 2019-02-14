import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | pharbers/v1/reports/hosp-product', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:pharbers/v1/reports/hosp-product');
    assert.ok(controller);
  });
});
