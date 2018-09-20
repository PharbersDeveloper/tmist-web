import Service from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    stringIsEmpty(object, hospRecord, repRecord, manRecord) {
        let readyForVerficationArray = object.included;
        let readyForVerficationArrayResult = readyForVerficationArray.filter((oneitem) => {

            if (oneitem.type == 'hospitalbaseinfo' || oneitem.type == 'repinputinfo' || oneitem.type == "managerinputinfo") {
                let result = Object.keys(oneitem.attributes).every(function(item) {
                    return !isEmpty(oneitem.attributes[item])
                });
                return result != undefined;
            }
        });
        let resultArray = readyForVerficationArray.map((oneitem) => {

            if (oneitem.type == 'hospitalbaseinfo' || oneitem.type == 'repinputinfo' || oneitem.type == "managerinputinfo") {
                let result = Object.keys(oneitem.attributes).every(function(item) {
                    return !isEmpty(oneitem.attributes[item])
                });
                return result;
            }
        });
        // console.log(resultArray);
        let resultArrayNotUndefined = resultArray.filter((item) => {
            return item != undefined;
        })
        // console.log(resultArrayNotUndefined);
        let firstFalseIndex = resultArrayNotUndefined.indexOf(false);
        let firstFalseObject = {};
        let hintContent = "请填写相关内容";
        if (firstFalseIndex >= 0) {
            firstFalseObject = readyForVerficationArrayResult[firstFalseIndex];
            console.log(firstFalseIndex);
            console.log(firstFalseObject);
            console.log(manRecord);
            console.log(repRecord);
            console.log(hospRecord);
            if (manRecord.id == firstFalseObject.id) {
                hintContent = '经理信息 未填写完成';
            };
            repRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    console.log(item);
                    console.log("aaaaaaaaaa")
                    hintContent = item.repInfo.rep_name + ' 未填写完成';
                }
            });
            hospRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.hospital.hosp_name + ' 未填写完成';
                }
            });
        };
        let resultBoolean = resultArrayNotUndefined.every(function(item) {
            return item == true;
        });
        if (resultBoolean) {
            // return {
            //     state: true,
            //     object: object
            // }
            console.log("进入合法字符验证。")
            return this.stringIsLegal(object, hospRecord, repRecord, manRecord);
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
        let readyForVerficationArrayResult = readyForVerficationArray.filter((oneitem) => {

            if (oneitem.type == 'hospitalbaseinfo' || oneitem.type == 'repinputinfo' || oneitem.type == "managerinputinfo") {
                let result = Object.keys(oneitem.attributes).every(function(item) {
                    return !isEmpty(oneitem.attributes[item])
                });
                return result != undefined;
            }
        });
        let resultArray = readyForVerficationArray.map((oneitem) => {
            let result = Object.keys(oneitem.attributes).every(function(item) {
                return !isNaN(oneitem.attributes[item])
            });
            return result;
        });
        let resultArrayNotUndefined = resultArray.filter((item) => {
            return item != undefined;
        });
        console.log(resultArrayNotUndefined)
        let firstFalseIndex = resultArrayNotUndefined.indexOf(false);
        let firstFalseObject = {};
        let hintContent = "请填写相关内容";
        if (firstFalseIndex >= 0) {
            firstFalseObject = readyForVerficationArrayResult[firstFalseIndex];
            hospRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.hospital.hosp_name + '的内容不符合规范';
                }
            });
            repRecord.map((item) => {
                if (item.id == firstFalseObject.id) {
                    hintContent = item.repInfo.rep_name + ' 的内容不符合规范';
                }
            });
            if (manRecord.id == firstFalseObject.id) {
                hintContent = '经理信息 的内容不符合规范';
            }
        };
        let resultBoolean = resultArrayNotUndefined.every(function(item) {
            return item == true;
        });
        if (resultBoolean) {
            console.log("it is true")
            return {
                state: true,
                object: object
            }
        } else {
            console.log("it is falseeeeeeeeeeee")
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