import React, { useContext } from "react";
import {
  COLORS,
  FILL_TOOL_TYPES,
  SIZE_TOOL_TYPES,
  STROKE_TOOL_TYPES,
  TOOL_ITEMS,
} from "../constants";
import toolboxContext from "../store/toolbox-context";
import boardContext from "../store/board-context";
import cx from "classnames";

const Toolbox = () => {
  const { activeToolItem } = useContext(boardContext);
  const { toolboxState, changeStroke, changeFill, changeSize } =
    useContext(toolboxContext);

  const strokeColor = toolboxState[activeToolItem]?.stroke;
  const fillColor = toolboxState[activeToolItem]?.fill;
  const size = toolboxState[activeToolItem]?.size;

  return (
    <div
      className="absolute top-1/2 left-5 text-sm border border-gray-400 shadow-md bg-white transform -translate-y-1/2 rounded z-10"
    >
      {STROKE_TOOL_TYPES.includes(activeToolItem) && (
        <div className="mb-6 last:mb-0 first:pt-5 last:pb-5 px-4">
          <div className="block mb-1">Stroke Color</div>
          <div className="flex flex-wrap items-center">
            <div>
              <input
                className="mr-5 w-10 h-10 rounded border-2 border-neutral-400"
                type="color"
                value={strokeColor}
                onChange={(e) => changeStroke(activeToolItem, e.target.value)}
              />
            </div>
            {Object.keys(COLORS).map((k) => (
              <div
                key={k}
                className={cx(
                  "inline-block w-5 h-5 rounded mr-1 last:mr-0 cursor-pointer",
                  {
                    "border border-gray-300 shadow-[0_0_0_1px_#4a47b1]":
                      strokeColor === COLORS[k],
                  }
                )}
                style={{ backgroundColor: COLORS[k] }}
                onClick={() => changeStroke(activeToolItem, COLORS[k])}
              ></div>
            ))}
          </div>
        </div>
      )}

      {FILL_TOOL_TYPES.includes(activeToolItem) && (
        <div className="mb-6 last:mb-0 first:pt-5 last:pb-5 px-4">
          <div className="block mb-1">Fill Color</div>
          <div className="flex flex-wrap items-center">
            {fillColor === null ? (
              <div
                className={cx(
                  "mr-5 w-10 h-10 rounded border-2 border-neutral-400 cursor-pointer",
                  "bg-[linear-gradient(to_top_left,transparent_0%,transparent_calc(50%-0.8px),red_50%,transparent_calc(50%+0.8px),transparent_100%),linear-gradient(to_top_right,transparent_0%,transparent_calc(50%-0.8px),red_50%,transparent_calc(50%+0.8px),transparent_100%)]"
                )}
                onClick={() => changeFill(activeToolItem, COLORS.BLACK)}
              ></div>
            ) : (
              <div>
                <input
                  className="mr-5 w-10 h-10 rounded border-2 border-neutral-400"
                  type="color"
                  value={fillColor}
                  onChange={(e) => changeFill(activeToolItem, e.target.value)}
                />
              </div>
            )}
            <div
              className={cx(
                "inline-block w-5 h-5 rounded mr-1 last:mr-0 cursor-pointer",
                "bg-[linear-gradient(to_top_left,transparent_0%,transparent_calc(50%-0.8px),red_50%,transparent_calc(50%+0.8px),transparent_100%),linear-gradient(to_top_right,transparent_0%,transparent_calc(50%-0.8px),red_50%,transparent_calc(50%+0.8px),transparent_100%)]",
                {
                  "border border-gray-300 shadow-[0_0_0_1px_#4a47b1]":
                    fillColor === null,
                }
              )}
              onClick={() => changeFill(activeToolItem, null)}
            ></div>
            {Object.keys(COLORS).map((k) => (
              <div
                key={k}
                className={cx(
                  "inline-block w-5 h-5 rounded mr-1 last:mr-0 cursor-pointer",
                  {
                    "border border-gray-300 shadow-[0_0_0_1px_#4a47b1]":
                      fillColor === COLORS[k],
                  }
                )}
                style={{ backgroundColor: COLORS[k] }}
                onClick={() => changeFill(activeToolItem, COLORS[k])}
              ></div>
            ))}
          </div>
        </div>
      )}

      {SIZE_TOOL_TYPES.includes(activeToolItem) && (
        <div className="mb-6 last:mb-0 first:pt-5 last:pb-5 px-4">
          <div className="block mb-1">
            {activeToolItem === TOOL_ITEMS.TEXT ? "Font Size" : "Brush Size"}
          </div>
          <input
            type="range"
            min={activeToolItem === TOOL_ITEMS.TEXT ? 12 : 1}
            max={activeToolItem === TOOL_ITEMS.TEXT ? 64 : 10}
            step={1}
            value={size}
            onChange={(e) => changeSize(activeToolItem, e.target.value)}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Toolbox;
