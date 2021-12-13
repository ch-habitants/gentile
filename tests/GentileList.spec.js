/**
 * We will test this component later as it will probably
 * change a lot.
 */
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import GentileList from '@/components/GentileList.vue';

// Scoped Vue to avoid affecting the global Vue
const localVue = createLocalVue();
localVue.use(Vuex);

describe('GentileList', () => {
    let wrapper;

    let getters;

    let store;

    beforeEach(() => {
        getters = {
            searchValue: () => '',

            gentiles: () => [],
        };

        store = new Vuex.Store({
            getters,
        });

        wrapper = mount(GentileList, {
            localVue,
            store,
        });
    });

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
});
