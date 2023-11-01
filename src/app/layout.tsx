
import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './lib/registry';

import './globals.css';
import {WalletProvider} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import { SUIWalletProvider } from '../../mylib/SUIWalletProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
    <StyledComponentsRegistry><SUIWalletProvider>{children}</SUIWalletProvider></StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;