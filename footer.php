                <footer class="p-3 text-center text-sm text-white">Make with Love ♥ 2025 Thesmile All Rights Reserved
                </footer>
            </div>
            <div id="settings-panel-backdrop" class="fixed inset-0 bg-black/30 z-40 hidden"></div>
            <div id="settings-panel"
                class=" bg-white paper-wrap bevel tlbr p-0 fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out translate-x-full">
                <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
                    <h5 class="text-xl font-bold upprcase text-gray-900 dark:text-gray-100 pl-12">Settings Panel</h5>
                    <button type="button"
                        class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"><i
                            class="bi bi-x-lg"></i></button>
                </div>
                <div class="overflow-y-auto max-h-[calc(100vh-80px)]">
                    <div class="p-4 border-b dark:border-gray-700">
                        <div class="widget-container">
                            <h3
                                class="flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2">
                                <span class="px-3 py-1 mb-3 bg-black bg-opacity-60 rounded-xl"><i
                                        class="bi bi-speedometer2"></i>&nbsp;&nbsp;MAIN WIDGET</span>
                            </h3>
                            <div class="metrics-grid">
                                <div class="metric-row">
                                    <div class="metric-circle-wrapper"><span class="metric-circle"><span
                                                class="metric-value">86</span><canvas height="110" width="110"
                                                class="metric-canvas"></canvas></span></div>
                                    <div class="metric-details"><b class="metric-label">Distance traveled</b><i
                                            class="metric-description">86% to the check point</i></div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-circle-wrapper"><span class="metric-circle"><span
                                                class="metric-value">60</span><canvas height="110" width="110"
                                                class="metric-canvas"></canvas></span></div>
                                    <div class="metric-details"><b class="metric-label">The average speed</b><i
                                            class="metric-description">30KM/h avarage speed</i></div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-circle-wrapper"><span class="metric-circle"><span
                                                class="metric-value">25</span><canvas height="110" width="110"
                                                class="metric-canvas"></canvas></span></div>
                                    <div class="metric-details"><b class="metric-label">Overall result</b><i
                                            class="metric-description">30KM/h avarage Result</i></div>
                                </div>
                            </div>
                            <style>
                                .widget-container {
                                    border-radius: 4px;
                                    min-height: 300px;
                                    margin-bottom: 15px;
                                }

                                .widget-title {
                                    background: red;
                                    color: #222;
                                    font-weight: 800;
                                    line-height: 14.3px;
                                    margin-bottom: 20px;
                                    margin-left: 20px;
                                }

                                .widget-badge {
                                    background-color: rgba(0, 0, 0, 0.1);
                                    border-radius: 11px;
                                    border-color: rgba(96, 73, 230, 1);
                                    color: #222;
                                    display: inline-block;
                                    line-height: 14.3px;
                                    margin-bottom: 20px;
                                    padding: 2px 10px 4px 10px;
                                }

                                .metrics-grid {
                                    padding: 0 15px;
                                    position: relative;
                                    width: 100%;
                                }

                                .metric-row {
                                    display: flex;
                                    align-items: flex-start;
                                    margin-bottom: 15px;
                                }

                                .metric-circle-wrapper {
                                    flex-shrink: 0;
                                    width: 60px;
                                    margin-right: 15px;
                                }

                                .metric-circle {
                                    display: inline-block;
                                    position: relative;
                                    width: 60px;
                                    height: 60px;
                                    text-align: center;

                                }

                                .metric-value {
                                    display: inline-block;
                                    color: #222;
                                    line-height: 60px;
                                    text-align: center;
                                    position: relative;
                                    z-index: 2;
                                }

                                .metric-canvas {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 60px;
                                    height: 60px;
                                }

                                .metric-details {
                                    flex: 1;
                                }

                                .metric-label {
                                    color: #222;
                                    font-size: 12px;
                                    font-weight: 700;
                                    display: block;
                                    text-transform: capitalize;
                                    margin-bottom: 2px;
                                }

                                .metric-description {
                                    color: #222;
                                    font-size: 10px;
                                    display: block;
                                    line-height: 14.2857px;
                                }
                            </style>
                        </div>
                    </div>
                    <div class="p-4">
                        <h6 class="mb-3 font-semibold text-sm text-gray-900 dark:text-gray-100">User Chat</h6>
                        <ul class="space-y-3">
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="Alex Johnson"
                                        width="40" height="40"
                                        src="https://avatar.iran.liara.run/public/boy?username=Scott">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">Alex
                                            Johnson</h6><small class="text-gray-500 dark:text-gray-400">Online</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">Online</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="Maria Garcia"
                                        width="40" height="40" src="https://avatar.iran.liara.run/public/boy">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">Maria
                                            Garcia</h6><small class="text-gray-500 dark:text-gray-400">5 mins
                                            ago</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">Online</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="James Wilson"
                                        width="40" height="40" src="https://avatar.iran.liara.run/public/boy">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">James
                                            Wilson</h6><small class="text-gray-500 dark:text-gray-400">15 mins
                                            ago</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full">Offline</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="Sophia Chen"
                                        width="40" height="40" src="https://avatar.iran.liara.run/public/boy">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">Sophia
                                            Chen</h6><small class="text-gray-500 dark:text-gray-400">Online</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">Online</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="David Kumar"
                                        width="40" height="40"
                                        src="https://avatar.iran.liara.run/public/boy?username=Tony">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">David
                                            Kumar</h6><small class="text-gray-500 dark:text-gray-400">30 mins
                                            ago</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full">Offline</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="Emma Taylor"
                                        width="40" height="40"
                                        src="https://avatar.iran.liara.run/public/girl?username=harry">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">Emma
                                            Taylor</h6><small class="text-gray-500 dark:text-gray-400">Online</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">Online</span>
                            </li>
                            <li class="flex items-center justify-between">
                                <div class="flex items-center"><img class="rounded-full mr-3" alt="Liam O'Connor"
                                        width="40" height="40"
                                        src="https://avatar.iran.liara.run/public/girl?username=Maria">
                                    <div>
                                        <h6 class="mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100">Liam
                                            O'Connor</h6><small class="text-gray-500 dark:text-gray-400">45 mins
                                            ago</small>
                                    </div>
                                </div><span
                                    class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full">Offline</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        setTimeout(() => {
            if (window.initGoogleMap) {
                window.initGoogleMap();
            }
        }, 500);

    </script>
</body>

</html>