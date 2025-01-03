<template>
    <div class="relative">
        <!-- Select -->
        <div
            class="relative w-80 bg-gray-50 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left sm:text-sm duration-300"
            :class="{ 'ring-2 ring-primary-400': isOpen }"
            aria-haspopup="canton-select"
            aria-expanded="true"
            @click="isOpen = true"
        >
            <!-- Selected canton -->
            <span
                v-if="selectedCanton.name"
                class="flex items-center"
            >
                <!-- Flag -->
                <img
                    class="w-5 h-5"
                    :src="selectedCanton.img"
                    :alt="selectedCanton.name"
                >

                <!-- Name -->
                <span class="ml-3 block truncate text-primary-900">
                    {{ selectedCanton.name }}
                </span>
            </span>

            <!-- No canton selected -->
            <span v-else>
                <span class="block truncate text-primary-900 text-opacity-60">
                    Filtrer par canton
                </span>
            </span>

            <!-- Dropdown icon -->
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IconsSolidSelector class="h-5 w-5 text-primary-900 text-opacity-60" />
            </span>
        </div>

        <!-- Options -->
        <transition
            enter-active-class="transition ease-out duration-200"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-100"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <ul
                v-if="isOpen"
                class="absolute z-10 mt-1 w-80 bg-gray-50 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                tabindex="-1"
                role="canton-select"
                aria-activedescendant="canton-select-option-3"
            >
                <!-- No selection option -->
                <li
                    id="canton-select-option-none"
                    class="select-none relative py-2 pl-3 pr-9 text-primary-900 text-opacity-60 hover:bg-primary-50 duration-300"
                    role="option"
                    @click="select({ slug: '', name: '', img: '' })"
                >
                    Aucun canton
                </li>

                <!-- List of cantons -->
                <li
                    v-for="(canton, index) in cantons"
                    :id="`canton-select-option-${canton.slug}`"
                    :key="index"
                    class="select-none relative py-2 pl-3 pr-9 text-primary-900 hover:bg-primary-50 duration-300"
                    role="option"
                    @click="select(canton)"
                >
                    <div class="flex items-center">
                        <!-- Flag -->
                        <img
                            class="w-5 h-5"
                            :src="canton.img"
                            :alt="canton.name"
                        >

                        <!-- Name -->
                        <span
                            class="ml-3 block truncate"
                            :class="{
                                'font-semibold': canton.slug === selectedCanton.slug,
                                'font-normal': canton.slug !== selectedCanton.slug,
                            }"
                        >
                            {{ canton.name }}
                        </span>
                    </div>

                    <!-- Selected canton icon -->
                    <span
                        v-if="canton.slug === selectedCanton.slug"
                        class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary"
                    >
                        <IconsSolidCheck class="h-5 w-5" />
                    </span>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import close from '~/mixins/close';

export default {
    
    name: 'CantonSelect',

    mixins: [
        close,
    ],

    computed: {
        ...mapGetters([
            'cantons',
            'selectedCanton',
        ]),
    },

    methods: {
        ...mapMutations([
            'setSelectedCanton',
        ]),

        // Select the given canton
        select(canton) {
            this.setSelectedCanton(canton);

            // Close the menu
            this.isOpen = false;
        },
    },

};
</script>
