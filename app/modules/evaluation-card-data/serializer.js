import PharbersSerializer from 'pharbers-route-addon/serializer/phserializer';
import { decamelize } from '@ember/string';
import { pluralize, singularize } from 'ember-inflector';
/**
 * 所有的Serializer都要继承phserializer
 * 数据有特殊需求直接在normalizeResponse自己修改
 * @type {String}
 */
export default PharbersSerializer.extend({
    primaryKey: 'id',
    keyForAttribute(key) {
        return key;
    },
    keyForRelationship(key) {
        return key;
    },
    normalizeResponse(store, model, payload) {
        this._super(...arguments);
        return payload;
    },
    payloadKeyFromModelName(modelName) {
        return modelName
    },
    modelNameFromPayloadKey(modelName) {
        return modelName.replace(/_/g, '-')
    }
});