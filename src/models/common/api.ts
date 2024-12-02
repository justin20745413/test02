import type { AxiosResponse } from 'axios';
import type { ApiResponseEnum } from '../enum/apiResponseEnum';

export interface IResponse<T = undefined> {
	code: ApiResponseEnum;
	message: string;
	data: T;
	responseRaw: AxiosResponse;
}
