<template>
    <q-footer elevated class="footer-with-blur text-white">
        <q-toolbar>
            <q-toolbar-title>Footer Content</q-toolbar-title>
        </q-toolbar>
    </q-footer>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.footer-with-blur {
    background: radial-gradient(circle at center, #c4b5e980, transparent 80%), #a5bdb6;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);
}
</style>
