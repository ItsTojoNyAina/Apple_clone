import { Html } from '@react-three/drei';
import React from 'react';
import { StageSpinner } from 'react-spinners-kit';


const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <StageSpinner size={60} color="#fff" loading={true} />
          <p className="mt-4 text-white">Loading</p>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
