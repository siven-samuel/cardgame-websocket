<template>
<div class="card-wrap" v-bind:class="cardClasses">
    <div class="last-played" :class="Color">
        <Card v-if="LastPlayedCard !== null" :CardData="LastPlayedCard" :showDesc="'active'"/>
    </div>
    <div class="cards hand-p1" v-show="Player === 'P1'">
        <Card @clicked="onClickChild"
        v-for="item in itemsP1.slice(0, 6)" :key="item.id"
        :Player = "'P1'"
        v-bind:CardData="item"/>
    </div>
    <div class="cards hand-p2" v-show="Player === 'P2'">
        <Card @clicked="onClickChild"
        v-for="item in itemsP2.slice(0, 6)" :key="item.id"
        :Player = "'P2'"
        v-bind:CardData="item"/>
    </div>
    <button v-on:click="skipTurn()">Skip</button>
    <div class="not-ready-box" v-if="isNetwork">
        Waitng for another player...
    </div>
</div>
</template>

<script>
import Card from '@/components/Cards/Card.vue';
import io from 'socket.io-client';

const socket = io();

export default {
    name: 'Hand',
    data() {
        return {
            itemsP1: [
            ],
            itemsP2: [
            ],
            SkipCard: {
                id: 0,
                name: 'Player skip Turn',
                cost: 0,
                currency: '',
                effect: 'skip',
                target: [],
                effectCount: 8,
                desc: 'Player skip Turn',
                img: '',
            },
            MyPlayer: 'P1',
            BoardReady: false,
            LastPlayedCard: null,
            Color: null,
        };
    },
    created() {
        if (this.isNetwork) {
            socket.on('receiveMessage', (obj) => this.socketTurn(obj));

            socket.on('allMessages', (objs) => {
                // const myJSON = JSON.stringify(objs);
                // alert(objs[0].login);
                if (objs.length >= 1 && objs.length < 3 && objs[0].login === 'start') {
                    this.MyPlayer = 'P2';
                    /* eslint-disable */
                    socket.emit('sendMessage', { 'login': 'ready' , 'msg': 'players is ready' });
                    /* eslint-endable */
                }
            });
            /* eslint-disable */
            socket.emit('sendMessage', { 'login': 'start' , 'msg': 'player is loggged' });
            /* eslint-endable */
        }
    },
    mounted() {
        let pack1 = this.$store.getters.packp1;
        let pack2 = this.$store.getters.packp2;
        this.itemsP1 = pack1;
        this.itemsP2 = pack2;
    },
    computed: {
        isNetwork() {
            if (this.$router.currentRoute.value.path === '/multiplayer') {
                return true;
            }
            return false;
        },
        Player() {
            return this.$store.getters.isPlayer;
        },
        cardClasses() {
            let cardClasses = '';
            if (this.isNetwork) {
                if(this.BoardReady) {
                    cardClasses += ' game-ready';
                }
                
                if(this.MyPlayer != this.Player){
                    cardClasses += ' enemy-turn';
                }
            }
            return cardClasses;
        }
    },
    methods: {
        testPlayer() {
            alert(`MyPlayer is ${this.MyPlayer}`);
        },
        socketTurn(obj) {
            if(obj.login === 'start') {
                return;
            } else if (obj.login === 'ready') {
                 alert(`game is ready for ${this.MyPlayer}`);
                 this.BoardReady = true;
            } else if (obj.login != this.MyPlayer && 'id' in obj.msg) {
                this.LastPlayedCard = obj.msg;
                this.Color = obj.login;
                this.$store.commit('increment', obj.msg);
                this.$store.commit('playerChange');
            }
        },
        skipTurn() {
            this.$store.commit('increment', this.SkipCard);
            this.onClickChild(this.SkipCard);
        },
        onClickChild(playedCard) {
            this.LastPlayedCard = playedCard;
            this.Color = this.MyPlayer; 
            if (this.Player === 'P1') {
                this.itemsP1 = this.itemsP1.filter((cards) => cards.id !== playedCard.id);
                if(playedCard.effect !== 'skip') {
                    this.itemsP1.push(playedCard);
                }
                this.$store.commit('playerChange');
            } else {
                this.itemsP2 = this.itemsP2.filter((cards) => cards.id !== playedCard.id);
                if(playedCard.effect !== 'skip') {
                    this.itemsP2.push(playedCard);
                }
                this.$store.commit('playerChange');
            }
            if (this.isNetwork) {
            /* eslint-disable */
            socket.emit('sendMessage', { 'login': this.MyPlayer , 'msg': playedCard });
            /* eslint-endable */
            }
        },
    },
    components: {
        Card,
        gameType: String,
    },

};
</script>

<style lang="less">
.cards {
    display: flex;
    justify-content: center;
}
.last-played {
    &.P2 .card{
        background-color: blue;
    }
    &.P1 .card{
        background-color: red;
    }
}
</style>
<style scoped lang="less">
.card-wrap {
    position: relative;
}
.card-wrap button {
    position: fixed;
    top: 30px;
    left: 50%;
    background: black;
    border: 0;
    color: white;
    font-size: 15px;
    transform: translate(-50%, -50%);
    padding: 11px;
}
.last-played {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -209px;
}
.not-ready-box {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 40px;
    width: 100%;
    height: 100%;
}
.game-ready {
    .not-ready-box {
        display: none;
    }
}
.hand-p1 {
    .card {
        background: red;
        &::before {
            background: red; 
        }
    }
}
.hand-p2 {
    .card {
        background: blue;
        &::before {
           background: blue; 
        }
    }
}
.enemy-turn {
    pointer-events: none;
    .card {
        &.disable {
            opacity: 1;
        }
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
}

</style>
