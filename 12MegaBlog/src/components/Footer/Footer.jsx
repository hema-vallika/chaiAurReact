import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-blue-500 border border-t-2 border-t-orange-600">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col sm:flex-row justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300 ">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-4 sm:mb-8  text-md font-semibold uppercase text-orange-600">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className=" mb-4 sm:mb-8  text-md font-semibold uppercase text-orange-600">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className=" mb-4 sm:mb-8  text-md font-bold uppercase text-orange-600">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2 sm:mb-4">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-300"
                                        to="/"
                                    >
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

export default Footer