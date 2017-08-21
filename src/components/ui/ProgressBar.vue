<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped active"
             role="progressbar"
             :aria-valuenow="value"
             aria-valuemin="0"
             aria-valuemax="100"
             :style="styleObject"
             v-bind:class="{'notransition': duration < 5000}"
        >
            <span class="sr-only">{{ value }}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'progress-bar',
    props: ['value', 'duration'],
    computed: {
      styleObject () {
        return {
          width: this.progress + '%'
        }
      },
      progress () {
        const p = Math.pow(10, 0)
        return Math.round((100 * p * this.value) / 100) / p
      }
    }
  }
</script>

<style>
    .notransition {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
    }
</style>
