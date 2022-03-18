<template>
    <input
        v-model="value"
        type="text"
        class="appearance-none w-80 bg-gray-50 border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left sm:text-sm text-primary-900 placeholder-primary-900 placeholder-opacity-60 focus:ring-2 focus:ring-primary-400 focus:outline-none duration-300"
        placeholder="Rechercher"
    >
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {

    name: 'SearchInput',

    computed: {
        ...mapGetters([
            'searchValue',
        ]),

        value: {
            get() {
                return this.searchValue;
            },

            set(value) {
                this.setSearchValue(value);
            },
        },
    },

    methods: {
        ...mapMutations([
            'setSearchValue',
        ]),
    },

};
</script>
