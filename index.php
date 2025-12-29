<?php include("header.php") ?>
                <div class="flex-1">
                    <main class="flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr">
                        <div class="flex flex-col gap-4">
                            <div
                                class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 border-b pb-3 px-4 md:px-6 -mx-4 my-0">
                                <div class="sm:ml-200 flex min-w-xl md:w-1/4 justify-start lg:ml-8 ">
                                    <h1 class="text-2xl font-bold capitalize ">DASHBOARD</h1>
                                </div>
                                <div class="flex flex-row  justify-center items-center w-full flex-grow p-4 text-sm text-blue-800"
                                    role="alert">Welcome back, <span class="font-bold">Dave Matthew</span>! Your last
                                    sign in at Yesterday, 16:54 PM</div>
                                <div class="w-full md:w-1/4 items-center justify-start gap-3">
                                    <div class="relative md:w-full sm:w-screen"><input placeholder="Search..."
                                            class="w-full text-sm rounded-2xl border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                                            type="text"><i
                                            class="bi bi-search absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="breadcrumb"
                                class="block w-fit text-sm bg-white py-3 px-6 rounded-full border">
                                <ol class="flex items-center text-gray-500">
                                    <li><a href="#!" class="hover:underline"><i class="bi bi-house-door"></i> Home</a>
                                    </li>
                                    <li class="mx-2">/</li>
                                    <li><span class="text-gray-800 dark:text-gray-200"
                                            aria-current="page">Dashboard</span></li>
                                </ol>
                            </nav>
                            <div class="bg-white  block">
                                <div class="p-0">
                                    <div class="md:aspect-[calc(4*3+1)/4] sm:aspect-video  -mx-[22px] my-[0]">

                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:-mt-[112px] sm:mt-0 z-10">
                                <div
                                    class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                    <div class="p-4 flex flex-col h-full">
                                        <div class="flex justify-between items-start mb-3">
                                            <div>
                                                <div class="text-sm font-semibold text-gray-500 uppercase">FERRY ARRIVAL
                                                </div>
                                                <div class="text-4xl font-bold mt-2 text-red-500"><span>00 : 00</span>
                                                </div>
                                            </div>
                                            <div class="p-3 rounded bg-red-100 dark:bg-red-900/50"><i
                                                    class="bi bi-water text-red-500 text-3xl"></i></div>
                                        </div>
                                        <div
                                            class="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500">
                                            <span class="text-green-500 mr-2"><i
                                                    class="bi bi-arrow-up"></i></span><span>50% From Last Hour</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                    <div class="p-4 flex flex-col h-full">
                                        <div class="flex justify-between items-start mb-3">
                                            <div>
                                                <div class="text-sm font-semibold text-gray-500 uppercase">TRAIN SPEED
                                                </div>
                                                <div class="text-4xl font-bold mt-2 text-yellow-500">
                                                    <span>81</span><small
                                                        class="text-xl font-medium text-gray-400 ml-1">/KM</small>
                                                </div>
                                            </div>
                                            <div class="p-3 rounded bg-yellow-100 dark:bg-yellow-900/50"><i
                                                    class="bi bi-train-front text-yellow-500 text-3xl"></i></div>
                                        </div>
                                        <div
                                            class="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500">
                                            <span class="text-red-500 mr-2"><i
                                                    class="bi bi-arrow-down"></i></span><span>Rate : 20 km/Hour</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                    <div class="p-4 flex flex-col h-full">
                                        <div class="flex justify-between items-start mb-3">
                                            <div>
                                                <div class="text-sm font-semibold text-gray-500 uppercase">AIR PORT
                                                    TRAFFIC</div>
                                                <div class="text-4xl font-bold mt-2 text-sky-500"><span>19</span><small
                                                        class="text-xl font-medium text-gray-400 ml-1">TAKE OFF</small>
                                                </div>
                                            </div>
                                            <div class="p-3 rounded bg-sky-100 dark:bg-sky-900/50"><i
                                                    class="bi bi-airplane text-sky-500 text-3xl"></i></div>
                                        </div>
                                        <div
                                            class="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500">
                                            <span class="text-red-500 mr-2"><i
                                                    class="bi bi-arrow-down"></i></span><span>Rate : 20
                                                Plane/Hour</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                    <div class="p-4 flex flex-col h-full">
                                        <div class="flex justify-between items-start mb-3">
                                            <div>
                                                <div class="text-sm font-semibold text-gray-500 uppercase">CARGO</div>
                                                <div class="text-4xl font-bold mt-2 text-blue-500"><span>45</span><small
                                                        class="text-xl font-medium text-gray-400 ml-1">SENT</small>
                                                </div>
                                            </div>
                                            <div class="p-3 rounded bg-blue-100 dark:bg-blue-900/50"><i
                                                    class="bi bi-box-seam text-blue-500 text-3xl"></i></div>
                                        </div>
                                        <div
                                            class="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500">
                                            <span class="text-green-500 mr-2"><i
                                                    class="bi bi-arrow-up"></i></span><span>50% From Last Month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div class="lg:col-span-2">
                                    <div
                                        class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                        <div
                                            class="px-4 py-3 border-b dark:border-gray-700 font-semibold flex justify-between items-center">
                                            <div class="flex items-center gap-2"><i
                                                    class="bi bi-truck"></i><span>DESTINATION</span></div>
                                            <div class="flex gap-2 text-gray-400"><i
                                                    class="bi bi-chevron-up cursor-pointer"></i><i
                                                    class="bi bi-x-lg cursor-pointer"></i></div>
                                        </div>
                                        <div class="p-6">
                                            <div class="flex flex-col gap-6">
                                                <div
                                                    class="flex flex-col md:flex-row items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-6">
                                                    <div class="w-full md:w-48 flex-shrink-0">
                                                        <div
                                                            class="bg-sky-400 text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-2 mb-1">
                                                            <i class="bi bi-train-front"></i>TRANS BERLIN
                                                        </div>
                                                        <div
                                                            class="text-gray-500 text-sm font-bold flex items-center gap-1">
                                                            <i class="bi bi-speedometer2"></i>12 Km/hours
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="w-full md:w-48 flex items-center gap-3 flex-shrink-0 border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-4 border-dashed">
                                                        <img alt="Mark Zukenberg" class="w-10 h-10 rounded-full"
                                                            src="https://picsum.photos/seed/mark/40/40">
                                                        <div>
                                                            <div
                                                                class="font-bold text-gray-700 dark:text-gray-200 text-sm">
                                                                Mark Zukenberg</div>
                                                            <div class="text-gray-400 text-xs">Driver</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow w-full">
                                                        <div
                                                            class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
                                                            <div class="bg-sky-400 h-2.5 rounded-full"
                                                                style="width: 0%;"></div><span
                                                                class="absolute right-0 -top-5 text-xs text-gray-500">0%</span>
                                                        </div>
                                                        <div class="flex justify-between mt-1"><span
                                                                class="text-xs bg-red-600 text-white px-2 py-1 rounded-full">Berlin</span><span
                                                                class="text-xs bg-teal-600 text-white px-2 py-1 rounded-full">Muchen</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex flex-col md:flex-row items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-6">
                                                    <div class="w-full md:w-48 flex-shrink-0">
                                                        <div
                                                            class="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-2 mb-1">
                                                            <i class="bi bi-airplane"></i>FLY AIRLINES
                                                        </div>
                                                        <div
                                                            class="text-gray-500 text-sm font-bold flex items-center gap-1">
                                                            <i class="bi bi-speedometer2"></i>600 Km/hours
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="w-full md:w-48 flex items-center gap-3 flex-shrink-0 border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-4 border-dashed">
                                                        <img alt="Marko Freytag" class="w-10 h-10 rounded-full"
                                                            src="https://picsum.photos/seed/marko/40/40">
                                                        <div>
                                                            <div
                                                                class="font-bold text-gray-700 dark:text-gray-200 text-sm">
                                                                Marko Freytag</div>
                                                            <div class="text-gray-400 text-xs">Pilot</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow w-full">
                                                        <div
                                                            class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
                                                            <div class="bg-teal-500 h-2.5 rounded-full"
                                                                style="width: 78.681%;"></div><span
                                                                class="absolute right-0 -top-5 text-xs text-gray-500">78.68098323969394%</span>
                                                        </div>
                                                        <div class="flex justify-between mt-1"><span
                                                                class="text-xs bg-red-600 text-white px-2 py-1 rounded-full">Berlin</span><span
                                                                class="text-xs bg-teal-600 text-white px-2 py-1 rounded-full">London</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col md:flex-row items-center gap-4 ">
                                                    <div class="w-full md:w-48 flex-shrink-0">
                                                        <div
                                                            class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-2 mb-1">
                                                            <i class="bi bi-train-light-rail-front"></i>FAZTTRAIN
                                                        </div>
                                                        <div
                                                            class="text-gray-500 text-sm font-bold flex items-center gap-1">
                                                            <i class="bi bi-speedometer2"></i>40 Km/hours
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="w-full md:w-48 flex items-center gap-3 flex-shrink-0 border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-4 border-dashed">
                                                        <img alt="Dieter Gruenewald" class="w-10 h-10 rounded-full"
                                                            src="https://picsum.photos/seed/dieter/40/40">
                                                        <div>
                                                            <div
                                                                class="font-bold text-gray-700 dark:text-gray-200 text-sm">
                                                                Dieter Gruenewald</div>
                                                            <div class="text-gray-400 text-xs">machinist</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow w-full">
                                                        <div
                                                            class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
                                                            <div class="bg-red-500 h-2.5 rounded-full"
                                                                style="width: 41.7299%;"></div><span
                                                                class="absolute right-0 -top-5 text-xs text-gray-500">41.72994173227295%</span>
                                                        </div>
                                                        <div class="flex justify-between mt-1"><span
                                                                class="text-xs bg-red-600 text-white px-2 py-1 rounded-full">Berlin</span><span
                                                                class="text-xs bg-teal-600 text-white px-2 py-1 rounded-full">Dortmund</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full">
                                        <div
                                            class="px-4 py-3 border-b dark:border-gray-700 font-semibold flex justify-between items-center">
                                            <div class="flex items-center gap-2"><i
                                                    class="bi bi-arrow-left-right"></i><span>DIRECTION</span></div>
                                            <div class="flex gap-2 text-gray-400"><i
                                                    class="bi bi-chevron-up cursor-pointer"></i><i
                                                    class="bi bi-x-lg cursor-pointer"></i></div>
                                        </div>
                                        <div class="p-4">
                                            <div class="flex flex-col gap-4">
                                                <div
                                                    class="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                                                    <div
                                                        class="bg-red-500 p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                                        <i class="bi bi-fuel-pump text-white text-2xl"></i>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <div class="flex items-center gap-2"><span
                                                                class="text-xs font-bold bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">GAS
                                                                STATION</span></div>
                                                        <div
                                                            class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                                                            <span>5 Km Foward</span><i
                                                                class="bi bi-arrow-up-circle"></i>
                                                        </div>
                                                        <div
                                                            class="text-xs text-gray-400 italic flex items-center gap-12">
                                                            <span>Estimated time :</span><i
                                                                class="bi bi-clock"></i><span>20 Min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                                                    <div
                                                        class="bg-sky-400 p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                                        <i class="bi bi-shop text-white text-2xl"></i>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <div class="flex items-center gap-2"><span
                                                                class="text-xs font-bold bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">RESTOURANT</span>
                                                        </div>
                                                        <div
                                                            class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                                                            <span>1 Km Turn Left</span><i
                                                                class="bi bi-arrow-left-circle"></i>
                                                        </div>
                                                        <div
                                                            class="text-xs text-gray-400 italic flex items-center gap-12">
                                                            <span>Estimated time :</span><i
                                                                class="bi bi-clock"></i><span>20 Min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                                                    <div
                                                        class="bg-teal-500 p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                                        <i class="bi bi-hospital text-white text-2xl"></i>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <div class="flex items-center gap-2"><span
                                                                class="text-xs font-bold bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">ZOO</span>
                                                        </div>
                                                        <div
                                                            class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                                                            <span>3 Km Turn Right</span><i
                                                                class="bi bi-arrow-right-circle"></i>
                                                        </div>
                                                        <div
                                                            class="text-xs text-gray-400 italic flex items-center gap-12">
                                                            <span>Estimated time :</span><i
                                                                class="bi bi-clock"></i><span>20 Min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div class="bg-teal-500 rounded-lg p-4 text-white relative overflow-hidden">
                                    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                        <div class="grid grid-cols-10 grid-rows-10 gap-4 h-full w-full">
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                            <div class="border border-white/20"></div>
                                        </div>
                                    </div>
                                    <div class="relative z-10">
                                        <div class="h-48 flex items-center justify-center">
                                            <div
                                                class="w-full h-full border border-white/30 rounded flex items-center justify-center relative">
                                                <svg viewBox="0 0 500 150" class="w-full h-full">
                                                    <path
                                                        d="M0,100 C50,80 100,120 150,60 S250,20 300,80 S400,120 500,40"
                                                        fill="none" stroke="white" stroke-width="2"></path>
                                                    <path
                                                        d="M0,150 L0,100 C50,80 100,120 150,60 S250,20 300,80 S400,120 500,40 L500,150 Z"
                                                        fill="rgba(255,255,255,0.1)"></path>
                                                </svg>
                                                <div class="absolute left-2 top-2 text-xs">100</div>
                                                <div class="absolute left-2 top-1/4 text-xs">75</div>
                                                <div class="absolute left-2 top-2/4 text-xs">50</div>
                                                <div class="absolute left-2 top-3/4 text-xs">25</div>
                                                <div class="absolute left-2 bottom-2 text-xs">0</div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-end mt-4">
                                            <div>
                                                <div class="text-sm opacity-80">Speed Avarage</div>
                                                <div class="text-5xl font-bold">74 <span
                                                        class="text-xs bg-teal-700 px-1 rounded">KM / HOURS</span></div>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-sm opacity-80">Traffic per day</div>
                                                <div class="text-3xl font-bold">2.5874</div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-3 gap-4 mt-6">
                                            <div class="bg-teal-600/50 p-2 rounded text-center">
                                                <div class="text-sm font-semibold">Traffic Rates</div>
                                                <div class="text-xl font-bold mt-1">30 % <span
                                                        class="text-xs font-normal opacity-70">-1,3 %</span></div>
                                            </div>
                                            <div class="bg-teal-600/50 p-2 rounded text-center">
                                                <div class="text-sm font-semibold">Traffic Rates</div>
                                                <div class="text-xl font-bold mt-1">30 % <span
                                                        class="text-xs font-normal opacity-70">-1,3 %</span></div>
                                            </div>
                                            <div class="bg-teal-600/50 p-2 rounded text-center">
                                                <div class="text-sm font-semibold">Traffic Rates</div>
                                                <div class="text-xl font-bold mt-1">30 % <span
                                                        class="text-xs font-normal opacity-70">-1,3 %</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-sky-400 rounded-lg p-6 text-white relative overflow-hidden">
                                    <div class="flex justify-between items-start relative z-10">
                                        <div>
                                            <h2 class="text-xl font-bold">Monday, <span class="font-normal">07:30
                                                    AM</span></h2>
                                        </div>
                                        <div class="text-xl font-bold">CF</div>
                                    </div>
                                    <div class="flex items-center justify-center my-8 relative z-10">
                                        <div class="flex items-center gap-4"><i
                                                class="bi bi-cloud-lightning-rain-fill text-8xl"></i>
                                            <div>
                                                <h1 class="text-4xl font-bold">Berlin</h1>
                                                <div class="text-lg opacity-90">Day Lightning</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right relative z-10 mb-8">
                                        <div class="text-6xl font-light flex justify-end items-start"><i
                                                class="bi bi-thermometer-half text-4xl mt-2"></i><span>18</span><span
                                                class="text-4xl mt-1">°C</span></div>
                                    </div>
                                    <div class="grid grid-cols-5 gap-2 relative z-10">
                                        <div class="text-center">
                                            <div class="bg-black/10 py-1 text-xs font-bold mb-2">MON</div>
                                            <div class="text-2xl font-bold mb-1">85<span
                                                    class="text-xs align-top">°F</span></div><i
                                                class="bi bi-cloud-lightning-rain text-2xl mb-1 block"></i>
                                            <div class="text-xs opacity-80">15 KM/H</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="bg-black/10 py-1 text-xs font-bold mb-2">TUE</div>
                                            <div class="text-2xl font-bold mb-1">81<span
                                                    class="text-xs align-top">°F</span></div><i
                                                class="bi bi-cloud-sun text-2xl mb-1 block"></i>
                                            <div class="text-xs opacity-80">12 KM/H</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="bg-black/10 py-1 text-xs font-bold mb-2">WED</div>
                                            <div class="text-2xl font-bold mb-1">83<span
                                                    class="text-xs align-top">°F</span></div><i
                                                class="bi bi-cloud-rain text-2xl mb-1 block"></i>
                                            <div class="text-xs opacity-80">14 KM/H</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="bg-black/10 py-1 text-xs font-bold mb-2">THU</div>
                                            <div class="text-2xl font-bold mb-1">80<span
                                                    class="text-xs align-top">°F</span></div><i
                                                class="bi bi-sun text-2xl mb-1 block"></i>
                                            <div class="text-xs opacity-80">15 KM/H</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="bg-black/10 py-1 text-xs font-bold mb-2">FRI</div>
                                            <div class="text-2xl font-bold mb-1">79<span
                                                    class="text-xs align-top">°F</span></div><i
                                                class="bi bi-cloud-drizzle text-2xl mb-1 block"></i>
                                            <div class="text-xs opacity-80">11 KM/H</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
<?php include("footer.php") ?>