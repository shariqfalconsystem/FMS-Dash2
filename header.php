<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="/vite.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleet Management System</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY6ZuEwgrOtJwBp4vrYUoPSHzEDIB0fXk&callback=initGoogleMap"
        defer async></script>

    <script src="https://cdn.tailwindcss.com?plugins=forms"></script>

    <!-- <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['var(--font-family-sans)', 'sans-serif'],
                    },
                    colors: {
                        blue: {
                            '50': 'rgb(var(--color-primary-50) / <alpha-value>)',
                            '100': 'rgb(var(--color-primary-100) / <alpha-value>)',
                            '200': 'rgb(var(--color-primary-200) / <alpha-value>)',
                            '300': 'rgb(var(--color-primary-300) / <alpha-value>)',
                            '400': 'rgb(var(--color-primary-400) / <alpha-value>)',
                            '500': 'rgb(var(--color-primary-500) / <alpha-value>)',
                            '600': 'rgb(var(--color-primary-600) / <alpha-value>)',
                            '700': 'rgb(var(--color-primary-700) / <alpha-value>)',
                            '800': 'rgb(var(--color-primary-800) / <alpha-value>)',
                            '900': 'rgb(var(--color-primary-900) / <alpha-value>)',
                        }
                    }
                }
            }
        }
    </script> -->
    <style>
        body {
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Feb8bf7c0952f4113b70dfba12822ee37%2Ff4370cea18404af0a9d0060b08eee55d);
            background-color: rgb(67, 87, 87);
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-attachment: fixed;
        }

        /* Custom scrollbar for a more integrated look */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    </style>

    <link rel="stylesheet" href="assets/css/index.css">
    <script src="assets/js/google-map.js" defer></script>
    <script src="assets/js/index.js" defer></script>
    <script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "react/": "https://aistudiocdn.com/react@^19.2.0/"
  }
}
</script>

</head>

