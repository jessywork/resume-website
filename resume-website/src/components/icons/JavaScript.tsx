const JavaScriptIcon = ({ width, height} : { width?: number, height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="url(#pattern0_13_231)" />

      <defs>
        <pattern
          id="pattern0_13_231"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="matrix(0.00351515 0 0 0.0030303 -0.501697 0)" />
        </pattern>

        <image
          id="image0_13_231"
          width="587"
          height="330"
          preserveAspectRatio="none"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAksAAAFKCAYAAAANCRs6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZS..."
        />
      </defs>
    </svg>
  );
};

export default JavaScriptIcon;

