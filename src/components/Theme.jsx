import React from 'react'
import useTheme from '../context/theme';

export default function Theme() {
    
   const {themeMode, lightTheme, darkTheme, colorVariant, changeColorVariant} = useTheme()
   
   const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus) {
        darkTheme()
    } else {
        lightTheme()
    }
   }

   const handleVariantChange = (e) => {
    changeColorVariant(e.target.value)
   }

    return (
        <div className="flex items-center gap-4">
            <div>
                <label htmlFor="colorVariant" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">Theme Variant:</label>
                <select 
                    id="colorVariant" 
                    value={colorVariant}
                    onChange={handleVariantChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                </select>
            </div>
            
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode==="dark"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Toggle Theme</span>
            </label>
        </div>
    );
}

