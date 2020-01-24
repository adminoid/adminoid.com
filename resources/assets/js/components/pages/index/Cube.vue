<script>

  import CubeItem from './Cube/CubeItem'
  import VueSession from 'vue-session'
  Vue.use(VueSession);

  class ItemsLoop {

    constructor(items) {
      this.items = items;
      this.last = items.length - 1;
      this.curr = 0;
      this.next = 1;
      this.prev = this.last
    }

    setActive(name) {
      let newIndex = _.indexOf(this.items, name);
      this.curr = newIndex;
      if (newIndex === 0) {
        this.next = newIndex + 1;
        this.prev = this.last
      }
      else if (newIndex === this.last) {
        this.next = 0;
        this.prev = newIndex - 1
      } else {
        this.next = newIndex + 1;
        this.prev = newIndex - 1
      }
    }

    getPrev() {
      return this.items[this.prev]
    }

    getNext() {
      return this.items[this.next]
    }

  }

  export default{

    data: function () {
      return {
        observer: new ItemsLoop([
          'reliability',
          'frontend',
          'backend',
          'server',
          'design'
        ]),
        $wrapper: {}
      }
    },

    components: {'cube-item': CubeItem},

    mounted() {
      this.init('#shape-gallery')
    },

    methods: {
      init(selector) {
        this.$wrapper = $(selector);
        let sessionSavedActiveBlockName = this.$session.get('cube_current_block'),
          hasSessionSavedActiveBlock = !!sessionSavedActiveBlockName,
          $lastActiveBlock = this.$wrapper.find('.side.active');

        if (hasSessionSavedActiveBlock) {
          $lastActiveBlock.removeClass('active');
          let $actualActiveBlock = this.$wrapper.find('#' + sessionSavedActiveBlockName);
          $actualActiveBlock.addClass('active');
          this.$session.set('cube_current_block', name);
          this.observer.setActive(sessionSavedActiveBlockName)
        } else {
          let id = $lastActiveBlock.attr('id');
          this.$session.set('cube_current_block', name);
          this.observer.setActive(id)
        }
      },

      moveLeft() {
        let self = this;
        this.$wrapper
          .shape({
            onChange: function () {
              self.$session.set('cube_current_block', this.id);
              self.observer.setActive(this.id)
            }
          });
        this.$wrapper
          .shape('set next side', '.side.' + self.observer.getPrev())
          .shape('flip left')
      },

      moveUp() {
        let self = this;
        this.$wrapper
          .shape({
            onChange: function () {
              self.$session.set('cube_current_block', this.id);
              self.observer.setActive(this.id)
            }
          });
        this.$wrapper
          .shape('set next side', '.side.' + self.observer.getNext())
          .shape('flip down')
      },

      moveDown() {
        let self = this;
        this.$wrapper
          .shape({
            onChange: function () {
              self.$session.set('cube_current_block', this.id);
              self.observer.setActive(this.id)
            }
          });
        this.$wrapper
          .shape('set next side', '.side.' + self.observer.getPrev())
          .shape('flip up')

      },

      moveRight() {
        let self = this;
        this.$wrapper
          .shape({
            onChange: function () {
              self.$session.set('cube_current_block', this.id);
              self.observer.setActive(this.id)
            }
          });
        this.$wrapper
          .shape('set next side', '.side.' + self.observer.getNext())
          .shape('flip right')
      }
    }

  }
</script>
