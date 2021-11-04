<template>
    <div>
        <input id="searchField" v-model="value" type="text" name="searchValue">
        <button id="SearchButton">
            Search
        </button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
    ...mapGetters(['searchValue']),
    value: {
      set(value) {
        this.$store.commit('setSearchValue', value);
      },
      get() {
        // Or remove mapState and use this.$store.state.values.example
        return this.searchValue;
      }
    }
  }
};
</script>
