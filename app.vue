<template>
  <div>
    <dl style="border: 1px solid blue">
      <dt>
        Ga Tracking Id
      </dt>
      <dd>
        {{$config.gaTrackingId}}
      </dd>
      <dt>
        Base URL
      </dt>
      <dd>
        {{$config.baseUrl}}
      </dd>

    </dl>
    <NuxtWelcome />
  </div>
</template>
