
var app = new Vue ({

    el: '#app',
    data: {
        chatIndex: 0,
        personal: true,
        selected_user:"",
        input_user:"",
        search_user:"",
        showChatDropdown: false,
        personalinfo: {
            name: 'Roberto',
            profile_pic: 'img/avatar_4.jpg'
        },
        users: [
            {
                name: 'Francesco',
                lastlogin: '23/11/2020, alle 7:55',
                profile_pic: 'img/avatar_1.jpg',
                status: true, 
                selected: true, 
                chat: [
                    {
                        message: 'Lorem ipsum',
                        sender: true,
                        time: '10/10/2020, 20:54',
                        drop: false
                    },
                    {
                        message: 'Cos?',
                        sender: false,
                        time: '10/10/2020, 20:59',
                        drop: false
                    },
                    {
                        message: 'Non sai il latino? Grave',
                        sender: true,
                        time: '10/10/2020, 21:30',
                        drop: false
                    },
                    {
                        message: 'Gne gne',
                        sender: false,
                        time: '10/10/2020, 21:54',
                        drop: false
                    }
                ]
            },
            {
                name: 'Claudia',
                lastlogin: '24/11/2020, alle 07:00',
                profile_pic: 'img/avatar_2.jpg',
                status: true, 
                selected: false, 
                chat: [
                    {
                        message: 'Maria ti prego fammi rivedere i nostri figli',
                        sender: true,
                        time: '22/11/2020, 14:50',
                        drop: false
                    },
                    {
                        message: 'Ma che vuoi sono tua sorella idiota',
                        sender: false,
                        time: '22/11/2020, 15:12',
                        drop: false
                    },
                    {
                        message: 'Ops scusami Claudia',
                        sender: true,
                        time: '22/11/2020, 15:13',
                        drop: false
                    },
                    {
                        message: 'Ti faccio un bonifico se non racconti nulla alla mamma',
                        sender: true,
                        time: '22/11/2020, 15:14',
                        drop: false
                    },
                    {
                        message: 'Andata',
                        sender: false,
                        time: '22/11/2020, 16:00',
                        drop: false
                    }
                ]
            },
            {
                name: 'Maria',
                lastlogin: '23/11/2020, alle 21:30',
                profile_pic: 'img/avatar_3.jpg',
                status: true, 
                selected: false, 
                chat: [
                    {
                        message: 'Ti sto per bloccare',
                        sender: false,
                        time: '22/11/2020, 12:00',
                        drop: false
                    },
                    {
                        message: 'Dai ti prego Maria sono anche i miei figli',
                        sender: true,
                        time: '22/11/2020, 16:10',
                        drop: false
                    },
                    {
                        message: "Nel sogno che ho fatto eri con un'altra. Non dovevi.",
                        sender: false,
                        time: '22/11/2020, 16:30',
                        drop: false
                    },
                    {
                        message: 'UN SOGNO UN SOGNO è UN SOGNO',
                        sender: true,
                        time: '22/11/2020, 17:12',
                        drop: false
                    },
                    {
                        message: "TRA L'ALTRO è UN TUO SOGNO, NEMMENO MIO",
                        sender: true,
                        time: '22/11/2020, 17:13',
                        drop: false
                    }               
                ]
            }
        ]
    },
    methods: {
        changeChat: function(index) {
            this.chatIndex = index;
            this.users.map(function(user, index) {
                user.selected = user.selected === this.chatIndex;
                return user;
            })
            this.users[index].selected=true;
            this.scroll();
            this.showChatDropdown = false;
        },

        getTime: function () {
            let today = new Date();
            let dayTime = today.getDate() + '/' + (today.getMonth() + 1)+ '/' +today.getFullYear() + ',';
            let hours = today.getHours() + ":";
            let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
            let clock = hours + minutes; 
            var dateTime = dayTime +' '+ clock;
            return dateTime;
        },
        
        sendChat: function() {
            if (this.input_user != '') {
                this.users[this.chatIndex].chat.push(
                    {   message: this.input_user,
                        sender: true,
                        time: this.getTime(),
                        drop: false
                    });
            }
            this.input_user='';
            this.scroll();
            this.showChatDropdown = false;
        },

        receiveChat: function () {
            this.users[this.chatIndex].chat.push(
                {   message: "Non mi interessa.", 
                    sender: false, 
                    time: this.getTime(),
                    drop: false
                });
            this.scroll();
          },
      
        delayReceivedChat: function() {
            setTimeout(this.receiveChat, 1000);
        },

        scrollToEnd: function() {    	
            let chat = this.$el.querySelector("#chat");
            chat.scrollTop = chat.scrollHeight;
        },

        scroll: function() {
            setTimeout(this.scrollToEnd, 0);
        },

        filterChat: function() {
            this.users.forEach(user => {
                if (user.name.toLowerCase().includes(this.search_user.toLowerCase())) {
                    user.status = true;
                } else {
                    user.status = false;
                };
            });
        },

        dropdownMsgMenu: function(i) {
            if (this.users[this.chatIndex].chat[i].drop === false) {
                this.users[this.chatIndex].chat[i].drop = true;
            } else {
                this.users[this.chatIndex].chat[i].drop = false;
            }
        },

        deleteMsg: function(i) {
            this.users[this.chatIndex].chat.splice(i, 1);
        }
    }
        
})