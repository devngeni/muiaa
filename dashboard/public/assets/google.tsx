import React from 'react';

const Google = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
      <defs>
        <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use transform="scale(.01087)" xlinkHref="#image0_847_499"></use>
        </pattern>
        <image
          id="image0_847_499"
          width="92"
          height="92"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
};

export default Google;
