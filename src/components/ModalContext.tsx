'use client';

import { IModelContext } from 'global';
import { createContext } from 'react';

export const ModalContext = createContext<IModelContext>({});