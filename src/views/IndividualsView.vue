<template>
  <BaseLayout>
    <div class="container mx-auto">
      <div>
        <p>
          Не посредственными, основными партнерами ФРС являются физические лица, граждане Российской Федерации, которые непосредственно обращаются в ФРС всеми доступными средствами связи, обращения которых рассматриваются оперативно.<br>
          Наши многочисленные партнеры с Дагестана, Ингушетии, Осетии и Чечни ежедневно в любое время суток могут отправлять в ФРС все интересующиеся их вопросы одним кликом с помощью привычных для себя средств связи:
        </p>
        <div class="flex items-center py-2">
          <div class="flex flex-wrap mx-auto">
            <a class="text-4xl px-4 text-green-600 whitespace-nowrap" href="https://wa.me/+79262137000">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </a>
            <a class="text-4xl px-4 text-blue-600 whitespace-nowrap" href="https://t.me/ooofrs">
              <font-awesome-icon icon="fa-brands fa-telegram" />
            </a>
            <a class="text-4xl px-4 text-red-600 whitespace-nowrap" href="https://www.instagram.com/ooofrs/">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
            <a class="text-xl px-4 py-2 block whitespace-nowrap" href="tel:79262137000">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <span class="ml-2">+ 7 (926) 213-7000</span>
            </a>
            <div class="text-xl px-4 py-2 block whitespace-nowrap">
              <font-awesome-icon class="text-amber-500" icon="fa-solid fa-envelope" />
              <span>
                ooofrs@yandex.ru
              </span>
            </div>
          </div>
        </div>
        <p>
          Для физических лиц ФРС предлагает максимально удобную систему обращения за государственной поддержкой, отправки и рассмотрения всех необходимых документов.<br>
          ФРС осуществляет самую быструю и высокую выплату денежной средств своим партнерам без посредников, без рисков.<br>
        </p>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";

export default {
  name: "IndividualsView",
  components: {
    BaseLayout
  }

}
</script>

<style scoped>

</style>