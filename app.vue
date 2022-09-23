<template>
  <div>
    <dl style="border: 1px solid blue">
      <dt>
        Test Var
      </dt>
      <dd>
        {{testVar}}
      </dd>

    </dl>
    <NuxtWelcome />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        testVar: process?.env?.TEST_VAR
      }
    }
  }
</script>
