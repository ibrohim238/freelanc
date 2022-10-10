<template>
  <DisclosurePanel class="lg:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      <div class="text-white">
        <router-link class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" :to="{ name: 'about' }">
          О компании
        </router-link>
        <router-link class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" :to="{ name: 'individuals' }">
          Физическим лицам
        </router-link>
        <router-link class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" :to="{ name: 'entity' }">
          Юридическим лицам
        </router-link>
        <router-link class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" :to="{ name: 'branches'}">
          Филиалы
        </router-link>
        <router-link class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white" :to="{ name: 'contacts'}">
          Контакты
        </router-link>
      </div>
    </div>
  </DisclosurePanel>
</template>

<script setup>
  import { DisclosurePanel } from '@headlessui/vue'
</script>

<style scoped>

</style>