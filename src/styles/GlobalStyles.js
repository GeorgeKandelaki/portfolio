import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        &, &.light-mode {
            /* Light mode (default) */
        
            --color-grey-0: #18212f;
            --color-grey-50: #111827;
            --color-grey-100: #1f2937;
            --color-grey-200: #374151;
            --color-grey-300: #4b5563;
            --color-grey-400: #6b7280;
            --color-grey-500: #9ca3af;
            --color-grey-600: #d1d5db;
            --color-grey-700: #e5e7eb;
            --color-grey-800: #f3f4f6;
            --color-grey-900: #f9fafb;
        }

        &.dark-mode{
            /* Dark mode */
            --color-grey-0: #fff;
            --color-grey-50: #f9fafb;
            --color-grey-100: #f3f4f6;
            --color-grey-200: #e5e7eb;
            --color-grey-300: #d1d5db;
            --color-grey-400: #9ca3af;
            --color-grey-500: #6b7280;
            --color-grey-600: #4b5563;
            --color-grey-700: #374151;
            --color-grey-800: #1f2937;
            --color-grey-900: #111827;

        }
        
        
        // Screaming Green
        --color-brand-100: #dafbde;
        --color-brand-200: #b6f7bd;
        --color-brand-300: #91f39c;
        --color-brand-400: #6BEF7B;
        --color-brand-500: #47eb5a;
        --color-brand-600: #23e73a;
        --color-brand-700: #16ca2b;
        --color-brand-800: #12a523;
        --color-brand-900: #0e811c;
        --color-brand-1000: #06370c;
        

        --color-indigo-200:#c9adff;
        --color-indigo-400:#8A4FFF;
        --color-indigo-600:#5c0aff;
        --color-indigo-900:#3d00b8;
        --color-indigo-950:#3600a3;

        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: monospace !important;
        color: var(--color-grey-700);

        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;

    }

    
`;

export default GlobalStyles;
