import { useCounterStoreShallow } from '@/stores/counter';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

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
      <h2>{value}</h2>
      <br />
      <button onClick={() => increase(2)}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
    </>
  );
});

export default TestTemplate;
