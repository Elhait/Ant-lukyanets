import React from "react";

const SVG = ({
    style = {},
    fill = "#ffffff",
    width = "25%",
    className = "",
    viewBox = "0 0 306 306"
}) => (
    <svg
        fill={fill}
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g>
            <g id="chevron-right">
                <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153 		" />
            </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
    </svg>
);

export default SVG;
