import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { useCounterStoreShallow } from '@/stores/counter';
import styles from './index.module.scss';

export const TestTemplate = memo(function TestTemplate() {
  const { id } = useParams();
  const [value, increase, decrease] = useCounterStoreShallow((state) => [
    state.value,
    state.increase,
    state.decrease,
  ]);

  return (
    <>
      <h1>Test Template with id params - {id}</h1>
      <br />
      <h2 className={cn(styles.title, value % 2 === 0 ? styles.green : null)}>{value}</h2>
      <br />
      <button onClick={() => increase(2)}>increase +2</button>
      <button onClick={() => decrease()}>decrease -1</button>
    </>
  );
});

export default TestTemplate;
