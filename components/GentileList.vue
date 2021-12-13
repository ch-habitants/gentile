<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <table class="w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider">
                        Canton
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider">
                        Commune
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider">
                        Gentile
                    </th>
                </thead>
                <tbody>
                    <tr
                        v-for="(gentile, index) in filteredGentile"
                        :key="index"
                        class="hover:bg-gray-200 duration-300"
                        :class="{
                            'bg-white': index % 2 === 1,
                            'bg-gray-50': index % 2 === 0,
                        }"
                    >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ gentile.canton }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ gentile.commune }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ gentile.gentile }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'searchValue',
            'gentiles',
        ]),

        filteredGentile() {
            return this.gentiles.filter((item) => {
                return (
                    item.canton.includes(this.searchValue) ||
                    item.commune.includes(this.searchValue) ||
                    item.gentile.includes(this.searchValue)
                );
            });
        },
    },
};
</script>
