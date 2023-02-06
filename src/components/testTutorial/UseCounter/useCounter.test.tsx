import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("count should be initialVal", async () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test("Should increase count to 20", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.Increament());
    expect(result.current.count).toBe(20);
  });

  test("Should decrease count to 0", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.Decreament());
    expect(result.current.count).toBe(0);
  });
});
