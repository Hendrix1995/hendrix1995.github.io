import React from "react";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function NextArrow({ onClick }: NextArrowProps) {
    return <i className="far fa-caret-square-right" onClick={onClick} />;
}
