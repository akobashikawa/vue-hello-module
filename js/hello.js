export default {
    template: `<div class="hello-component">{{ greeting }}</div>`,
    props: ['name'],
    computed: {
        greeting: function () {
            return `Hello ${this.name}!`;
        }
    }
};