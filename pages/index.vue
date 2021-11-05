<template>
    <div>
        <search-bar />
        <gentile-list />
    </div>
</template>

<script>
import GentileList from '../components/GentileList.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    
    name: 'HomePage',
    components: { SearchBar, GentileList },
    
};
</script>
