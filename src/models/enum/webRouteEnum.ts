export enum WebTypeEnum {
	/** 本會網站 */
	CENTRAL_SITE = '001',
	/** 所屬網站 */
	AFFILIATED_SITE = '002',
	/** 主題網站 */
	THEME_SITE = '003',
	/** 英文網站 */
	ENGLISH_SITE = '004',
}

export enum WebRouteStatusEnum {
	EMPTY = '',
	/** 啟用 / 顯示 */
	ENABLED = '001',
	/** 停用 / 隱藏 */
	DISABLED = '002',
}

export enum CountyEnum {
	/** 中央 */
	CENTRAL = 'central',
	/** 台北市 */
	TAIPEI_CITY = 'mect',
	/** 新北市 */
	NEW_TAIPEI_CITY = 'tpcec',
	/** 桃園市 */
	TAOYUAN_CITY = 'tyec',
	/** 台中市 */
	TAICHUNG_CITY = 'tcec',
	/** 台南市 */
	TAINAN_CITY = 'tnec',
	/** 高雄市 */
	KAOHSIUNG_CITY = 'khec',
	/** 新竹縣 */
	HSINCHU_COUNTY = 'hccec',
	/** 苗栗縣 */
	MIAOLI_COUNTY = 'mlec',
	/** 彰化縣 */
	CHANGHUA_COUNTY = 'chec',
	/** 南投縣 */
	NANTOU_COUNTY = 'ntec',
	/** 雲林縣 */
	YUNLIN_COUNTY = 'ylec',
	/** 嘉義縣 */
	CHIAYI_COUNTY = 'cycec',
	/** 屏東縣 */
	PINGTUNG_COUNTY = 'ptec',
	/** 宜蘭縣 */
	YILAN_COUNTY = 'ilec',
	/** 花蓮縣 */
	HUALIEN_COUNTY = 'hlec',
	/** 台東縣 */
	TAITUNG_COUNTY = 'ttec',
	/** 澎湖縣 */
	PENGHU_COUNTY = 'phec',
	/** 金門縣 */
	KINMEN_COUNTY = 'kmec',
	/** 連江縣 */
	LIENCHIANG_COUNTY = 'lcec',
	/** 基隆市 */
	KEELUNG_CITY = 'klec',
	/** 新竹市 */
	HSINCHU_CITY = 'hcec',
	/** 嘉義市 */
	CHIAYI_CITY = 'cyec',
	/** 英文版 */
	ENGLISH_VERSION = 'english',
}

export const CITY_OPTIONS = [
	{ code: CountyEnum.CENTRAL, mail: ['post@cec.gov.tw'], name: '中央' },
	{ code: CountyEnum.TAIPEI_CITY, mail: ['post01@cec.gov.tw'], name: '台北市' },
	{ code: CountyEnum.NEW_TAIPEI_CITY, mail: ['post02@cec.gov.tw'], name: '新北市' },
	{ code: CountyEnum.TAOYUAN_CITY, mail: ['post07@cec.gov.tw'], name: '桃園市' },
	{ code: CountyEnum.TAICHUNG_CITY, mail: ['post03@cec.gov.tw'], name: '台中市' },
	{ code: CountyEnum.TAINAN_CITY, mail: ['post04@cec.gov.tw'], name: '台南市' },
	{ code: CountyEnum.KAOHSIUNG_CITY, mail: ['post05@cec.gov.tw'], name: '高雄市' },
	{ code: CountyEnum.HSINCHU_COUNTY, mail: ['hccec00@cec.gov.tw'], name: '新竹縣' },
	{ code: CountyEnum.MIAOLI_COUNTY, mail: ['mlec09@cec.gov.tw'], name: '苗栗縣' },
	{ code: CountyEnum.CHANGHUA_COUNTY, mail: ['post11@cec.gov.tw'], name: '彰化縣' },
	{ code: CountyEnum.NANTOU_COUNTY, mail: ['post10@cec.gov.tw'], name: '南投縣' },
	{
		code: CountyEnum.YUNLIN_COUNTY,
		mail: ['ylec04@cec.gov.tw', 'ylec03@cec.gov.tw'],
		name: '雲林縣',
	},
	{ code: CountyEnum.CHIAYI_COUNTY, mail: ['post13@cec.gov.tw'], name: '嘉義縣' },
	{ code: CountyEnum.PINGTUNG_COUNTY, mail: ['ptec06@cec.gov.tw'], name: '屏東縣' },
	{ code: CountyEnum.YILAN_COUNTY, mail: ['post06@cec.gov.tw'], name: '宜蘭縣' },
	{
		code: CountyEnum.HUALIEN_COUNTY,
		mail: ['post16@cec.gov.tw', 'hlec011@cec.gov.tw'],
		name: '花蓮縣',
	},
	{ code: CountyEnum.TAITUNG_COUNTY, mail: ['ttec07@cec.gov.tw'], name: '台東縣' },
	{ code: CountyEnum.PENGHU_COUNTY, mail: ['post17@cec.gov.tw'], name: '澎湖縣' },
	{ code: CountyEnum.KINMEN_COUNTY, mail: ['kmec03@cec.gov.tw'], name: '金門縣' },
	{ code: CountyEnum.LIENCHIANG_COUNTY, mail: ['lcec02@cec.gov.tw'], name: '連江縣' },
	{ code: CountyEnum.KEELUNG_CITY, mail: ['klec10@cec.gov.tw'], name: '基隆市' },
	{ code: CountyEnum.HSINCHU_CITY, mail: ['hcec06@cec.gov.tw'], name: '新竹市' },
	{
		code: CountyEnum.CHIAYI_CITY,
		mail: ['cyec20@cec.gov.tw', 'cyec28@cec.gov.tw', 'cyec30@cec.gov.tw'],
		name: '嘉義市',
	},
	{ code: CountyEnum.ENGLISH_VERSION, mail: ['post@cec.gov.tw'], name: '英文版' },
];

