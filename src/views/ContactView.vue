<template>
  <BaseLayout>
    <div class="container mx-auto">
      <div class="text-center">
        <h5 class="font-bold">
          ООО «ФРС»
        </h5>
        <p>
          364020, Российская Федерация, Чеченская Республика, г. Грозный, ул. Старопромысловское ш., дом 1.
        </p>
      </div>
      <div class="flex py-2 text-center">
        <div class="flex flex-wrap mx-auto">
          <a class="px-2 whitespace-nowrap" href="tel:78712995017">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span class="ml-2">
            + 7 (8712) 99 – 50 – 17
            </span>
          </a>
          <div class="flex items-center px-2 whitespace-nowrap">
            <font-awesome-icon class="text-amber-500" icon="fa-solid fa-envelope" />
            <span class="ml-2">
            ooofrs@yandex.ru
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center">
        <div class="mx-auto">
          <a class="fa-2xl text-green-500 px-2" href="https://wa.me/+79262137000">
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
          </a>
          <a class="fa-2xl text-blue-500 px-2" href="https://t.me/ooofrs">
            <font-awesome-icon icon="fa-brands fa-telegram" />
          </a>
          <a class="fa-2xl text-red-500 px-2" href="https://www.instagram.com/ooofrs/">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";

export default {
  name: "ContactView",
  components: {
    BaseLayout
  }
}
</script>

<style scoped>

</style>