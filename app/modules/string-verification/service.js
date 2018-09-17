import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    stringIsEmpty(object) {
        let readyForVerficationArray = object.included;
        let resultArray = readyForVerficationArray.map((oneitem) => {
            let result = Object.keys(oneitem.attributes).every(function(item) {
                return !isEmpty(oneitem.attributes[item])
            });
            return result;
        })
        let resultBoolean = resultArray.every(function(item) {
            return item == true;
        })
        if (resultBoolean) {
            return {
                state: true,
                object: object
            }
        } else {
            return {
                state: false,
                object: object
            }
        }
        // let result = Object.keys(object.attributes).every(function(item) {
        //     return !isEmpty(object.attributes[item])
        // });
        // console.log(result);
        // if (result) {
        //     return { state: true }
        // } else {
        //     return {
        //         state: false,
        //         id: object.id,
        //         type: object.type
        //     }
        // }
    },
    stringIsLegal(object) {
        let readyForVerficationArray = object.included;
        let resultArray = readyForVerficationArray.map((oneitem) => {
            let result = Object.keys(oneitem.attributes).every(function(item) {
                return !isEmpty(oneitem.attributes[item])
            });
            return result;
        })
        let resultBoolean = resultArray.every(function(item) {
            return item == true;
        })
        if (resultBoolean) {
            return {
                state: true,
                object: object
            }
        } else {
            return {
                state: false,
                object: object
            }
        }
    }
});