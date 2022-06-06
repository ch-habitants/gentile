import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { assertContain } from './utils';
import SearchInput from '@/components/SearchInput.vue';

// Scoped Vue to avoid affecting the global Vue
const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchInput', () => {
    let wrapper;

    let getters;

    let store;

    beforeEach(() => {
        getters = {
            searchValue: () => '',
        };

        store = new Vuex.Store({
            getters,
        });

        wrapper = mount(SearchInput, {
            localVue,
            store,
        });
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('contains the search input', () => {
        assertContain('type="text"', 'input', wrapper);
        assertContain('class="appearance-none w-80 bg-gray-50 border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left sm:text-sm text-primary-900 placeholder-primary-900 placeholder-opacity-60 focus:ring-2 focus:ring-primary-400 focus:outline-none duration-300"', 'input', wrapper);
        assertContain('placeholder="Rechercher"', 'input', wrapper);
    });
});
