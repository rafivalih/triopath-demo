'use client';

import React from 'react';
import { ResumeProvider as Provider } from '../../context/ResumeContext';

export default function ResumeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}