import React from "react";
import FluidGlass from '../../Reactbits/FluidGlass/FluidGlass';

const CursorEffect = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none'  // Important: allows clicks to pass through
      }}
    >
      <FluidGlass
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01
        }}
      />
    </div>
  );
};

export default CursorEffect;