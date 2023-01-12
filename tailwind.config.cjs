/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss,html}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dm-sans': ['Work Sans', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'sans-serif']
    },
    screens: {
      mobile: '480px',
      tablet: '767px',
      laptop: '1024px',
      desktop: '1440px'
    },
    extend: {
      backgroundImage: {
        // 'hero-bg-desktop-dark': "url('/static/images/BG-DESKTOP-DARK.svg')",
      },
      colors: {
        'brand-white': {
          default: '#FFFFFF',
          'translucent-50': 'rgba(255, 255, 255, 0.2)',
          translucent: 'rgba(255, 255, 255, 0.4)'
        },
        primary: {
          default: '#174AFF',
          dark: '#1D2A65',
          darker: '#141830',
          light: '#E8F2FF',
          border: '#0077FE',
          translucent: 'rgba(0, 119, 254, 0.25)'
        },
        secondary: {
          default: '#111315',
          translucent: 'rgba(17, 19, 21, 0.63)'
        },
        accent: {
          default: '#FFCB67'
        },
        'brand-black': {
          default: '#000000',
          translucent: 'rgba(0, 0, 0, 0.28)'
        },
        'brand-green': {
          default: '#00D9AC'
        },
        'brand-teal': {
          light: '#C5F3F0',
          lighter: '#D3F4F9'
        },
        'blue-gray': {
          light: '#A0A5BA',
          default: '#000E48'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
