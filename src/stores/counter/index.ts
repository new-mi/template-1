import type { UseShallow } from '@/types';
import create, { StateCreator } from 'zustand';
import shallow from 'zustand/shallow';
import type { CounterStore } from './types';

const store: StateCreator<CounterStore> = (setState) => ({
  value: 0,
  increase: (diff) => {
    setState(({ value }) => ({ value: value + 1 * (!diff || diff < 1 ? 1 : diff) }));
  },
  decrease: (diff) => {
    setState(({ value }) => ({ value: value - 1 * (!diff || diff < 1 ? 1 : diff) }));
  },
});

export const useCounterStore = create(store);
export const useCounterStoreShallow: UseShallow<CounterStore> = (selector) =>
  useCounterStore(selector, shallow);
