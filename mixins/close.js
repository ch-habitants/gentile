/**
 * Add this mixin to any component that needs to
 * be closed when clicking outside of it or pressing
 * the escape key.
 */
export default {

    data() {
        return {
            isOpen: false,
        };
    },

    mounted() {
        // Click outside of element
        document.addEventListener('click', this.close);

        // Escape key pressed
        document.addEventListener('keydown', this.keyEvent);
    },

    beforeDestroy() {
        // Remove the events
        document.removeEventListener('click', this.close);
        document.removeEventListener('keydown', this.keyEvent);
    },

    methods: {
        close(e) {
            if (!this.$el.contains(e.target)) {
                this.isOpen = false;
            }
        },

        keyEvent(e) {
            if (e.key === 'Escape') {
                this.isOpen = false;
            }
        },
    },

};
