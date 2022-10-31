/**
 * @description merge p2 to p1
 * @param p1 主对象
 * @param p2 副对象
 * @return {*} T
 */
export function mergeObjectFnc<T, K extends T>(p1: T, p2?: Partial<K>): T {
    let data = {...p1}
    if (p2) {
        for (let key in p1) {
            if (typeof p1[key] === 'object') {
                data[key] = mergeObjectFnc(data[key], p2[key])
            } else {
                data[key] = p2[key] || data[key]
            }
        }
    }
    return data
}

/**
 * @description 渲染className
 * @param prefixClass 前置class
 * @param classNames class对象
 * @return {*} string
 */
export function renderClassNames(prefixClass: string, classNames: Record<string, boolean>) {
    let classNameStr = `${prefixClass}`;
    for (let key in classNames) {
        if (classNames[key]) {
            classNameStr = `${classNameStr} ${key}`
        }
    }
    return classNameStr
}