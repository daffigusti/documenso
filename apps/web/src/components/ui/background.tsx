import { SVGAttributes } from 'react';

export type BackgroundProps = Omit<SVGAttributes<SVGElement>, 'viewBox'>;

export const Background = ({ ...props }: BackgroundProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 1081" {...props}>
      <g clipPath="url(#a)" opacity=".4">
        <path
          stroke="url(#b)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".7"
        />
        <g filter="url(#c)">
          <path fill="url(#d)" fillOpacity=".8" d="M-11 1h1452v1091H-11z" />
        </g>
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1026.32 0 0 727.23 708.3 564.9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#79B9A7" />
          <stop offset="1" stopColor="#B6D2C4" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 523 -696.055 0 696 523)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M-170 1081V-238h1956v1319z" />
        </clipPath>
        <filter
          id="c"
          width="1452"
          height="1091"
          x="-11"
          y="1"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology in="SourceAlpha" radius="64" result="effect1_innerShadow_30_12" />
          <feOffset />
          <feGaussianBlur stdDeviation="59.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_30_12" />
        </filter>
      </defs>
    </svg>
  );
};