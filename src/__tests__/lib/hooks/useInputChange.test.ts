import { renderHook, act } from "@testing-library/react-hooks";
import useInputChange from "../../../lib/hooks/useInputChange";

describe("useInputChange", () => {
  it("handles input change", () => {
    const setFilter = jest.fn();
    const { result } = renderHook(() => useInputChange(setFilter));

    expect(result.current.inputValue).toEqual("");

    act(() => {
      result.current.handleInputChange({
        target: {
          value: "test",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).toEqual("test");
    expect(setFilter).toHaveBeenCalledWith("test");
  });
});
