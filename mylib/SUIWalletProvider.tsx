'use client';
import { WalletProvider } from '@suiet/wallet-kit';

export const SUIWalletProvider = ({ children }: { children: React.ReactNode }) => {
  return <WalletProvider>{children}</WalletProvider>;
};
