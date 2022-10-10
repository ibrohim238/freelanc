<template>
  <BaseLayout>
    <div class="container mx-auto px-5">
      <h5 class="font-bold">
        ООО «ФРС»
      </h5>
      <p>
        364020, Российская Федерация, Чеченская Республика, г. Грозный, ул. Старопромысловское ш., дом 1.
      </p>
      <a class="block" href="tel:78712995017">
        Телефон + 7 (8712) 99 – 50 – 17
      </a>
      <span class="block">
        E – mail: ooofrs@yandex.ru
      </span>
      <div>
        <a class="text-4xl px-2" href="https://wa.me/+79262137000">
          <font-awesome-icon icon="fa-brands fa-whatsapp" />
        </a>
        <a class="text-4xl px-2" href="https://t.me/ooofrs">
          <font-awesome-icon icon="fa-brands fa-telegram" />
        </a>
        <a class="text-4xl px-2" href="https://www.instagram.com/ooofrs/">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
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