<template>
    <div class="py-12 bg-primary">
        <select v-model="canton">
            <option value="">
                Aucun
            </option>
            <option>Appenzell Rhodes-Extérieures</option>
            <option>Appenzell Rhodes-Intérieures</option>
            <option>Argovie</option>
            <option>Berne</option>
            <option>Bâle-Campagne</option>
            <option>Bâle-Ville</option>
            <option>Fribourg</option>
            <option>Genève</option>
            <option>Glaris</option>
            <option>Grisons</option>
            <option>Jura</option>
            <option>Lucerne</option>
            <option>Neuchâtel</option>
            <option>Nidwald</option>
            <option>Obwald</option>
            <option>Saint-Gall</option>
            <option>Schaffhouse</option>
            <option>Schwytz</option>
            <option>Soleure</option>
            <option>Tessin</option>
            <option>Thurgovie</option>
            <option>Uri</option>
            <option>Valais</option>
            <option>Vaud</option>
            <option>Zoug</option>
            <option>Zurich</option>
        </select>
        <input
            v-model="value"
            type="text"
            class="appearance-none m-auto px-4 py-2 block border border-primary rounded shadow-sm text-center focus:outline-none duration-300"
            placeholder="Rechercher"
        >
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {

    name: 'SearchInput',

    computed: {
        ...mapGetters([
            'searchValue',
            'selectedCanton'
        ]),

        value: {
            get() {
                return this.searchValue;
            },

            set(value) {
                this.$store.commit('setSearchValue', value);
            },
        },

        canton: {
            get() {
                return this.selectedCanton;
            },

            set(value) {
                this.$store.commit('setSelectedCanton', value);
            },
        },
    },
};
</script>
