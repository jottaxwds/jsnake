import { act, renderHook } from '@testing-library/react-hooks';
import useArrowKeys from '../useArrowKeys';
import { Direction } from '../../engine/types';

describe('useArrowKeys', () => {

  test('Should set arrowDirection correctly when a key is pressed', async () => {
    const { result } = renderHook(() => useArrowKeys());

    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

    act(() => {
      window.dispatchEvent(event);
    });

    expect(result.current.arrowDirection).toBe('ArrowUp' as Direction);
  });
});