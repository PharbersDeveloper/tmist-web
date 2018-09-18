import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    stringIsEmpty(object, hospRecord, repRecord, manRecord) {
        let readyForVerficationArray = object.included;
        let resultArray = readyForVerficationArray.map((oneitem) => {
            let result = Object.keys(oneitem.attributes).every(function(item) {
                return !isEmpty(oneitem.attributes[item])
            });
            return result;
        });

        let firstFalseIndex = resultArray.indexOf(false);
        let firstFalseObject = {};
        let hintContent = "请填写相关内容";
        if (firstFalseIndex >= 0) {
            firstFalseObject = readyForVerficationArray[firstFalseIndex];
            hospRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.hospital.hosp_name + ' 未填写完成';
                }
            });
            repRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.representative.rep_name + ' 未填写完成';
                }
            });
            if (manRecord.id == firstFalseObject.id) {
                hintContent = '经理信息 未填写完成';
            }
        };
        let resultBoolean = resultArray.every(function(item) {
            return item == true;
        });
        if (resultBoolean) {
            // return {
            //     state: true,
            //     object: object
            // }
            this.stringIsLegal(object, hospRecord, repRecord, manRecord);
        } else {
            return {
                state: false,
                object: object,
                specific: firstFalseObject,
                hintContent: hintContent
            }
        }
    },

    stringIsLegal(object, hospRecord, repRecord, manRecord) {
        let readyForVerficationArray = object.included;
        let resultArray = readyForVerficationArray.map((oneitem) => {
            let result = Object.keys(oneitem.attributes).every(function(item) {
                return !isNaN(oneitem.attributes[item])
            });
            return result;
        });

        let firstFalseIndex = resultArray.indexOf(false);
        let firstFalseObject = {};
        let hintContent = "请填写相关内容";
        if (firstFalseIndex >= 0) {
            firstFalseObject = readyForVerficationArray[firstFalseIndex];
            hospRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.hospital.hosp_name + '的内容不符合规范';
                }
            });
            repRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.representative.rep_name + ' 的内容不符合规范';
                }
            });
            if (manRecord.id == firstFalseObject.id) {
                hintContent = '经理信息 的内容不符合规范';
            }
        };
        let resultBoolean = resultArray.every(function(item) {
            return item == true;
        });
        if (resultBoolean) {
            return {
                state: true,
                object: object
            }
        } else {
            return {
                state: false,
                object: object,
                specific: firstFalseObject,
                hintContent: hintContent
            }
        }
    },

    checkBudget(hospRecord, totalBudget) {
        let hospBudget = hospRecord.map((hosp) => {
            if (hosp.budget) {
                return Number(hosp.budget);
            } else {
                return 0;
            }
        });
        let sum = function sumArr(arr) {
            return arr.reduce(function(prev, cur) {
                return prev + cur;
            }, 0);
        };
        if (sum(hospBudget) < totalBudget) {
            return {
                state: true,
            }
        } else {
            return {
                state: false,
                hintContent: '医院总预算超出预设值。'
            }
        }
    },

    checkDays(repRecord, manRecord) {
        let repDaysOverState = repRecord.forEach((rep) => {
            if (rep.used_days > rep.total_days || rep.total_used_days > rep.total_days) {
                return false;
            } else {
                return true;
            }
        });
        let firstFalseIndex = repDaysOverState.indexOf(false);
        let hintContent = "";
        if (firstFalseIndex >= 0) {
            return {
                state: false,
                hintContent: repRecord[firstFalseIndex].rep_name + "分配时间超额。"
            }
        } else {
            return {
                state: true,
            }

        }
    }
});