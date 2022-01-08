<template>
    <input
        v-model="value"
        type="text"
        class="appearance-none px-4 py-2 border border-primary rounded shadow-sm text-center focus:outline-none duration-300"
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
