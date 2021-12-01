<template>
    <div class="py-12 bg-primary">
        <input
            v-model="value"
            type="text"
            class="appearance-none m-auto px-4 py-2 block border border-primary rounded shadow-sm text-center focus:outline-none"
            placeholder="Rechercher"
        >
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['searchValue']),

        value: {
            get() {
                return this.searchValue;
            },

            set(value) {
                this.$store.commit('setSearchValue', value);
            },
        },
    },
};
</script>
