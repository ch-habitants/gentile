import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { assertContain } from './utils';
import SearchBar from '@/components/SearchBar.vue';

// Scoped Vue to avoid affecting the global Vue
const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchBar', () => {
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

        wrapper = mount(SearchBar, {
            localVue,
            store,
        });
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test('contains the search input', () => {
        assertContain('type="text"', 'input', wrapper);
        assertContain('class="appearance-none m-auto px-4 py-2 block border border-primary rounded shadow-sm text-center focus:outline-none duration-300"', 'input', wrapper);
        assertContain('placeholder="Rechercher"', 'input', wrapper);
    });
});
