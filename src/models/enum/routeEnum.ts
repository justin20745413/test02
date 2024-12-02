import type { IMap } from '../common/base';

export enum RouteNameEnum {
	BASE_SETTING = 'BaseSetting',
	PAGE_HEADER = 'PageHeader',
	PAGE_FOOTER = 'PageFooter',
	HOME_PAGE = 'HomePage',
	CAROUSEL = 'Carousel',
	IMAGE_CARDS = 'ImageCards',
	CALENDAR = 'Calendar',
	CALENDAR_SEARCH = 'CalendarSearch',
	BULLETIN = 'Bulletin',
	POLICY = 'Policy',
	ACTIVITY = 'Activity',
	CENTRAL_LINK = 'CentralLink',
	VIDEO = 'Video',
	LINK = 'Link',
	MENU = 'Menu',
	ARTICLE = 'Article',
	USER = 'User',
	PERMISSION = 'Permission',
	OFFICE = 'Office',
	MAIL = 'Mail',
	LOG = 'Log',
}
export enum FeatureCodeEnum {
	BASE_SETTING = 'A01',
	PAGE_HEADER = 'A02',
	PAGE_FOOTER = 'A03',
	HOME_PAGE = 'B01',
	CAROUSEL = 'B02',
	IMAGE_CARDS = 'B03',
	CALENDAR = 'B04',
	CALENDAR_SEARCH = 'B04',
	BULLETIN = 'B05',
	POLICY = 'B06',
	ACTIVITY = 'B07',
	CENTRAL_LINK = 'B08',
	VIDEO = 'B09',
	LINK = 'B10',
	MENU = 'C01',
	ARTICLE = 'D01',
	USER = 'E01',
	PERMISSION = 'E02',
	OFFICE = 'E03',
	MAIL = 'F01',
	LOG = 'G01',
}
export enum SystemRouteNameEnum {
	WEB_MANAGER = 'WebManager',
	SYSTEM_USER = 'SystemUser',
	GROUP = 'Group',
	ORGAN = 'Organ',
	CHANGE_LOG = 'ChangeLog',
	FLOW_LOG = 'FlowLog',
}

export const ROUTE_NAME_CODE_MAP: IMap<FeatureCodeEnum | RouteNameEnum> = {
	[RouteNameEnum.BASE_SETTING]: FeatureCodeEnum.BASE_SETTING,
	[FeatureCodeEnum.BASE_SETTING]: RouteNameEnum.BASE_SETTING,
	[RouteNameEnum.PAGE_HEADER]: FeatureCodeEnum.PAGE_HEADER,
	[FeatureCodeEnum.PAGE_HEADER]: RouteNameEnum.PAGE_HEADER,
	[RouteNameEnum.PAGE_FOOTER]: FeatureCodeEnum.PAGE_FOOTER,
	[FeatureCodeEnum.PAGE_FOOTER]: RouteNameEnum.PAGE_FOOTER,
	[RouteNameEnum.HOME_PAGE]: FeatureCodeEnum.HOME_PAGE,
	[FeatureCodeEnum.HOME_PAGE]: RouteNameEnum.HOME_PAGE,
	[RouteNameEnum.CAROUSEL]: FeatureCodeEnum.CAROUSEL,
	[FeatureCodeEnum.CAROUSEL]: RouteNameEnum.CAROUSEL,
	[RouteNameEnum.IMAGE_CARDS]: FeatureCodeEnum.IMAGE_CARDS,
	[FeatureCodeEnum.IMAGE_CARDS]: RouteNameEnum.IMAGE_CARDS,
	[RouteNameEnum.CALENDAR]: FeatureCodeEnum.CALENDAR,
	[FeatureCodeEnum.CALENDAR]: RouteNameEnum.CALENDAR,
	[RouteNameEnum.BULLETIN]: FeatureCodeEnum.BULLETIN,
	[FeatureCodeEnum.BULLETIN]: RouteNameEnum.BULLETIN,
	[RouteNameEnum.POLICY]: FeatureCodeEnum.POLICY,
	[FeatureCodeEnum.POLICY]: RouteNameEnum.POLICY,
	[RouteNameEnum.ACTIVITY]: FeatureCodeEnum.ACTIVITY,
	[FeatureCodeEnum.ACTIVITY]: RouteNameEnum.ACTIVITY,
	[RouteNameEnum.CENTRAL_LINK]: FeatureCodeEnum.CENTRAL_LINK,
	[FeatureCodeEnum.CENTRAL_LINK]: RouteNameEnum.CENTRAL_LINK,
	[RouteNameEnum.VIDEO]: FeatureCodeEnum.VIDEO,
	[FeatureCodeEnum.VIDEO]: RouteNameEnum.VIDEO,
	[RouteNameEnum.LINK]: FeatureCodeEnum.LINK,
	[FeatureCodeEnum.LINK]: RouteNameEnum.LINK,
	[RouteNameEnum.MENU]: FeatureCodeEnum.MENU,
	[FeatureCodeEnum.MENU]: RouteNameEnum.MENU,
	[RouteNameEnum.ARTICLE]: FeatureCodeEnum.ARTICLE,
	[FeatureCodeEnum.ARTICLE]: RouteNameEnum.ARTICLE,
	[RouteNameEnum.USER]: FeatureCodeEnum.USER,
	[FeatureCodeEnum.USER]: RouteNameEnum.USER,
	[RouteNameEnum.PERMISSION]: FeatureCodeEnum.PERMISSION,
	[FeatureCodeEnum.PERMISSION]: RouteNameEnum.PERMISSION,
	[RouteNameEnum.OFFICE]: FeatureCodeEnum.OFFICE,
	[FeatureCodeEnum.OFFICE]: RouteNameEnum.OFFICE,
	[RouteNameEnum.MAIL]: FeatureCodeEnum.MAIL,
	[FeatureCodeEnum.MAIL]: RouteNameEnum.MAIL,
	[RouteNameEnum.LOG]: FeatureCodeEnum.LOG,
	[FeatureCodeEnum.LOG]: RouteNameEnum.LOG,
};
