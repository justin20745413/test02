import { DirectTypeEnum } from '../enum/directEnum';
import { PublishTypeEnum } from '../enum/publishEnum';

export class DirectData {
	constructor(data?: DirectData) {
		if (!data) return;
		const {
			directType = DirectTypeEnum.NO_ACTION,
			directPath = '',
			directMessage = '',
			directName = '',
			fileId = '',
			publishType = '',
			isDirectOpenNew = false,
		} = data;
		this.directType = directType;
		this.directPath = directPath;
		this.directMessage = directMessage;
		this.directName = directName;
		this.fileId = fileId;
		this.publishType = publishType;
		this.isDirectOpenNew = isDirectOpenNew;
	}
	directType: DirectTypeEnum = DirectTypeEnum.NO_ACTION; //  導向類型
	directPath: string = ''; //  導轉位置
	directMessage: string = ''; //  導轉訊息
	directName: string = ''; //  導轉目標
	fileId: string = ''; //  檔案ID
	publishType: string = ''; //  發布類型
	isDirectOpenNew: boolean = false; // 是否開新分頁
}
export const getDefaultDirectDataProps = (data?: any): DirectData => {
	return {
		directMessage: data?.directMessage || '',
		directPath: data?.directPath || '',
		directName: data?.directName || '',
		directType: data?.directType || DirectTypeEnum.NO_ACTION,
		publishType: data?.publishType || PublishTypeEnum.UNPUBLISHED,
		isDirectOpenNew: data?.isDirectOpenNew || false,
	};
};
