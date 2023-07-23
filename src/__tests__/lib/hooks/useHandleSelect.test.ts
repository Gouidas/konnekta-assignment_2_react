import { renderHook, act } from "@testing-library/react-hooks";
import useHandleSelect from "../../../lib/hooks/useHandleSelect";

describe("useHandleSelect", () => {
  it("handles single select", () => {
    const onSelect = jest.fn();
    const { result } = renderHook(() => useHandleSelect({ onSelect }));

    expect(result.current.selectedValues).toEqual([]);

    act(() => {
      result.current.handleSelect("value1");
    });

    expect(result.current.selectedValues).toEqual(["value1"]);
    expect(onSelect).toHaveBeenCalledWith("value1");
    expect(result.current.isOpen).toBe(false);
  });

  it("handles multiple select", () => {
    const onSelect = jest.fn();
    const { result } = renderHook(() =>
      useHandleSelect({ multiple: true, onSelect })
    );

    expect(result.current.selectedValues).toEqual([]);

    act(() => {
      result.current.handleSelect("value1");
    });

    expect(result.current.selectedValues).toEqual(["value1"]);
    expect(onSelect).toHaveBeenCalledWith(["value1"]);
    expect(result.current.isOpen).toBe(false); // isOpen remains false after selection in multi-select

    act(() => {
      result.current.handleSelect("value1"); // deselect
    });

    expect(result.current.selectedValues).toEqual([]);
    expect(onSelect).toHaveBeenCalledWith([]);
    expect(result.current.isOpen).toBe(false); // isOpen remains false after deselection in multi-select
  });
});
