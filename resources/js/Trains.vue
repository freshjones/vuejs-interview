<template>
    <div class="flex flex-column">
        <div class="font-bold ">{{ name }}</div>
        <div class="flex-1 flex flex-column">
            <div v-for="(train,index) in getTrains">
                <train
                    class="train"
                    name="train.name"
                    v-bind:type="train.type"
                    :train="train"
                ></train>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
    import Train from './Train';
    import { mapActions, mapGetters } from 'vuex';
    import _ from 'lodash';
    export default {
        props: {
            name: {
                default: 'Trains'
            }
        },
        components: {
            Train
        },
        computed: {
            ...mapGetters('app', ['getTrains'])
        },
        mounted() {
            this.name = 'My Train List'
            this.loadTrains();
        },
        methods: {
            ...mapActions('app', ['setTrains']),
            async loadTrains() {
                const trains = await this.axiosCallGetTrains();
                console.log(trains);
                this.setTrains(trains);
            },
            axiosCallGetTrains() {
                return new Promise(resolve => {
                    setTimeout(function() {
                        var trains = [
                            {
                                id: 1,
                                name: "train 1",
                                type: "steam"
                            },
                            {
                                'id': 2,
                                'name': "train 2",
                                'type': "electric"
                            },
                            {
                                id: 3,
                                name: "train 3",
                                type: "Nuke"
                            }
                        ]
                        resolve(trains);
                    },1500);
                });
            }
        }
    }
</script>

<style scoped>
    .train::v-deep {
        font: '700';
        color: red;
        background: "url(`${this.train.image}`)";
    }
</style>