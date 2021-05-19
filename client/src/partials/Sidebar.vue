<template>
    <div id="sidebar">
        <div class="shadow-xl bottom-0 z-10 w-full md:w-48">

            <div
                class="h-full bg-gray-800 md:mt-16 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li class="mr-3 flex-1">
                        <router-link to="/"
                            class="block py-1 md:py-3 px-3 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                            <i class="fas fa-chart-area pr-0 md:pr-3"></i>
                            Home
                        </router-link>
                    </li>
                    <li class="mr-3 flex-1">
                        <router-link to="/services"
                            class="block py-1 md:py-3 px-3 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                            <i class="fas fa-tasks pr-0 md:pr-3"></i>
                            Services
                        </router-link>
                    </li>
                    <li class="mr-3 flex-1">
                        <router-link to="/create"
                            class="block py-1 md:py-3 px-3 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                            <i class="fas fa-plus pr-0 md:pr-3"></i>
                            New Service
                        </router-link>
                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>