import React from 'react';

const BackgroundDecoration = () => (
  <>
    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 rounded-full filter blur-[100px] -z-10 animate-float"></div>
    <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-primary/5 via-purple-500/10 to-blue-500/5 rounded-full filter blur-[80px] -z-10 animate-float-slow"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full filter blur-[60px] -z-10 animate-pulse-subtle"></div>
  </>
);

export default BackgroundDecoration; 