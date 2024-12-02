/**
 * 分頁格式
 */
export class PageDTO {
	constructor(data?: PageDTO) {
		if (!data) return;
		const { page = 1, count = 10, sortList = [] } = data;
		this.page = page > 0 ? page : 1;
		this.count = count > 0 ? count : 10;
		this.sortList = sortList;
	}
	page: number = 1; //	頁數
	count: number = 10; // 顯示筆數
	sortList: PageSortItem[] = []; // 排序陣列
}
export class PageSortItem {
	sort = ''; //	排序欄位
	isDesc = false; //	Boolean	是否為倒序	false: asc true: desc
}

export interface IPageRes {
	totalCount: number; //	總筆數
	totalPage: number; //	總頁數
}
