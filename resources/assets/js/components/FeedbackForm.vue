<script>
  import axios from 'axios'
  class Errors {
    constructor() {
      this.errors = {}
    }
    has(field) {
      return this.errors.hasOwnProperty(field)
    }
    any() {
      return Object.keys(this.errors).length > 0
    }
    get(field) {
      if (this.errors[field]) {
        return this.errors[field][0]
      }
    }
    record(errors) {
      this.errors = errors
    }
    clear(field) {
      if (field) {
        delete this.errors[field]
        return
      }
      this.errors = {}
    }
  }

  class Form {
    constructor(data) {
      this.originalData = data;
      for (let field in data) {
        this[field] = data[field]
      }
      this.errors = new Errors()
      this.success = false
    }
    data() {
      let data = Object.assign({}, this)
      delete data.originalData
      delete data.errors
      return data
    }
    reset() {
      for (let field in this.originalData) {
        this[field] = ''
      }
      this.errors.clear()
    }
    submit(requestType, url) {
      return new Promise((resolve, reject) => {
        axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data)
        })
      })
    }
    onSuccess(data) {
      this.reset();
      this.message = data.message;
      this.success = true;
    }
    onFail(errors) {
      this.errors.record(errors.errors);
    }
  }

  export default {
    data () {
      return {
        form: new Form({
          email: '',
          text: '',
          rc_key: '',
        }),
      }
    },
    methods: {
      onSubmit() {
        this.form.submit('post', '/feedback-messages')
          .then(data => {
            this.message = data.message;
            this.$parent.$emit('stop-write',true);
          });
      }
    },
    mounted: function() {
      const setToken = () => {
        return (token) => {
          this.form.rc_key = token
        }
      };
      Vue.prototype.$bus.on("rc-loaded", setToken());
    },
  }
</script>
