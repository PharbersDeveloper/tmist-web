export default function() {
    this.post('/api/proposal/lst', (schema, request) => {
        window.console.warn(request.requestBody);
        return {
            "data": [{
                "attributes": {
                    "name": "关卡一",
                    "desc": "This is proposal first.",
                    "scenario_id": "dddd"

                },
                "id": "5b7e454a8fb8076c3c3304p0",
                "type": "proposal"
            }, {
                "attributes": {
                    "name": "关卡二",
                    "desc": "This is second proposal",
                    "scenario_id": "cccc"

                },
                "id": "5b7e454a8fb8076c3c3304p1",
                "type": "proposal"
            }, ]
        }
    });

    this.post('/api/decision', (schema, request) => {
        window.console.info(request.requestBody);
        return {
            "data": [{
                "type": "alldecision",
                "id": "tmp_12351c38-5cfb-4175-916d-7acd180b3b0d",
                "attributes": {
                    "test": "tehdfsadfald",
                    "component_name": "hospital-decision",
                    "major": 1,
                    "minor": 0
                },
                "relationships": {
                    "hospitallist": {
                        "data": {
                            "type": "hospital",
                            "id": "5b435533ed925c05565hosp1"
                        },
                    },
                    "vertical": {},
                    "verticalright": {}
                }
            }, {
                "type": "alldecision",
                "id": "tmp_2892571b-30be-46f0-b47b-db753ed38c50",
                "attributes": {
                    "test": "aaaaaaaaaaa",
                    "component_name": "manager-decision",
                    "major": 1,
                    "minor": 0
                },

            }, ]

        }
    });

    this.post('/api/layout/lst', (schema, request) => {
        return {
            "data": [{
                    "type": "alldecision",
                    "id": "tmp_12351c38-5cfb-4175-916d-7acd180b3b0d",
                    "attributes": {
                        "test": "hhhhhhhhhhhhhhhh",
                        "component_name": "hospital-decision",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        // "managerdecision": {
                        //     "data": {
                        //         "type": "mgrdecision",
                        //         "id": "tmp_5442392d-e4ed-48a0-bba1-5bebbe52919e"
                        //     }
                        // },
                        "hospitaldecison": {
                            "data": {
                                "type": "hospdecision",
                                "id": "tmp_57e02e26-6e5a-4af2-9a97-b2f5feff8a1c",
                            }
                        }
                    }
                },
                {
                    "type": "alldecision",
                    "id": "tmp_2892571b-30be-46f0-b47b-db753ed38c50",
                    "attributes": {
                        "test": "mmmmmmmmmmmmmmm",
                        "component_name": "manager-decision",
                        "major": 1,
                        "minor": 0
                    },
                    "relationships": {
                        "managerdecision": {
                            "data": {
                                "type": "mgrdecision",
                                "id": "tmp_f5463806-32ce-4000-a0c4-bdb799ab17b8",
                            }
                        },
                        // "hospitaldecison": {
                        //     "data": {
                        //         "type": "hospdecision",
                        //         "id": "tmp_d5ed6c98-c3f8-426b-9daf-bf0be25d2d87"
                        //     }
                        // }
                    }
                }
            ],
            "included": [{
                    "type": "mgrdecision",
                    "id": "tmp_f5463806-32ce-4000-a0c4-bdb799ab17b8",
                    "attributes": {
                        "component_name": "manager-decision"
                    }
                },
                {
                    "type": "hospdecision",
                    "id": "tmp_57e02e26-6e5a-4af2-9a97-b2f5feff8a1c",
                    "attributes": {
                        "component_name": "hospital-decision"
                    }
                },
            ]
        }
    })



}