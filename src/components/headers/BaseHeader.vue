<template>
  <header>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="px-5 py-4 text-white flex items-center">
        <router-link class="mr-auto" :to="{ name: 'home' }" aria-current="page">
          <div class="flex items-center">
            <img class="h-8 w-8 rounded-full" src="data:image/jpeg;base64,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" alt="Your Company">
            <p class="ml-2 text-justify rounded text-white font-bold">ФРС</p>
          </div>
        </router-link>
        <div class="hidden lg:block mx-auto">
          <router-link class="px-4 py-1 shadow-white hover:border hover:bg-gray-700 rounded" :to="{ name: 'about' }">
            О компании
          </router-link>
          <router-link class="px-4 py-1 shadow-white hover:border hover:bg-gray-700 rounded" :to="{ name: 'individuals' }">
            Физическим лицам
          </router-link>
          <router-link class="px-4 py-1 shadow-white hover:border hover:bg-gray-700 rounded" :to="{ name: 'entity' }">
            Юридическим лицам
          </router-link>
          <router-link class="px-4 py-1 shadow-white hover:border hover:bg-gray-700 rounded" :to="{ name: 'reference'}">
            Справка
          </router-link>
          <router-link class="px-4 py-1 shadow-white hover:border hover:bg-gray-700 rounded" :to="{ name: 'contacts'}">
            Контакты
          </router-link>
        </div>
        <div class="flex items-center ml-auto">
          <a href="tel:78712995017">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span class="ml-2">+7 (8712) 99 - 50-17</span>
          </a>
          <div class="lg:hidden ml-2">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <MobMenu/>
    </Disclosure>
  </header>
</template>

<script setup>
import { Disclosure, DisclosureButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import MobMenu from "@/components/headers/MobMenu";

</script>