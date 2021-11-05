<template>
    <table>
        <tr
            v-for="(gentile,index) in filteredGentile"
            :key="index"
        >
            <td>
                {{ gentile.canton }}
            </td>
            <td>
                {{ gentile.commune }}
            </td>
            <td>
                {{ gentile.gentile }}
            </td>
        </tr>
    </table>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'searchValue',
            'gentiles'
        ]),

        filteredGentile() {
            return this.gentiles.filter((item) => {
                return (
                    item.canton.includes(this.searchValue) ||
                    item.commune.includes(this.searchValue) ||
                    item.gentile.includes(this.searchValue)
                );
            });
        }
    }
};
</script>
