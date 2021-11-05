<template>
    <div>
        <input id="search-field" v-model="value" type="text" name="search-value">
        <button id="search-button">
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
        return this.searchValue;
      }
    }
  }
};
</script>
