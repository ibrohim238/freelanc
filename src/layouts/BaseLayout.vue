<template>
  <div class="flex flex-col h-screen">
    <BaseHeader/>
    <main class="flex-grow bg-gray-200 py-4 md:py-12 px-5">
      <slot/>
    </main>
    <BaseFooter/>
  </div>
</template>
<script setup>
import BaseHeader from "@/components/headers/BaseHeader";
import BaseFooter from "@/components/footers/BaseFooter";
</script>

<script>
  export default {
    name: 'BaseLayout'
  }
</script>