<body>
    <div id="root">
        <div class="text-gray-800 bg-transparent min-h-screen relative">
            <aside id="side-menu" class="
                fixed left-0 top-0 h-full bg-gray-900 md:bg-transparent text-white flex flex-col
                dark:border-gray-700 transition-all duration-300 ease-in-out z-30
                w-64 translate-x-0
            ">
                <div
                    class="flex items-center justify-between py-2 px-[12px] dark:border-gray-700 bg-transparent flex-shrink-0">
                    <span class="w-full text-lg font-bold ">FM System <span
                            class="font-normal text-sm ml-2">FMS</span></span><button
                        class="p-2 rounded-md m-0 mx-auto md:block hidden"><i
                            class="bi bi-list text-xl"></i></button><button
                        class="p-2 rounded-md m-0 ml-auto md:hidden block"><i class="bi bi-x-lg text-xl"></i></button>
                </div>
                <div class="flex-grow flex flex-col overflow-hidden">
                    <div class="flex-shrink-0 p-2 ">
                        <div class="relative  pr-2"><input placeholder="Search Menu..."
                                class="w-full text-sm rounded-full px-4 text-white placeholder-white/60 bg-black bg-opacity-25 p-3 rounded-full border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]"
                                type="text" value=""><i
                                class="bi bi-search absolute top-1/2 right-6 -translate-y-1/2 text-white "></i></div>
                    </div>
                    <div
                        class="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-transparent hover:scrollbar-thumb-black/50">
                        <nav class="flex flex-col px-2 pb-2">
                            <div
                                class="mb-3 bg-black bg-opacity-25 p-2 rounded-2xl border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]">
                                <div
                                    class="flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2">
                                    <span class="px-3 py-1 bg-black bg-opacity-30 rounded-xl">DESIGN KIT MENU</span><i
                                        class="bi bi-gear-fill"></i>
                                </div>
                                <ul class="flex flex-col space-y-1">
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-speedometer2 text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Dashboard</span></a></li>
                                    <!-- <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-envelope text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Mail</span><span
                                                class="text-xs font-medium bg-blue-500 text-white px-2 py-0.5 rounded-full ml-auto ">289</span></a>
                                    </li> -->
                                    <!-- <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-gem text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Icons</span><span
                                                class="text-xs font-medium bg-green-500 text-white px-2 py-0.5 rounded-full ml-auto ">New</span></a>
                                    </li> -->
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-file-earmark-plus text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Extra Page</span><i
                                                class="bi bi-chevron-down text-sm ml-auto transition-transform duration-200 "></i></a>
                                    </li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-box-arrow-in-right text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Login</span></a></li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-person-plus text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Sign Up</span></a></li>
                                </ul>
                            </div>
                            <div
                                class="mb-3 bg-black bg-opacity-25 p-2 rounded-2xl border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]">
                                <div
                                    class="flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2">
                                    <span class="px-3 py-1 bg-black bg-opacity-30 rounded-xl">WIDGET MENU</span><i
                                        class="bi bi-gear-fill"></i>
                                </div>
                                <ul class="flex flex-col space-y-1">
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-journal-richtext text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Blog App</span><i
                                                class="bi bi-chevron-down text-sm ml-auto transition-transform duration-200 "></i></a>
                                    </li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-puzzle text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">UI Element</span><i
                                                class="bi bi-chevron-down text-sm ml-auto transition-transform duration-200 "></i></a>
                                    </li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-image text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Media</span></a></li>
                                </ul>
                            </div>
                            <div
                                class="mb-3 bg-black bg-opacity-25 p-2 rounded-2xl border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]">
                                <div
                                    class="flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2">
                                    <span class="px-3 py-1 bg-black bg-opacity-30 rounded-xl">COMPONENT KIT
                                        MENU</span><i class="bi bi-gear-fill"></i>
                                </div>
                                <ul class="flex flex-col space-y-1">
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-pencil-square text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Form</span><i
                                                class="bi bi-chevron-down text-sm ml-auto transition-transform duration-200 "></i></a>
                                    </li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-table text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Tables</span></a></li>
                                    <li class="relative"><a href="#!"
                                            class="group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white "><i
                                                class="bi bi-bar-chart-line text-lg"></i><span
                                                class="ml-3 flex-grow whitespace-nowrap ">Map</span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="p-3 mt-auto  bg-black/20 flex-shrink-0">
                    <div class=" bg-white/10 dark:bg-gray-700/50 rounded-lg p-3 text-center text-white">
                        <div class="relative inline-block"><svg class="w-24 h-24" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" stroke-width="5"
                                    class="text-gray-200 dark:text-gray-600"></circle>
                                <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" stroke-width="5"
                                    stroke-dasharray="339.292" stroke-dashoffset="101.787"
                                    class="text-cyan-400 transform -rotate-90 origin-center"></circle>
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center"><span
                                    class="text-3xl font-bold">369</span><span
                                    class="text-xs text-white">VISITORS</span></div>
                        </div>
                    </div>
                </div>
            </aside>
            <div id="main-content" class="
                    flex flex-col pt-16 bg-transparent transition-all duration-300 ease-in-out
                    md:ml-64 ml-0
                ">
                <header class="fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out md:pl-64">
                    <div class="blur-smlef-header flex items-center justify-between p-3 text-white top">
                        <div class="flex items-center gap-3"><button class="md:hidden p-2 text-white"><i
                                    class="bi bi-list text-2xl"></i></button>
                            <div class="flex items-center gap-2">
                                <div class="relative"><button
                                        class="w-10 h-10 rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent relative"
                                        type="button"><i class="bi bi-bell text-lg"></i><span
                                            class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">23</span></button>
                                </div>
                                <div class="relative"><button
                                        class="w-10 h-10 rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent relative"
                                        type="button"><i class="bi bi-exclamation-triangle text-lg text-white"></i><span
                                            class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full">5</span></button>
                                </div>
                            </div>
                            <div
                                class="hidden md:flex items-center gap-6 py-2 px-5  bg-black bg-opacity-25 p-3 rounded-full border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)] ml-3">
                                <div class="flex items-center gap-2 text-white rounded text-sm"><i
                                        class="bi bi-calendar3"></i><span>Sun, December 28, 2025</span></div>
                                <div class="flex items-center gap-2 text-sm text-white"><i
                                        class="bi bi-clock"></i><span>12:59:02 AM</span></div>
                                <div class="flex items-center gap-2 text-sm text-white"><i
                                        class="bi bi-cloud"></i><span>New York <b>68°F</b>, 12km/h</span></div>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="relative"><a href="#!" class="flex items-center gap-2 text-white"><img
                                        alt="User Avatar" class="rounded-full" width="32" height="32"
                                        src="assets/img/user"><span class="hidden text-sm sm:inline">Hi, Shariq</span><i
                                        class="bi bi-chevron-down text-sm"></i></a></div><button
                                class="p-2 rounded-md hover:bg-transparent dark:hover:bg-transparent text-white"
                                type="button"><i class="bi bi-three-dots-vertical"></i></button>
                        </div>
                    </div>
                </header>