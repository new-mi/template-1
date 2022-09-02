export type UseShallow<S> = <U>(selector: (state: S) => U) => U;
