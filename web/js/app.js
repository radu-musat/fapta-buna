const app = new Vue({
    el: "#main-page",

    data:{
        goodDeeds: 50,
        message: '',
        messages: [
            'Akhmed a fost aici!',
            'Datorita voua planta mea inca traieste!',
            'Herro! My name is Namhir!'
        ],

        activeBlock: 'buttons'
    },

    methods:{
        addMessage: function () {
            this.messages.push(this.message);
        },

        displayBlock: function (block) {
            this.activeBlock = block;
        }
    }
});
