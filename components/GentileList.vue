<template>
    <div class="flex flex-col">
        <div class="border rounded shadow overflow-x-auto">
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
                        v-for="(commune, index) in filteredCommunes"
                        :key="index"
                        class="hover:bg-gray-200 duration-300"
                        :class="{
                            'bg-white': index % 2 === 1,
                            'bg-gray-50': index % 2 === 0,
                        }"
                    >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ commune.canton.name_fr }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ commune.name_fr }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80">
                            {{ commune.gentile_fr }}
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
            'communes',
        ]),

        filteredCommunes() {
            return this.communes.filter((commune) => {
                function normalize(str) {
                    return str
                        .toLowerCase()
                        .normalize('NFD') // Split accented letters into the letter and accent (i.e. 'é' => 'e´')
                        .replace(/[\u0300-\u036F]/g, '') // Remove accents
                        .replace('-', ' ');
                }

                const search = normalize(this.searchValue);
                return (
                    commune.canton.name_fr.includes(this.selectedCanton.name) &&
                    (
                        commune.searchable_name.includes(search) ||
                        commune.searchable_gentile.includes(search)
                    )
                );
            });
        },
    },
};
</script>
