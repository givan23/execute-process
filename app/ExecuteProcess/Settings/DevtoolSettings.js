export const DevtoolSettings = {
    code: 1,
    result: {
        toolBarDetail: {
            buttonList: [
                {
                    btnCode: 1,
                    iconPath: "icon-1.png"
                },
                {
                    btnCode: 2,
                    iconPath: "icon-2.png"
                }
            ]
        },
        channelList: [
            {
                channel: "URL",
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
                                subItemTitle: "item1",
                                viewport: "desktop",
                                status: true
                            },
                            {
                                code: 2,
                                subItemTitle: "item2",
                                viewport: "responsive",
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
                channel: "TOOLS",
                list: []
            }
        ]
    }
};