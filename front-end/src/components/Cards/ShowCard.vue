<template>
    <div class="card" v-on:click="doCard(CardData)">
     <div class="desc">{{CardData.id}}</div>
        <div class="top-card">
            <div class="currency">{{CardData.currency}}</div>
            <div class="cost">{{CardData.cost}}</div>
        </div>
        <img alt="Card image" :src="`images/${CardData.img}.jpg`">
        <div class="name">{{CardData.name}}</div>
        <div class="desc" :class="showDesc">{{CardData.desc}}</div>
    </div>
</template>

<script>
export default {
    name: 'ShowCard',
    data() {
        return {
        };
    },
    props: ['CardData', 'AllCards', 'showDesc'],
    methods: {
        doCard(msg) {
            if (this.AllCards) {
                this.$emit('addCard', msg);
            } else {
                this.$emit('removeCard', msg);
            }
        },
    },
};
</script>

<style scoped lang="less">
    .card {
        position: relative;
        margin: 10px;
        background: #801919;
        color: white;
        cursor: pointer;
        padding: 10px;
        width: 120px;
        max-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
            max-width: 100px;
        }
        .top-card {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            width: 100%;
        }
        .name {
            font-size: 16px;
        }
        .desc {
            font-size: 12px;
        }
    }
    .card.throw {
        transition: 0.8s;
        opacity: 0;
        pointer-events:none;
    }
    .card.disable {
        opacity: 0.4;
        pointer-events:none;
    }

@media only screen and (max-width: 800px) {
    .card {
    font-size: 11%;
    max-width: 60px;
    margin: 6px !important;
        img {
            width: 67px !important;
        }
        .name {
            font-size: 13px;
        }
        .desc {
            display: none;
            &.active {
                display: block;
            }
        }
    }
}

</style>
