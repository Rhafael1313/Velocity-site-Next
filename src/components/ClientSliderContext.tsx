'use client';

import { createContext } from 'react';

export const ClientSliderContext = createContext<{ isActiveResponse: boolean }>({ isActiveResponse: false });