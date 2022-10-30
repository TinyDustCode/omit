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