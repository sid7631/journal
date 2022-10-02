import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { IconContext } from "@react-icons/all-files"
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";

export default function ThemeToggle() {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => {
                if (theme == null) return null
                return (
                    <>
                        <button type="button"
                            class=" focus:ring-0  focus:outline-none  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:text-blue-500 dark:hover:text-white dark:outline-none"
                            onClick={e => theme === "dark" ? toggleTheme("light") : toggleTheme("dark")}
                        >
                            {
                                theme === "dark" ?
                                    <IconContext.Provider value={{ size: 24 }}>
                                        <BiMoon className='motion-safe:animate-[spin-theme-toggle-dark_600ms_ease-in-out] ' />
                                    </IconContext.Provider>
                                    :
                                    <IconContext.Provider value={{ size: 24 }}>
                                        <BiSun className='motion-safe:animate-[spin-theme-toggle-light_600ms_ease-in-out]' />
                                    </IconContext.Provider>
                            }

                        </button>
                    </>
                    //   <label>
                    //     <input
                    //       type="checkbox"
                    //       onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    //       checked={theme === 'dark'}
                    //     />{' '}
                    //     <span></span>
                    //   </label>
                )
            }
            }
        </ThemeToggler>
    )
}