import { generateUniqueId } from '@/utils';
import { BlockDivilerTypeEnum, BlockImagePostionEnum, BlockTypeEnum } from '../enum/contentEnum';

export class BlockItem {
	constructor(data?: Partial<BlockItem>) {
		if (!data) return;
		const {
			blockType = BlockTypeEnum.TEXT,
			content = '',
			imageId = '',
			imageExt = '',
			imagePos = BlockImagePostionEnum.LEFT,
			imageAlt = '',
			videoPath = '',
			divilerType = BlockDivilerTypeEnum.SOLID,
			label = '',
		} = data;
		this.blockType = blockType;
		this.content = content;
		this.imageId = imageId;
		this.imageExt = imageExt;
		this.imagePos = imagePos;
		this.imageAlt = imageAlt;
		this.videoPath = videoPath;
		this.divilerType = divilerType;
		this.label = label;
	}
	blockType: BlockTypeEnum = BlockTypeEnum.TEXT;
	content: string = '';
	imageId: string = '';
	imageExt: string = '';
	imagePos: BlockImagePostionEnum = BlockImagePostionEnum.LEFT;
	imageAlt: string = '';
	videoPath: string = '';
	divilerType: BlockDivilerTypeEnum = BlockDivilerTypeEnum.SOLID;
	label: string = '';
	hash = generateUniqueId();
}