export const MAILBOX_MAP: Record<string, string[]> = {
	[CountyEnum.CENTRAL]: ['post@cec.gov.tw'],
	[CountyEnum.TAIPEI_CITY]: ['post01@cec.gov.tw'],
	[CountyEnum.NEW_TAIPEI_CITY]: ['post02@cec.gov.tw'],
	[CountyEnum.TAOYUAN_CITY]: ['post07@cec.gov.tw'],
	[CountyEnum.TAICHUNG_CITY]: ['post03@cec.gov.tw'],
	[CountyEnum.TAINAN_CITY]: ['post04@cec.gov.tw'],
	[CountyEnum.KAOHSIUNG_CITY]: ['post05@cec.gov.tw'],
	[CountyEnum.HSINCHU_COUNTY]: ['hccec00@cec.gov.tw'],
	[CountyEnum.MIAOLI_COUNTY]: ['mlec09@cec.gov.tw'],
	[CountyEnum.CHANGHUA_COUNTY]: ['post11@cec.gov.tw'],
	[CountyEnum.NANTOU_COUNTY]: ['post10@cec.gov.tw'],
	[CountyEnum.YUNLIN_COUNTY]: ['ylec04@cec.gov.tw', 'ylec03@cec.gov.tw'],
	[CountyEnum.CHIAYI_COUNTY]: ['post13@cec.gov.tw'],
	[CountyEnum.PINGTUNG_COUNTY]: ['ptec06@cec.gov.tw'],
	[CountyEnum.YILAN_COUNTY]: ['post06@cec.gov.tw'],
	[CountyEnum.HUALIEN_COUNTY]: ['post16@cec.gov.tw', 'hlec011@cec.gov.tw'],
	[CountyEnum.TAITUNG_COUNTY]: ['ttec07@cec.gov.tw'],
	[CountyEnum.PENGHU_COUNTY]: ['post17@cec.gov.tw'],
	[CountyEnum.KINMEN_COUNTY]: ['kmec03@cec.gov.tw'],
	[CountyEnum.LIENCHIANG_COUNTY]: ['lcec02@cec.gov.tw'],
	[CountyEnum.KEELUNG_CITY]: ['klec10@cec.gov.tw'],
	[CountyEnum.HSINCHU_CITY]: ['hcec06@cec.gov.tw'],
	[CountyEnum.CHIAYI_CITY]: ['cyec20@cec.gov.tw', 'cyec28@cec.gov.tw', 'cyec30@cec.gov.tw'],
	[CountyEnum.ENGLISH_VERSION]: ['post@cec.gov.tw'],
};

export const CountyNameMap = {
	[CountyEnum.CENTRAL]: '中央',
	[CountyEnum.TAIPEI_CITY]: '台北市',
	[CountyEnum.NEW_TAIPEI_CITY]: '新北市',
	[CountyEnum.TAOYUAN_CITY]: '桃園市',
	[CountyEnum.TAICHUNG_CITY]: '台中市',
	[CountyEnum.TAINAN_CITY]: '台南市',
	[CountyEnum.KAOHSIUNG_CITY]: '高雄市',
	[CountyEnum.HSINCHU_COUNTY]: '新竹縣',
	[CountyEnum.MIAOLI_COUNTY]: '苗栗縣',
	[CountyEnum.CHANGHUA_COUNTY]: '彰化縣',
	[CountyEnum.NANTOU_COUNTY]: '南投縣',
	[CountyEnum.YUNLIN_COUNTY]: '雲林縣',
	[CountyEnum.CHIAYI_COUNTY]: '嘉義縣',
	[CountyEnum.PINGTUNG_COUNTY]: '屏東縣',
	[CountyEnum.YILAN_COUNTY]: '宜蘭縣',
	[CountyEnum.HUALIEN_COUNTY]: '花蓮縣',
	[CountyEnum.TAITUNG_COUNTY]: '台東縣',
	[CountyEnum.PENGHU_COUNTY]: '澎湖縣',
	[CountyEnum.KINMEN_COUNTY]: '金門縣',
	[CountyEnum.LIENCHIANG_COUNTY]: '連江縣',
	[CountyEnum.KEELUNG_CITY]: '基隆市',
	[CountyEnum.HSINCHU_CITY]: '新竹市',
	[CountyEnum.CHIAYI_CITY]: '嘉義市',
	[CountyEnum.ENGLISH_VERSION]: '英文版',
};
