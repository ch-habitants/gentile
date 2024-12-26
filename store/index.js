export const state = () => ({
    searchValue: '',

    cantons: [
        {
            slug: 'AR',
            name: 'Appenzell Rhodes-Extérieures',
            img: 'flags/AR.png',
        },
        {
            slug: 'AI',
            name: 'Appenzell Rhodes-Intérieures',
            img: 'flags/AI.png',
        },
        {
            slug: 'AG',
            name: 'Argovie',
            img: 'flags/AG.png',
        },
        {
            slug: 'BL',
            name: 'Bâle-Campagne',
            img: 'flags/BL.png',
        },
        {
            slug: 'BS',
            name: 'Bâle-Ville',
            img: 'flags/BS.png',
        },
        {
            slug: 'BE',
            name: 'Berne',
            img: 'flags/BE.png',
        },
        {
            slug: 'FR',
            name: 'Fribourg',
            img: 'flags/FR.png',
        },
        {
            slug: 'GE',
            name: 'Genève',
            img: 'flags/GE.png',
        },
        {
            slug: 'GL',
            name: 'Glaris',
            img: 'flags/GL.png',
        },
        {
            slug: 'GR',
            name: 'Grisons',
            img: 'flags/GR.png',
        },
        {
            slug: 'JU',
            name: 'Jura',
            img: 'flags/JU.png',
        },
        {
            slug: 'LU',
            name: 'Lucerne',
            img: 'flags/LU.png',
        },
        {
            slug: 'NE',
            name: 'Neuchâtel',
            img: 'flags/NE.png',
        },
        {
            slug: 'NW',
            name: 'Nidwald',
            img: 'flags/NW.png',
        },
        {
            slug: 'OW',
            name: 'Obwald',
            img: 'flags/OW.png',
        },
        {
            slug: 'SG',
            name: 'Saint-Gall',
            img: 'flags/SG.png',
        },
        {
            slug: 'SH',
            name: 'Schaffhouse',
            img: 'flags/SH.png',
        },
        {
            slug: 'SZ',
            name: 'Schwytz',
            img: 'flags/SZ.png',
        },
        {
            slug: 'SO',
            name: 'Soleure',
            img: 'flags/SO.png',
        },
        {
            slug: 'TI',
            name: 'Tessin',
            img: 'flags/TI.png',
        },
        {
            slug: 'TG',
            name: 'Thurgovie',
            img: 'flags/TG.png',
        },
        {
            slug: 'UR',
            name: 'Uri',
            img: 'flags/UR.png',
        },
        {
            slug: 'VS',
            name: 'Valais',
            img: 'flags/VS.png',
        },
        {
            slug: 'VD',
            name: 'Vaud',
            img: 'flags/VD.png',
        },
        {
            slug: 'ZG',
            name: 'Zoug',
            img: 'flags/ZG.png',
        },
        {
            slug: 'ZH',
            name: 'Zurich',
            img: 'flags/ZH.png',
        },
    ],

    selectedCanton: {
        slug: '',
        name: '',
    },

    communes: []

});

export const getters = {
    searchValue(state) {
        return state.searchValue;
    },

    cantons(state) {
        return state.cantons;
    },

    selectedCanton(state) {
        return state.selectedCanton;
    },

    communes(state) {
        return state.communes;
    },
};

export const mutations = {
    setSearchValue(state, value) {
        state.searchValue = value;
    },

    setSelectedCanton(state, value) {
        state.selectedCanton = value;
    },

    setCommunes(state, value) {
        state.communes = value;
    },
};

export const actions = {
    async fetchGentile(ctx) {
        const response = await fetch('/data.json');
        response.json().then((result) => {
            ctx.commit('setCommunes', result);
        });
    }
};
