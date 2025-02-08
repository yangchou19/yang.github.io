import { useState, useEffect } from 'react'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpg'


function SunIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4"
            {...props}
        >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    )
}

function MoonIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4"
            {...props}
        >
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
            />
        </svg>
    )
}

function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add('[&_*]:!transition-none')
        window.setTimeout(() => {
            document.documentElement.classList.remove('[&_*]:!transition-none')
        }, 0)
    }

    function toggleMode() {
        disableTransitionsTemporarily()

        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        let isSystemDarkMode = darkModeMediaQuery.matches
        let isDarkMode = document.documentElement.classList.toggle('dark')

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode
        } else {
            window.localStorage.isDarkMode = isDarkMode
        }
    }

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
            <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
        </button>
    )
}

export default function AppleHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    // 监听滚动事件来改变导航栏样式
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md'
                    : 'bg-white/95 dark:bg-black/95'
                }`}
        >
            <nav className="max-w-[980px] mx-auto">
                <ul className="flex items-center justify-center gap-8 h-12 px-8 text-sm">
                    <li>
                        <Link href="/" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 17 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.5752 19.0807C15.5752 22.1685 13.0186 24.7349 9.93853 24.7349C6.85845 24.7349 4.30185 22.1685 4.30185 19.0807C4.30185 15.9928 6.85845 13.4264 9.93853 13.4264C13.0186 13.4264 15.5752 15.9928 15.5752 19.0807Z" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            关于我
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            经历
                        </Link>
                    </li>
                    <li>
                        <Link href="/hobby" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            爱好
                        </Link>
                    </li>
                    <li>
                        <Link href="/tec" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            技术栈
                        </Link>
                    </li>
                    <li>
                        <Link href="/more" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white">
                            更多
                        </Link>
                    </li>
                    <ModeToggle className="h-4 w-4" />
                </ul>
            </nav>
        </header>
    )
}

