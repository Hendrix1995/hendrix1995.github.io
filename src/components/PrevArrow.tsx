import React from "react";

interface PrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function PrevArrow({ onClick }: PrevArrowProps) {
    return <i className="far fa-caret-square-left" onClick={onClick} />;
}
