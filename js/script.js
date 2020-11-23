
var app = new Vue ({

    el: '#app',
    data: {
        users: [
            {
                name: 'Francesco',
                lastlogin: '23/11/2020, alle 7:55',
                profile_pic: 'img/avatar_1.jpg',
                status: true, 
                /* for online status, replace last login ideally */
                selected: true, 
                /* selected in chat list */
                chat: [
                    {
                        message: 'Lorem ipsum',
                        sender: 'me',
                        time: '10/10/2020, 20:54'
                    },
                    {
                        message: 'Cos?',
                        sender: 'you',
                        time: '10/10/2020, 20:59'
                    },
                    {
                        message: 'Non sai il latino? Grave',
                        sender: 'me',
                        time: '10/10/2020, 21:30'
                    },
                    {
                        message: 'Gne gne',
                        sender: 'you',
                        time: '10/10/2020, 21:54'
                    }
                ]
            },
            {
                name: 'Claudia',
                lastlogin: '24/11/2020, alle 07:00',
                profile_pic: 'img/avatar_2.jpg',
                status: false, 
                /* for online status, replace last login ideally */
                selected: false, 
                /* selected in chat list */
                chat: [
                    {
                        message: 'Maria ti prego fammi rivedere i nostri figli',
                        sender: 'me',
                        time: '22/11/2020, 14:50'
                    },
                    {
                        message: 'Ma che vuoi sono tua sorella idiota',
                        sender: 'you',
                        time: '22/11/2020, 15:12'
                    },
                    {
                        message: 'Ops scusami Claudia',
                        sender: 'me',
                        time: '22/11/2020, 15:13'
                    },
                    {
                        message: 'Ti faccio un bonifico se non racconti nulla alla mamma',
                        sender: 'me',
                        time: '22/11/2020, 15:14'
                    },
                    {
                        message: 'Andata',
                        sender: 'you',
                        time: '22/11/2020, 16:00'
                    }
                ]
            },
            {
                name: 'Maria',
                lastlogin: '23/11/2020, alle 21:30',
                profile_pic: 'img/avatar_3.jpg',
                status: false, 
                /* for online status, replace last login ideally */
                selected: false, 
                /* selected in chat list */
                chat: [
                    {
                        message: 'Ti sto per bloccare',
                        sender: 'you',
                        time: '22/11/2020, 12:00'
                    },
                    {
                        message: 'Dai ti prego Maria sono anche i miei figli',
                        sender: 'me',
                        time: '22/11/2020, 16:10'
                    },
                    {
                        message: "Nel sogno che ho fatto eri con un'altra. Non dovevi.",
                        sender: 'you',
                        time: '22/11/2020, 16:30'
                    },
                    {
                        message: 'UN SOGNO UN SOGNO è UN SOGNO',
                        sender: 'me',
                        time: '22/11/2020, 17:12'
                    },
                    {
                        message: "TRA L'ALTRO è UN TUO SOGNO, NEMMENO MIO",
                        sender: 'me',
                        time: '22/11/2020, 17:13'
                    }               
                ]
            }
        ],
        methods: {
            changeChat: function() {
                
            }
        }

    }
})