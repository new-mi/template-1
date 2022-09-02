export interface CounterStore {
  value: number;
  increase: (diff?: number) => void;
  decrease: (diff?: number) => void;
}
