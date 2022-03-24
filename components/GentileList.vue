<template>
    <div class="flex flex-col h-128">
        <div class="border rounded shadow overflow-x-auto">
            <table class="w-full">
                <thead class="sticky top-0 z-10 bg-gray-100">
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
            'selectedCanton',
            'gentiles',
        ]),

        filteredGentile() {
            return this.gentiles.filter((item) => {
                function normalize(str) {
                    return str
                        .toLowerCase()
                        .normalize('NFD') // Split accented letters into the letter and accent (i.e. 'é' => 'e´')
                        .replace(/[\u0300-\u036F]/g, '') // Remove accents
                        .replace('-', ' ');
                }

                const search = normalize(this.searchValue);
                return (
                    item.canton.includes(this.selectedCanton.name) &&
                    (
                        normalize(item.commune).includes(search) ||
                        normalize(item.gentile).includes(search)
                    )
                );
            });
        },
    },
};
</script>
