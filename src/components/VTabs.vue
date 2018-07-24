<template>
  <div class="e-button-tabs e-button-tabs_default">
    <div class="e-button-tabs__in">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="e-button-tabs__item"
        :class="{ 'is-active': tab === activeTab }"
        @click="onClick(tab)"
      >
        {{tab}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTabs',

  props: {
    tabs: {
      type: Array,
      required: true,
      validator: v => v.every(e => typeof e === 'string')
    },
    activeTab: {
      type: String,
      required: true
    },
    howToReactOnClick: {
      type: Function
    }
  },

  methods: {
    onClick (tab) {
      if (this.howToReactOnClick) {
        this.howToReactOnClick(tab)
      }
      this.$emit('update:activeTab', tab)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/index";

.e-button-tabs {
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  $this: &;
  &__in {
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 1px;
      right: 1px;
      bottom: 0;
      border: 1px solid #0123E7;
      border-radius: 5px;
    }
  }
  &__item {
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    position: relative;
    z-index: 6;
    letter-spacing: .86px;
    padding: 0 20px;
    transform: translate3d(0,0,0);
    white-space: nowrap;
    transition: $transition-time;
    &.is-active {
      background-color: #0123E7;
      box-shadow: inset 0 1px 5px #09168A;
    }
  }
  &_default {
    #{$this}__item {
      height: 24px;
      color: $color-blue;
      padding: 0 23px;
      background-color: #fff;
      font-weight: 800;
      text-transform: uppercase;
      position: relative;
      transform: none;
      @include r(1200) {
        font-size: 10px;
        height: 24px;
        padding: 2px 19px 0;
      }
      @include rmin(1921) {
        padding: 0 13px;
        letter-spacing: .79px;
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 1px 3px rgba(black, .08);
        transition: $transition-time;
      }
      &:first-child {
        border-radius: 3px 0 0 3px;
        &:before {
          border-radius: 3px 0 0 3px;
        }
      }
      &:last-child {
        border-radius: 0px 3px 3px 0;
        &:before {
          border-radius: 0px 3px 3px 0;
        }
      }
      &.is-active {
        box-shadow: inset 0 0 3px rgba(#484E54, .13);
        color: $color-dark-blue;
        background-color: transparent;
        &:hover {
          color: $color-dark-blue;
        }
        &:before {
          opacity: 0;
        }
      }
      &:hover {
        color: black;
      }
    }
    #{$this}__in {
      overflow: visible;
      &:before {
        display: none;
      }
    }
  }
  &_primary {
    display: inline-flex;
    #{$this}__item {
      height: 34px;
      color: $color-blue;
      text-transform: uppercase;
      flex: none;
      border-left: 1px solid #0123E7;
      padding: 0 23px;
      @include r(1200) {
        height: 23px;
        font-size: 10px;
        padding: 0 12px;
      }

      &:first-of-type {
        border-left: none;
        border-radius: 3px 0 0 3px;
        &.is-active {
          border-left: none;
        }
      }
      &:last-of-type {
        border-radius: 0 3px 3px 0;
      }
      &:hover {
        color: black;
      }
      &.is-active {
        color: #fff;
        border-left: 1px solid transparent;
      }
    }
  }
}
</style>
