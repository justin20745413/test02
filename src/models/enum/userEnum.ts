export enum LoginStatusEnum {
	/** 正常 */
	NORMAL = '001',
	/** 停權 */
	SUSPENDED = '002',
	/** 首次登入 */
	FIRST_LOGIN = '003',
	/** 密碼逾期 */
	PASSWORD_EXPIRED = '004',
}

export enum UserTypeEnum {
	/** 一般 */
	GENERAL = '001',
	/** 全站管理員 */
	SITE_ADMINISTRATOR = '002',
}

export enum UserStatusEnum {
	/** 啟用 */
	ENABLED = '001',
	/** 停用 */
	DISABLED = '002',
	/** 尚未驗證 */
	NOT_VERIFIED = '003',
	/** 已過期 */
	EXPIRED = '004',
}

export enum PermissionStatusEnum {
	VIEW = '001', // 查看
	EDIT = '002', // 編輯
	DISABLE = '003', // 禁用
}