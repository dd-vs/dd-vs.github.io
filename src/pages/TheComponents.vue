<template>
  <div class="initial theme-bg"></div>
  <div class="container">
    <h2>All Components</h2>
    <section>
      <div class="row">
        <div class="col-md-6">
          <h4>DDAlert</h4>
          <DDAlert
            show
            :message="'success alert'"
            :color="'success'"
            @close="test()"
          />
          <DDAlert
            show
            :message="'primary alert'"
            :color="'primary'"
            close
            @close="test()"
          />
          <DDAlert show :message="'warning alert'" :color="'warning'" />
          <DDAlert show :message="'danger alert'" :color="'danger'" />
        </div>
        <div class="col-md-6">
          <h5>Props</h5>
          <p>
            <strong>show</strong> : true/false - toggles display of alert -
            default - none
          </p>
          <p>
            <strong>message</strong> : string - message to display in alert -
            default - none
          </p>
          <p>
            <strong>color</strong> : success/danger/primary/warning - bootstrap
            default colors . default - primary
          </p>
          <p>
            <strong>close</strong> : true/false - shows close icon - default -
            false
          </p>
          <h5>Slots</h5>
          <h5>Events</h5>
          <strong>close</strong> : emits when clicked on close icon
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <div class="col-md-6">
          <h4>DLoader</h4>
          <DLoader show />
        </div>
        <div class="col-md-6">
          <h5>Props</h5>
          <p>
            <strong>show</strong> : Boolean - Toggles dispplay. Default: false
          </p>
          <h5>Slots</h5>
          <h5>Events</h5>
          <h5>Specials</h5>
          change the loader color by setting CSS .lds-roller>div:after
          {background-color: !important }
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DDAlert from "../components/UI/DDAlert.vue";
import DLoader from "../components/UI/DLoader.vue";
export default {
  components: { DDAlert, DLoader },
};
</script>

<style>
.lds-roller > div:after {
  background-color: #8911fc !important;
}
</style>
