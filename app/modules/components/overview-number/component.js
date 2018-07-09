import Component from '@ember/component';

export default Component.extend({
	tagName: '',
	init() {
		this._super(...arguments);
		this.ovData = {
			"index": 0,
			"title": "整体销售增长",
			"type": "sales", // percent ,info
			"value": 111221,
			"ext": {
				"change": "up", // down,stable,none

			}
		}
		/**
		[
                        {
                            "index": 0,
                            "title": "指标最重",
                            "type": "info",
                            "value": "代表1",
                            "ext": {
                                "sub": {
                                    "type": "title",
                                    "value": "指标",
                                    "ext": {
                                        "type": "sales",
                                        "value": 404040
                                    }
                                }
                            }
                        },
                        {
                            "index": 1,
                            "title": "资源最多",
                            "type": "info",
                            "value": "代表2",
                            "ext": {
                                "sub": {
                                    "type": "title",
                                    "value": "预算占比",
                                    "ext": {
                                        "type": "percent",
                                        "change": "none",
                                        "value": 12
                                    }
                                }
                            }
                        },
                        {
                            "index": 2,
                            "title": "达成率最高",
                            "type": "info",
                            "value": "代表3",
                            "ext": {
                                "sub": {
                                    "type": "title",
                                    "value": "达成率",
                                    "ext": {
                                        "type": "percent",
                                        "change": "none",
                                        "value": 121
                                    }
                                }
                            }
                        },
                        {
                            "index": 3,
                            "title": "贡献度最高",
                            "type": "info",
                            "value": "代表4",
                            "ext": {
                                "sub": {
                                    "type": "title",
                                    "value": "贡献度",
                                    "ext": {
                                        "type": "percent",
                                        "change": "none",
                                        "value": 3
                                    }
                                }
                            }
                        }
                    ]
		{
           "index": 0,
           "title": "总销售额",
           "type": "salse",
           "value": 6039535
       },
       {
           "index": 1,
           "title": "整体销售增长",
           "type": "pcrcent",
           "value": 12,
           "ext": {
               "change": "up"
           }
       },
       {
           "index": 2,
           "title": "平均指标达成",
           "type": "pcrcent",
           "value": 123,
           "ext": {
               "change": "none"
           }



		{
			"index": 1,
			"title": 'baifeibi',
			"type": 'percent',
			"value": 12,
			"ext": {
				"change": "up", // down,stable,none
		}
	},
	{
		"index": 1,
		"title": 'baifeibi',
		"type": 'info',
		"value": "hosp-pord",
		"ext": {
			"sub":{
				"title": '份额',
				"type": 'sales',	// percent
				"value": 6525423,		// 12
				"ext": {
					"type": 'percent',
					"change": "up", // down,stable,none
					"value": 7,
				}
			}
	}
}
		*/
	},
});