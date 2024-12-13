const toString = Object.prototype.toString

/**
 * @description: 判斷值是否未某個類型
 */
export function is(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`
}

/**
 * @description:  是否為函數
 */
export function isFunction<T extends (...args: unknown[]) => unknown>(val: unknown): val is T {
    return is(val, 'Function') || is(val, 'AsyncFunction')
}

/**
 * @description: 是否已定義
 */
export const isDef = <T = unknown>(val?: T): val is T => {
    return typeof val !== 'undefined'
}

export const isUnDef = <T = unknown>(val?: T): val is T => {
    return !isDef(val)
}
/**
 * @description: 是否為物件
 */
export const isObject = (val: unknown): val is Record<string, unknown> => {
    return val !== null && is(val, 'Object')
}

/**
 * @description:  是否為時間
 */
export function isDate(val: unknown): val is Date {
    return is(val, 'Date')
}

/**
 * @description:  是否為數值
 */
export function isNumber(val: unknown): val is number {
    return is(val, 'Number')
}

/**
 * @description:  是否為 AsyncFunction
 */
export function isAsyncFunction<T>(val: unknown): val is () => Promise<T> {
    return is(val, 'AsyncFunction')
}

/**
 * @description:  是否為 promise
 */
export function isPromise<T>(val: unknown): val is Promise<T> {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @description:  是否為字串
 */
export function isString(val: unknown): val is string {
    return is(val, 'String')
}

/**
 * @description:  是否為 boolean
 */
export function isBoolean(val: unknown): val is boolean {
    return is(val, 'Boolean')
}

/**
 * @description:  是否為陣列
 */
export function isArray<T>(val: unknown): val is Array<T> {
    return Array.isArray(val)
}

/**
 * @description:  是否為空陣列
 */
export function isArrayEmpty<T>(val: unknown): val is Array<T> {
    return isArray(val) && val.length === 0
}
/**
 * @description: 是否客戶端
 */
export const isClient = () => {
    return typeof window !== 'undefined'
}

/**
 * @description: 是否為瀏覽器
 */
export const isWindow = (val: unknown): val is Window => {
    return typeof window !== 'undefined' && is(val, 'Window')
}

export const isElement = (val: unknown): val is Element => {
    return isObject(val) && !!val.tagName
}

export const isServer = typeof window === 'undefined'

// 是否為圖片節點
export function isImageDom(o: Element) {
    return o && ['IMAGE', 'IMG'].includes(o.tagName)
}

export function isNull(val: unknown): val is null {
    return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
    return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
    return isUnDef(val) || isNull(val)
}

/**
 * 判斷是否 url
 * */
export function isUrl(url: string) {
    return /^(http|https):\/\//g.test(url)
}

export function isEnumValue<T extends { [key: string]: string }>(
    value: string,
    enumObj: T,
): boolean {
    return Object.values(enumObj).includes(value)
}

/**
 * @description:  是否為偶數
 */
export function isEven(val: number): boolean {
    return isNumber(val) && val % 2 === 0
}
