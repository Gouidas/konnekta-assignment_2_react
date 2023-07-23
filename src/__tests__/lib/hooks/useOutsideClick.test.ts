import { renderHook, act } from "@testing-library/react-hooks";
import { useRef } from "react";
import { useOutsideClick } from "../../../lib/hooks/useOutsideClick";

describe("useOutsideClick", () => {
  it("should call callback when clicked outside", () => {
    const callback = jest.fn();

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      useOutsideClick(ref, callback);
      return { ref };
    });

    act(() => {
      document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call callback when clicked inside", () => {
    const callback = jest.fn();

    const { result } = renderHook(() => {
      const ref = { current: document.createElement("div") };
      useOutsideClick(ref, callback);
      return { ref };
    });

    act(() => {
      result.current.ref.current!.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true })
      );
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
