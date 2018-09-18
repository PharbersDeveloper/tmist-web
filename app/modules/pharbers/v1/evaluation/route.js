import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
                title: "3333333",
                content: "ddddddddddddfadlkfjasldfkjasldfk",
                ability: [
                    { title: "aaad", level: "D", desc: [{ title: "dfjsad", content: ["dfasdfasdf", "eoruwioeruoi"] }] },
                    { title: "erds", level: "S", desc: [{ title: "dfg", content: ["erdf", "eoruwiodfderuoi"] }] }
                ]
            },
            {
                title: "3333333",
                content: "ddddddddddddfadlkfjasldfkjasldfk",
                ability: [
                    { title: "aaad", level: "D", desc: [{ title: "dfjsad", content: ["dfasdfasdf", "eoruwioeruoi"] }] },
                    { title: "erds", level: "S", desc: [{ title: "dfg", content: ["erdf", "eoruwiodfderuoi"] }] }
                ]
            },
        ]

    },
    actions: {

    }
});