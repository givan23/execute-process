export const DevtoolSettings = {
    code: 1,
    result: {
        toolBarDetail: {
            buttonList: [
                {
                    btnCode: "STATIC",
                    iconPath: "static-icon.png"
                },
                {
                    btnCode: "DYNAMIC",
                    iconPath: "dynamic-icon.png"
                },
                {
                    btnCode: "THEME",
                    iconPath: "theme-icon.png"
                },
                {
                    btnCode: "GAME",
                    iconPath: "game-icon.png"
                }
            ]
        },
        channelList: [
            {
                channel: "STATIC",
                list: [
                    {
                        routeTitle: "HEADER",
                        route: "/header",
                        selected: false,
                        subItemList: [
                            {
                                code: 1,
                                subItemTitle: "header",
                                viewport: "responsive",
                                status: true,

                            },
                        ]
                    },
                    {
                        routeTitle: "LANDING",
                        route: "/",
                        selected: false,
                        subItemList: [
                            {
                                code: 1,
                                subItemTitle: "landingCentral",
                                viewport: "responsive",
                                status: true,

                            },
                            {
                                code: 2,
                                subItemTitle: "sportList",
                                viewport: "desktop",
                                status: true

                            },
                            {
                                code: 3,
                                subItemTitle: "sportListMobile",
                                viewport: "mobile",
                                status: true

                            },
                        ]
                    },
                    {
                        routeTitle: "QUOTE",
                        route: "/quote",
                        selected: false,
                        subItemList: [
                            {
                                code: 1,
                                subItemTitle: "quoteCentral",
                                viewport: "desktop",
                                status: true
                            },
                            {
                                code: 2,
                                subItemTitle: "sportList",
                                viewport: "desktop",
                                status: true

                            },
                            {
                                code: 3,
                                subItemTitle: "sportListMobile",
                                viewport: "mobile",
                                status: true

                            },
                        ]
                    },
                    {
                        routeTitle: "FOOTER",
                        route: "/footer",
                        selected: false,
                        subItemList: [
                            {
                                code: 1,
                                subItemTitle: "footer",
                                viewport: "responsive",
                                status: true,
                            },
                        ]
                    },
                ],
            },
            {
                channel: "THEME",
                list: [
                    {
                        routeTitle: "THEME",
                        route: "/theme",
                        selected: false,
                        subItemList: [
                            {
                                code: 1,
                                subItemTitle: "classic",
                                nameClass: "",
                                viewport: "responsive",
                                status: true,
                            },
                            {
                                code: 2,
                                subItemTitle: "spectre",
                                nameClass: "-spectre",
                                viewport: "responsive",
                                status: false,
                            },
                        ]
                    },
                ]
            },
            {
                channel: "GAME",
                list: [
                    {
                        gameTitle: "Space Invaders",
                        iframeUrl: "/#"
                    }
                ]
            }
        ]
    }
};