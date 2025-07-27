import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer(){
    return(
        <section className="relative overflow-hidden py-10 bg-white dark:bg-gray-900 border-t-2 border-black dark:border-gray-700">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    &copy; Copyright 2023. All Rights Reserved by Jas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                   
                                       <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                    
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                   <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                           <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                   <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                  <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                   <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                           <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                   <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                   <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-base text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;