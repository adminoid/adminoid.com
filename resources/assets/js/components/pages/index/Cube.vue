<script>
    import CubeItem from './Cube/CubeItem'
    class ItemLoop {
        constructor() {
            this.items = [
                {'index': 0, 'selector': '.side.reliability'},
                {'index': 1, 'selector': '.side.frontend'},
                {'index': 2, 'selector': '.side.backend'},
                {'index': 3, 'selector': '.side.server'},
                {'index': 4, 'selector': '.side.design'}
            ]
//            this.current =
        }
    }
    export default{
        data: function () {
            return {
                shapeEl: '#shape-gallery'
            }
        },
        components: {'cube-item': CubeItem},
        methods: {
            flipLeft: function () {
                // TODO: https://stackoverflow.com/questions/12505598/get-next-key-value-pair-in-an-object
                $('#shape-gallery').shape('set next side', '.reliability.side')
                $('#shape-gallery').shape('flip left')
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
