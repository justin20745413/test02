<template>
    <div class="example-container">
        <div class="button-group gap-3">
            <q-btn outline color="warning" label="Outline Button 1" />
            <q-btn outline color="secondary" label="Outline Button 2" />
            <q-btn outline color="accent" label="Outline Button 3" />
            <q-btn outline color="positive" label="Outline Button 4" />
            <q-btn outline color="negative" label="Outline Button 5" />
        </div>
        <div class="button-group gap-3">
            <q-btn color="warning" label="Filled Button 1" />
            <q-btn color="secondary" label="Filled Button 2" />
            <q-btn color="accent" label="Filled Button 3" />
            <q-btn color="positive" label="Filled Button 4" />
            <q-btn color="negative" label="Filled Button 5" />
        </div>
        <q-btn color="primary" label="Open Fullscreen Dialog" class="q-mt-md" />
        <q-btn color="secondary" label="Open Centered Dialog" class="q-mt-md" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.example-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.button-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
</style>
