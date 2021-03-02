<template>
  <div class="alert" :class="color" v-if="show">
    {{ message }}
    <div class="close" @click="toggle()" v-if="close">x</div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    message: String,
    color: { type: String, default: "primary" },
    close: { type: Boolean, default: false },
  },
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  min-height: 3rem;
}
.close {
  float: right;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  cursor: pointer;
}
.close:hover {
  opacity: 0.75;
}
.success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}
.danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
</style>
