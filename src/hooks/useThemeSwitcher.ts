import { useEffect, useState } from 'react'

export const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const [ mode, setMode ] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreference = window.localStorage.getItem('theme');

        const handleChangeTheme = () => {
            if(userPreference) {
                let check = userPreference === 'dark' ? 'dark' : 'light';
                setMode(check);
                if(check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if(check === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        }

        handleChangeTheme();

        mediaQuery.addEventListener('change', handleChangeTheme);

        return () => mediaQuery.removeEventListener('change', handleChangeTheme);
    }, []);


    useEffect(() => {
        if(mode === 'dark') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } 
        if(mode === 'light') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);


    return {
        mode,
        setMode
    }
    
    
}
