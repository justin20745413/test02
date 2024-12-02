/**
 * 區塊類型
 */
export enum BlockTypeEnum {
	DIVIDER = 'Divider', // 分隔線
	IMAGE = 'Image', // 圖片
	LABLE_INFO = 'LabelInfo', // 標籤與內文
	TEXT_WRAP_IMAGE = 'TextWrapImage', // 文繞圖
	TEXT = 'Text', // 文字
	VEDIO = 'Vedio', // 影片
}

/**
 * 文章內容類型
 */
export enum ContentTypeEnum {
	EMPTY = '',
	ARTICLE = 'article', // 一般文章
	ATTACHMENT = 'attachment', // 附件文章
	AREA_CARD_LIST = 'areaCardList', // 區塊卡片列表
	CAROUSEL = 'carousel', // 輪播圖
	CITYLINK = 'cityLink', // 各縣市連結
	EXPANSION_CARD_LIST = 'expansionCardList', // 開合區塊列表
	IMAGE_CARD_LIST = 'imageCardList', // 圖片卡片列表
	IMAGE_WELL = 'imageWell', // 圖片牆
	INDEX_CARD_LIST = 'indexCardList', // 索引區塊列表
	LINK_LIST = 'linkList', // 連結列表
	LINK = 'link', // 外部連結
	TABLE_VIEW = 'tableView', // 表格
}

/**
 * 圖片區塊位置
 */
export enum BlockImagePostionEnum {
	LEFT = 'left',
	RIGHT = 'right',
}

/**
 * 分隔線樣式
 */
export enum BlockDivilerTypeEnum {
	SOLID = '1',
}
