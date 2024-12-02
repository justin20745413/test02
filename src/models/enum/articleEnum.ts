export enum ArticleStatusEnum {
	ALL = '',
	VISABLE = '001',
	HIDE = '002',
}

export enum ArticleTypeEnum {
	/** 一般文章 */
	GENERAL_ARTICLE = '001',
	/** 附件 */
	ATTACHMENT = '002',
	/** 外部連結 */
	EXTERNAL_LINK = '003',
	/** 連結按鈕 */
	LINK_BUTTON = '004',
	/** 區塊文章 */
	BLOCK_ARTICLE = '005',
	/** 摺疊問答 */
	COLLAPSIBLE_FAQ = '006',
	/** 自定義表格 */
	CUSTOM_TABLE = '007',
	/** 縣市導向樣板 */
	COUNTY_TEMPLATE = '008',
	/** 索引區塊 */
	INDEX_BLOCK = '009',
	/** 圖片牆 */
	IMAGE_WALL = '010',
	/** 圖文卡片 */
	IMAGE_TEXT_CARD = '011',
	/** 輪播圖文章 */
	CAROUSEL_ARTICLE = '012',
}

export enum ArticleRecordTypeEnum {
	/** 建立 */
	CREATE = '001',
	/** 異動 */
	MODIFY = '002',
	/** 發布 */
	PUBLISH = '003',
}
