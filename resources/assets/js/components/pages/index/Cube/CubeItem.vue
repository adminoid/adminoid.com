<script>
    export default{
        data() {
            return {
                header: '.ui.top.left.attached.label',
                text: 'div.text',
                $header: {},
                $text: {}
            }
        },
        mounted() {
            this.$header = $(this.$el).find(this.header)
            this.$text = $(this.$el).find(this.text)
        },
        methods: {
            onHover() {
                this.$header.fadeTo('fast', 0.45)
                this.$text.fadeTo('fast', 0.45)
            },
            onUnhover() {
                this.$header.fadeTo('fast', 1)
                this.$text.fadeTo('fast', 1)
            }
        }
    }
</script>
