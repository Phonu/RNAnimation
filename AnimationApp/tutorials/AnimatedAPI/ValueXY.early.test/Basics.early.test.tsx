import ValueXY from "../ValueXY";

// ValueXY.test.tsx
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

// ValueXY.test.tsx
// Mocks for React Native components
jest.mock("react-native", () => {
  const ActualReactNative = jest.requireActual("react-native");
  // Mock Animated.Value and Animated.timing
  class MockAnimatedValue {
    private _value: number;
    constructor(init: number) {
      this._value = init;
    }
    setValue(val: number) {
      this._value = val;
    }
    // Simulate addListener for completeness
    addListener = jest.fn();
    removeListener = jest.fn();
    interpolate = jest.fn(() => this);
    // Simulate __getValue for testing
    __getValue = () => this._value;
  }

  const timingMock = jest.fn(() => ({
    start: (cb?: () => void) => {
      // Simulate animation by updating value
      if (cb) cb();
    },
  }));

  return {
    ...ActualReactNative,
    Animated: {
      ...ActualReactNative.Animated,
      Value: MockAnimatedValue,
      timing: timingMock,
      View: (props: any) => <div {...props} />,
    },
    View: (props: any) => <div {...props} />,
    Text: (props: any) => <span {...props} />,
    StyleSheet: {
      create: (styles: any) => styles,
    },
  };
});

// No need to mock useEffect or useRef (core react hooks)

describe("Basics() Basics method", () => {
  // Happy Paths
  describe("Happy paths", () => {
    it("renders the animated box and triggers animation on mount", () => {
      // This test ensures the component renders and animation starts on mount.
      const { container } = render(<ValueXY />);
      // The outer View is rendered as a div, and the Animated.View as a div with style
      const boxes = container.querySelectorAll("div");
      // There should be two divs: outer and animated box
      expect(boxes.length).toBeGreaterThanOrEqual(2);
      // The animated box should have the correct style properties
      const animatedBox = boxes[1];
      expect(animatedBox).toHaveStyle({
        height: "100px",
        width: "100px",
        backgroundColor: "blue",
        marginBottom: "8px",
      });
    });

    it("calls Animated.timing twice in sequence (forward and reverse)", () => {
      // This test ensures the animation sequence is triggered as expected.
      const { Animated } = require("react-native");
      Animated.timing.mockClear();

      render(<ValueXY />);
      // The first call animates to 200, the second animates back to 0
      expect(Animated.timing).toHaveBeenCalledTimes(2);
      expect(Animated.timing).toHaveBeenNthCalledWith(
        1,
        expect.any(Object),
        expect.objectContaining({
          toValue: 200,
          duration: 1000,
          useNativeDriver: false,
        })
      );
      expect(Animated.timing).toHaveBeenNthCalledWith(
        2,
        expect.any(Object),
        expect.objectContaining({
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        })
      );
    });

    it("applies the animated value to the marginLeft style", () => {
      // This test ensures the animated value is used in the style prop.
      const { container } = render(<ValueXY />);
      const boxes = container.querySelectorAll("div");
      const animatedBox = boxes[1];
      // The marginLeft is an instance of MockAnimatedValue
      const style = animatedBox.getAttribute("style");
      // Since we can't resolve the animated value directly, check that marginLeft is present
      expect(style).toContain("margin-left");
    });
  });

  // Edge Cases
  describe("Edge cases", () => {
    it("handles rapid re-mounting without crashing", () => {
      // This test ensures the component can be mounted/unmounted rapidly without errors.
      const { unmount, rerender } = render(<ValueXY />);
      expect(() => {
        unmount();
        rerender(<ValueXY />);
        unmount();
      }).not.toThrow();
    });

    it("does not trigger animation if useEffect is not called (simulated)", () => {
      // This test simulates the absence of useEffect to ensure no animation is triggered.
      // Save original useEffect
      const originalUseEffect = React.useEffect;
      // @ts-ignore
      React.useEffect = () => {};
      const { Animated } = require("react-native");
      Animated.timing.mockClear();

      render(<ValueXY />);
      expect(Animated.timing).not.toHaveBeenCalled();

      // Restore useEffect
      React.useEffect = originalUseEffect;
    });

    it("handles Animated.timing throwing an error gracefully", () => {
      // This test ensures the component does not crash if Animated.timing throws.
      const { Animated } = require("react-native");
      const originalTiming = Animated.timing;
      Animated.timing = () => {
        throw new Error("Animation error");
      };

      expect(() => {
        render(<ValueXY />);
      }).not.toThrow();

      Animated.timing = originalTiming;
    });
  });
});
