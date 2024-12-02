/**
 * 管理員類別
 */
export enum AdminTypeEnum {
	NORMAL_USER = 'A', // 一般管理員
	SUPER_USER = 'SA', // 超級管理員
}

/**
 * 管理員修改密碼狀態
 */
export enum AdminEditPasswordEnum {
	SUCCESS = 0, // 更改成功
	LAST_PASSWORD_ERROR = -1, // 舊密碼錯誤
}

/**
 * 管理員帳號狀態
 */
export enum AdminStatusEnum {
	MAIL_NOT_VERIFIED = 0, // 信箱尚未驗證
	FIRST_LOGGING = 1, // 初次登入
	ACTIVED = 2, // 正常使用帳號
	SUSPENDED = -1, // 帳號已被停權
	ACCOUNT_ERROR = -3, // 帳號或密碼錯誤
	ERROE_EXCEEDING_LIMIT = -4, // 錯誤超過限制次數
}

/**
 * 管理員信箱驗證狀態
 */
export enum AdminVerifyMailEnum {
	SUCCESS = 0, // 驗證成功
	FAILED = -1, // 驗證失敗
	VERIFYED = -2, // 已經驗證過
}

/**
 * 模組權限狀態
 */
export enum FunctionStatusEnum {
	EDITABLE = 'E', // 可編輯
	READONLY = 'V', // 僅可查看
	DISABLED = 'B', // 不可使用
}
