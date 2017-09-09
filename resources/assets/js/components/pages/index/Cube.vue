<script>
    import CubeItem from './Cube/CubeItem'
    export default{
        data: function () {
            return {
                shapeEl: '#shape-gallery'
            }
        },
        components: {'cube-item': CubeItem},
        methods: {
            flipLeft: function () {
                $('#shape-gallery').shape('flip left');
            },
            flipUp: function () {
                $('#shape-gallery').shape('flip up');
            },
            flipDown: function () {
                $('#shape-gallery').shape('flip down');
            },
            flipRight: function () {
                $('#shape-gallery').shape('flip right');
            }
        }
    }
</script>
