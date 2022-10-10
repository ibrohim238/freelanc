<template>
  <BaseLayout>
    <div class="container mx-auto px-5">
      <p>
        ФРС имеет представительства в Дагестане, Ингушетии и Осетии для жителей которых
        работает телефон горячей линии
      </p>
      <a class="text-xl" href="tel:78712995017">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <span class="ml-2">+7 (8712) 99 - 50-17</span>
      </a>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";

export default {
  name: "BranchesView",
  components: {
    BaseLayout
  }
}
</script>

<style scoped>

</style>