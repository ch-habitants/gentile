import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { assertContain } from './utils';
import CantonSelect from '@/components/CantonSelect.vue';

// Scoped Vue to avoid affecting the global Vue
const localVue = createLocalVue();
localVue.use(Vuex);

describe('CantonSelect', () => {
    let wrapper;

    let getters;

    let mutations;

    let store;

    const mock = (selectedCanton = { slug: '', name: '', img: '' }) => {
        getters = {
            cantons: () => [
                {
                    slug: 'JU',
                    name: 'Jura',
                    img: 'JU.png',
                },
                {
                    slug: 'NE',
                    name: 'Neuchâtel',
                    img: 'NE.png',
                },
            ],

            selectedCanton: () => selectedCanton,
        };

        mutations = {
            setSelectedCanton: (canton) => {},
        };

        store = new Vuex.Store({
            getters,
            mutations,
        });

        wrapper = mount(CantonSelect, {
            localVue,
            store,
            stubs: {
                IconsSolidCheck: true,
                IconsSolidSelector: true,
            },
        });
    };

    test('is a Vue instance', () => {
        mock();

        expect(wrapper.vm).toBeTruthy();
    });

    test('contains the select input without any selected canton', () => {
        mock();

        assertContain('class="relative w-80 bg-gray-50 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left sm:text-sm duration-300"', 'div', wrapper);

        // No canton selected
        assertContain('Filtrer par canton', 'div', wrapper);
    });

    test('contains the select input with a selected canton', () => {
        // Select the canton of Neuchâtel
        mock({
            slug: 'NE',
            name: 'Neuchâtel',
            img: 'NE.png',
        });

        assertContain('class="relative w-80 bg-gray-50 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left sm:text-sm duration-300"', 'div', wrapper);

        // Canton of Neuchâtel is selected
        assertContain('src="NE.png"', 'div', wrapper);
        assertContain('Neuchâtel', 'div', wrapper);
    });

    test('contains the list of cantons', async() => {
        mock();

        // Open the select
        await wrapper.setData({ isOpen: true });

        // No canton option
        assertContain('id="canton-select-option-none"', 'div', wrapper);
        assertContain('Aucun canton', '#canton-select-option-none', wrapper);

        // List of cantons
        for (const canton of wrapper.vm.cantons) {
            assertContain(`id="canton-select-option-${canton.slug}"`, 'div', wrapper);
            assertContain(`src="${canton.slug}.png"`, `#canton-select-option-${canton.slug}`, wrapper);
            assertContain(`alt="${canton.name}"`, `#canton-select-option-${canton.slug}`, wrapper);
            assertContain(canton.name, `#canton-select-option-${canton.slug}`, wrapper);
        }
    });
});
