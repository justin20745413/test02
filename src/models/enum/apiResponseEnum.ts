export enum ApiResponseEnum {
	// Spring
	SUCCESS = '0', // 操作成功

	// Request errors
	REQUEST_FORMAT_ERROR = '-1', // Request 格式解析錯誤
	REQUEST_KEY_ERROR = '-2', // Request 傳入參數錯誤
	HTTP_ERROR = '-3', // 無效的 HTTP URL
	HTTP_METHOD_ERROR = '-4', // HTTP Method 格式錯誤
	TIME_FORMAT_ERROR = '-5', // 時間或日期格式錯誤
	INVALID_DATA_FORMAT = '-6', // 資料不符合檢查規則
	SYS_PARAMETER_ERROR = '-7', // 系統參數異常

	// Account login errors
	CAPTCHA_FAILED = '-100', // 驗證碼錯誤
	CAPTCHA_EXPIRED = '-101', // 驗證碼已失效
	INVALID_AC = '-102', // 無效的帳號
	INVALID_CID = '-103', // 無效的密碼
	LOGIN_FAILED = '-104', // 登入失敗，請檢查您的帳號或密碼
	AC_LOCKED = '-105', // 帳號已被鎖定
	AC_DEACTIVATED = '-106', // 帳號已停用
	LOGIN_IP_RESTRICT = '-107', // 登入 IP 被限制
	FIRST_CID_CHANGE = '-108', // 首次登入請修改密碼
	CID_REUSE_RESTRICT = '-109', // 不得使用此密碼
	CID_EXPIRED = '-110', // 密碼已過期，請重設您的密碼
	AC_NOT_PERMISSION = '-111', // 帳號無操作權限

	// Common
	DATA_NOT_FOUND = '-200', // 查無資料
	DATA_EXIST = '-201', // 資料已存在
	DATA_MODIFY_FAILED = '-202', // 資料異動失敗
	DATA_DELETE_RESTRICT = '-203', // 資料禁止刪除
	DATA_IS_PRIVATE = '-204', // 禁止存取的資料
	DATA_CONFLICT = '-205', // 資料衝突
	DATA_MODIFY_RESTRICT = '-206', // 資料禁止修改

	// Custom functionality
	DIRECT_TYPE_RESTRICT = '-300', // 導轉類型限制
	DIRECT_ARTICLE_NOT_FOUND = '-301', // 導轉設定不存在文章代碼錯誤
	DIRECT_MENU_NOT_FOUND = '-302', // 導轉設定不存在選單代碼錯誤
	MENU_LEVEL_RESTRICT = '-303', // 選單層數限制

	// Permission checks
	UNAUTHORIZED_ACCESS = '-400', // 未授權的存取，需要登入
	AUTHORIZATION_FAILED = '-401', // Token 檢驗失敗
	AUTHORIZATION_EXPIRED = '-402', // Token 過期
	AUTHORIZATION_LOGOUT = '-403', // 授權已被登出
	PERMISSION_DENIED = '-404', // 權限不足，無法執行此操作
	CENTRAL_ACCESS_ONLY = '-405', // 僅由中央人員使用
	PUBLISH_DENIED = '-406', // 沒有選單發布權限
	ARTICLE_MODIFY_DENIED = '-407', // 沒有文章異動權限

	// External system errors
	CONNECT_ERROR = '-800', // 服務串接失敗
	SCHEDULE_ERROR = '-801', // 排程錯誤
	EMAIL_SENDING_ERROR = '-802', // 信件發送失敗
	MINIO_ERROR = '-803', // Minio 操作錯誤
	DB_ERROR = '-804', // 資料庫錯誤
	IO_ERROR = '-805', // IO 錯誤
	EXCEL_ERROR = '-806', // Excel 處理錯誤
	CHANGE_LOG_ERROR = '-807', // 異動紀錄異常

	// File errors
	UPLOAD_FAILED = '-900', // 上傳檔案失敗
	FILE_TOO_BIG = '-901', // 上傳檔案超過限制大小
	FILE_EXTENSION_LIMIT = '-902', // 不支援此檔案類型
	FILE_NOT_FOUND = '-903', // 檔案不存在

	// Unknown
	UNKNOWN_ERROR = '-999', // 未定義的錯誤
}
