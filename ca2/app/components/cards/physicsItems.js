'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicPhysicsDivs = dynamic(() => import('./dynamicPhysicsDivs'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const PhysicsDivs = ({ cardCount = 14 }) => {
  return <DynamicPhysicsDivs cardCount={cardCount} />;
};

export default PhysicsDivs;