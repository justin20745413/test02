export class FileDTO {
	constructor(data?: Omit<FileDTO, 'fileSize'>) {
		if (!data) return;
		const { fileId = '', fileName = '', fileExt } = data;
		this.fileId = fileId;
		this.fileName = fileName;
		this.fileExt = fileExt;
	}
	fileId: string = '';
	fileName: string = '';
	fileSize: number = 0; // 檔案大小
	fileExt: string = ''; // 檔案類別
}
