import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			'hospid': '111',
			'name': '中日医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年
			'budget': {
				'total': 800000,
				'used': 60000,
				'percentage': '75%'
			},
			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}, {
			'hospid': '222',
			'name': '皇家医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年
			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}, {
			'hospid': '333',
			'name': '中美医院',
			'level': '综合/三甲', // 类型/等级
			'department': '皮肤科', //特色科室
			'bed': 1000, // 病床数量
			'outpatient': 1234545, // 门诊人次/年
			'surgery': 1000, // 手术台数/年
			'representive': {
				'name': '校长',
				'avatar': '/assets/images/hosp_seller.png'
			}, // 负责代表
			'medicine': [{
				'name': '口服抗生素', // 药品名称
				'potential': '54,561,334', // 药品潜力
				'previoussales': '554,687', //上期销售额
				'contributionrate': '5%', // 贡献率
				'share': '12%' //份额
			}]
		}]

	}
});