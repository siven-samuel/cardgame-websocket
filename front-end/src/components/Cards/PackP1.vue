<template>
<div class="pack-wrap p1-pack">
    <div class="pack">
       <h3>{{Myitems.length}}</h3>
       <button @click="saveDeck">save deck</button>
    </div>
    <div class="cards">
    <div class="my-cards">
        <Card @removeCard="remove"
        v-for="item in Myitems" :key="item.id"
        :CardData="item"
        :AllCards="false"
        />
    </div>
    <div class="all-cards">
        <Card @addCard="add"
        v-for="item in items" :key="item.id"
        :CardData="item"
        :AllCards="true"
        :showDesc="'active'"
        />
    </div>
    </div>
</div>
</template>

<script>
import Card from '@/components/Cards/ShowCard.vue';

export default {
    name: 'PackP1',
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'destroy weapons',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['weapons'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy weapons',
                    img: 'destroy_weapons',
                },
                {
                    id: 2,
                    name: 'destroy energy',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['energy'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy energy',
                    img: 'destroy_energy',
                },
                {
                    id: 3,
                    name: 'destroy minerals',
                    cost: 4,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['minerals', 'weapons', 'energy'],
                    effectCount: 8,
                    desc: 'destroy 8 enemy mineralss',
                    img: 'destroy_minerals',
                },
                {
                    id: 4,
                    name: 'Evil propaganda',
                    cost: 25,
                    currency: 'energy',
                    effect: 'thief',
                    target: ['reactors', 'miners', 'factories'],
                    effectCount: 1,
                    desc: 'steal 1 enemy reactors, workes, minners',
                    img: 'propaganda',
                },
                {
                    id: 5,
                    name: 'mini missle',
                    cost: 1,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 2,
                    desc: '2 damage enemy',
                    img: 'mini-missle',
                },
                {
                    id: 6,
                    name: 'repair bots',
                    cost: 1,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 2,
                    desc: 'add to your 2 base',
                    img: 'nanobots',
                },
                {
                    id: 7,
                    name: 'terrorist attack',
                    cost: 12,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['weapons', 'minerals', 'energy'],
                    effectCount: 4,
                    desc: 'destroy 4 enemy weapons, minerals, energy',
                    img: 'terrorist',
                },
                {
                    id: 8,
                    name: 'add reactor',
                    cost: 8,
                    currency: 'energy',
                    effect: 'add',
                    target: ['reactors'],
                    effectCount: 1,
                    desc: 'add 1 reactor for your base',
                    img: 'add_reactor',
                },
                {
                    id: 9,
                    name: 'add warfactory',
                    cost: 8,
                    currency: 'weapons',
                    effect: 'add',
                    target: ['factories'],
                    effectCount: 1,
                    desc: 'add 1 factory for your base',
                    img: 'add_factory',
                },
                                {
                    id: 10,
                    name: 'add minner',
                    cost: 8,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['miners'],
                    effectCount: 1,
                    desc: 'add 1 miner for your base',
                    img: 'add_minner',
                },
                                {
                    id: 11,
                    name: 'Battle droid',
                    cost: 4,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 6,
                    desc: '6 damage',
                    img: 'droid',
                },
                {
                    id: 13,
                    name: 'Ion Cannon',
                    cost: 21,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 26,
                    desc: '26 damange',
                    img: 'ion_cannon',
                },
                {
                    id: 14,
                    name: 'Sub-space missle',
                    cost: 18,
                    currency: 'energy',
                    effect: 'remove',
                    target: ['castle'],
                    effectCount: 21,
                    desc: '21 damange ignore Shield',
                    img: 'sub-space',
                },
                {
                    id: 15,
                    name: 'Soldier',
                    cost: 2,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 4,
                    desc: '4 damange',
                    img: 'soldier',
                },
                {
                    id: 16,
                    name: 'Crane',
                    cost: 18,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 20,
                    desc: 'add 20 to your base',
                    img: 'crane',
                },
                {
                    id: 17,
                    name: 'Build Robot',
                    cost: 5,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 5,
                    desc: 'add 5 your base',
                    img: 'builder_robot',
                },
                {
                    id: 18,
                    name: 'Atom bomb',
                    cost: 28,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 32,
                    desc: '32 damange',
                    img: 'atombomb',
                },
                {
                    id: 19,
                    name: 'Teleport Storage',
                    cost: 15,
                    currency: 'weapons',
                    effect: 'thief',
                    target: ['weapons', 'minerals', 'energy'],
                    effectCount: 5,
                    desc: 'steal 5 weapons, minerals, energy from enemy base',
                    img: 'teleport1',
                },
                {
                    id: 20,
                    name: 'Povoz',
                    cost: 10,
                    currency: 'minerals',
                    effect: 'remove',
                    target: ['castle'],
                    effectCount: 8,
                    desc: 'steal 8 from enemy base',
                    img: 'povoz',
                },
                {
                    id: 21,
                    name: 'Crane Replicator',
                    cost: 22,
                    currency: 'energy',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 22,
                    desc: 'add 22 to base',
                    img: 'crane3',
                },
                {
                    id: 22,
                    name: 'Bomber',
                    cost: 10,
                    currency: 'weapons',
                    effect: 'remove',
                    target: ['shield'],
                    effectCount: 12,
                    desc: '12 damange',
                    img: 'bomber',
                },
                {
                    id: 23,
                    name: 'Mother Ship',
                    cost: 39,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['castle'],
                    effectCount: 45,
                    desc: '21 damange',
                    img: 'carrier',
                },
                {
                    id: 24,
                    name: 'Replicate Weapons',
                    cost: 4,
                    currency: 'energy',
                    effect: 'add',
                    target: ['weapons'],
                    effectCount: 8,
                    desc: 'add 8 weapons',
                    img: 'replicate_weapons',
                },
                {
                    id: 25,
                    name: 'Replicate Energy',
                    cost: 4,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['energy'],
                    effectCount: 8,
                    desc: 'generate 8 energy',
                    img: 'replicate_energy',
                },
                {
                    id: 26,
                    name: 'Replicate Minerals',
                    cost: 4,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['minerals'],
                    effectCount: 8,
                    desc: 'add 8 minerals',
                    img: 'replicate_minerlas',
                },
                {
                    id: 27,
                    name: 'Shield Battery',
                    cost: 1,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 2,
                    desc: 'recharge shield 2 points',
                    img: 'shield1',
                },
                {
                    id: 28,
                    name: 'Shield recharge',
                    cost: 3,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 6,
                    desc: 'recharge shield 6 points',
                    img: 'shield2',
                },
                {
                    id: 29,
                    name: 'Big shield recharge',
                    cost: 6,
                    currency: 'minerals',
                    effect: 'add',
                    target: ['shield'],
                    effectCount: 12,
                    desc: 'recharge shield 4 points',
                    img: 'shield3',
                },
            ],
            Myitems: [],
        };
    },
    components: {
      Card,
    },
    created() {
        this.Myitems = this.items;
        if (localStorage.getItem('deck') !== null) {
            const MyDeck = JSON.parse(localStorage.getItem('deck'));
            this.$store.commit('addPack1', this.shuffle(MyDeck));
            this.$store.commit('addPack2', this.shuffle(MyDeck));
            this.Myitems = MyDeck;
        } else {
            this.$store.commit('addPack1', this.shuffle(this.Myitems));
            this.$store.commit('addPack2', this.shuffle(this.Myitems));
        }
    },
    methods: {
        shuffle(card) {
            const a = card;
            for (let i = a.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },
        saveDeck() {
            localStorage.setItem('deck', JSON.stringify(this.Myitems));
            this.$store.commit('addPack1', this.shuffle(this.Myitems));
            this.$store.commit('addPack2', this.shuffle(this.Myitems));
        },
        Test() {
             const rest = JSON.parse(localStorage.getItem('deck'));
             this.Myitems = rest;
        },
        remove(card) {
            this.Myitems = this.Myitems.filter((cards) => cards.id !== card.id);
        },
        add(card) {
            const uniqe = {
                    id: card.id,
                    name: card.name,
                    cost: card.cost,
                    currency: card.currency,
                    effect: card.effect,
                    target: card.target,
                    effectCount: card.effectCount,
                    desc: card.desc,
                    img: card.img,
            };
            const cards = this.Myitems;
            const x = Math.floor((Math.random() * 10000) + 1);
            const found = cards.some((element) => element.id === card.id);
            if (found) {
                uniqe.id += `-${x}`;
            }
            cards.push(uniqe);
            this.Myitems = cards;
        },
    },
};
</script>

<style scoped lang="less">
.pack-wrap {
    .cards {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 100vh;
        .my-cards {
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            justify-content: center;
            overflow: auto;
        }
        .all-cards {
            justify-content: center;
            overflow: auto;
            flex-direction: column;
            width: 20%;
            padding-bottom: 100px;
        }
    }
}
</style>
