export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>
}

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
