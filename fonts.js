import localFont from '@next/font/local';

const agletSans = localFont({
  display: 'swap',
  fallback: ['Arial'],
  src: [
    {
      path: './public/fonts/AgletSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/AgletSans-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './public/fonts/AgletSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aglet-sans',
});

export default agletSans;
