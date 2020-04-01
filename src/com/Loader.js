import React from "react";
import styled from "styled-components";

const LoaderStyled = styled.svg`
  animation: spin ${({ timeSpin }) => (timeSpin ? timeSpin : "1s")} linear
    infinite;
  & .path {
    stroke-dasharray: 310;
    stroke-dashoffset: 280;
    animation: dash ${({ timeDash }) => (timeDash ? timeDash : "2s")} linear
      infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 280;
    }

    25% {
      stroke-dashoffset: 15;
    }
    100% {
      stroke-dashoffset: 280;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader({
  size = 120,
  strokeWidth = 10,
  strokeLinecap = "round",
  timeSpin = "1s",
  timeDash = "2s",
  bgColor,
  color,
  fill = "transparent"
}) {
  const pos = size / 2;
  const radius = pos - strokeWidth;
  return (
    <LoaderStyled
      width={size}
      height={size}
      timeSpin={timeSpin}
      timeDash={timeDash}
    >
      <circle
        stroke={bgColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill={fill}
        r={radius}
        cx={pos}
        cy={pos}
      />
      <circle
        class="path"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill={fill}
        r={radius}
        cx={pos}
        cy={pos}
      />
    </LoaderStyled>
  );
}
