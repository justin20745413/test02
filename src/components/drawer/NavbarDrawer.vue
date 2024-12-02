<template>
  <q-drawer v-model="drawerOpen" side="left" bordered>
    <q-list>
      <q-item clickable v-ripple @click="navigateTo('')">
        <q-item-section avatar>
          <q-icon color="black" name="home" />
        </q-item-section>
        <q-item-section class="custom-text-color">Home</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="navigateTo('about')">
        <q-item-section avatar>
          <q-icon color="black" name="info" />
        </q-item-section>
        <q-item-section class="custom-text-color">About</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="navigateTo('contact')">
        <q-item-section avatar>
          <q-icon color="black" name="mail" />
        </q-item-section>
        <q-item-section class="custom-text-color">Contact</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router' 
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const drawerOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const router = useRouter()

const navigateTo = (route: string) => {
  router.push(`/${route}`).then(() => {
    emit('update:modelValue', false)
  })
}
</script>

<style scoped>
.custom-text-color {
  color: black;
}
</style>
