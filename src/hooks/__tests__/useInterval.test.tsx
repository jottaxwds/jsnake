import { renderHook } from '@testing-library/react-hooks';
import useInterval from '../useInterval';

jest.useFakeTimers();

describe('useInterval', () => {
  test('should call callback function after given delay', () => {
    const callback = jest.fn();
    const delay = 1000;
    renderHook(() => useInterval(callback, delay));

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  test('should not call callback function if delay is null', () => {
    const callback = jest.fn();
    const delay = null;
    renderHook(() => useInterval(callback, delay));

    jest.advanceTimersByTime(10000);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});