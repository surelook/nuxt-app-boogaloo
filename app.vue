<template>
  <div>
    <dl v-if="$config.gaTrackingId" style="border: 1px solid blue">
      <dt>
        Ga Tracking Id
      </dt>
      <dd>
        {{$config.gaTrackingId}}
      </dd>

    </dl>
    <NuxtWelcome />
  </div>
</template>
