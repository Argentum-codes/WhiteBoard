import React, { useContext } from "react";
import {
  FaSlash,
  FaRegCircle,
  FaArrowRight,
  FaPaintBrush,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFont,
  FaDownload,
} from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TOOL_ITEMS } from "../constants";
import boardContext from "../store/board-context";

const Toolbar = () => {
  const { activeToolItem, changeToolHandler, undo, redo } =
    useContext(boardContext);

  const handleDownloadClick = () => {
    const canvas = document.getElementById("canvas");
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "board.png";
    anchor.click();
  };

  const toolButtonClasses = (tool) =>
    `flex justify-center items-center text-xl p-3 mr-5 last:mr-0 cursor-pointer 
     ${activeToolItem === tool ? "bg-blue-200 text-gray-700 rounded" : "hover:bg-blue-50 hover:text-gray-700 rounded"}`;

  return (
    <div
      className="absolute top-5 left-1/2 transform -translate-x-1/2 px-3 py-2 flex rounded border border-gray-400 shadow-md bg-white z-10"
    >
      <div
        className={toolButtonClasses(TOOL_ITEMS.BRUSH)}
        onClick={() => changeToolHandler(TOOL_ITEMS.BRUSH)}
      >
        <FaPaintBrush />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.LINE)}
        onClick={() => changeToolHandler(TOOL_ITEMS.LINE)}
      >
        <FaSlash />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.RECTANGLE)}
        onClick={() => changeToolHandler(TOOL_ITEMS.RECTANGLE)}
      >
        <LuRectangleHorizontal />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.CIRCLE)}
        onClick={() => changeToolHandler(TOOL_ITEMS.CIRCLE)}
      >
        <FaRegCircle />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.ARROW)}
        onClick={() => changeToolHandler(TOOL_ITEMS.ARROW)}
      >
        <FaArrowRight />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.ERASER)}
        onClick={() => changeToolHandler(TOOL_ITEMS.ERASER)}
      >
        <FaEraser />
      </div>
      <div
        className={toolButtonClasses(TOOL_ITEMS.TEXT)}
        onClick={() => changeToolHandler(TOOL_ITEMS.TEXT)}
      >
        <FaFont />
      </div>
      <div
        className="flex justify-center items-center text-xl p-3 mr-5 last:mr-0 cursor-pointer hover:bg-blue-50 hover:text-gray-700 rounded"
        onClick={undo}
      >
        <FaUndoAlt />
      </div>
      <div
        className="flex justify-center items-center text-xl p-3 mr-5 last:mr-0 cursor-pointer hover:bg-blue-50 hover:text-gray-700 rounded"
        onClick={redo}
      >
        <FaRedoAlt />
      </div>
      <div
        className="flex justify-center items-center text-xl p-3 cursor-pointer hover:bg-blue-50 hover:text-gray-700 rounded"
        onClick={handleDownloadClick}
      >
        <FaDownload />
      </div>
    </div>
  );
};

export default Toolbar;
