<template>
    <div class="example-container">
        <div class="text-h6 q-mb-md">主要按鈕</div>
        <div class="button-group">
            <q-btn color="primary" label="主要按鈕" />
            <q-btn color="secondary" label="次要按鈕" />
            <q-btn color="accent" label="強調按鈕" />
        </div>

        <div class="text-h6 q-mb-md">功能按鈕</div>
        <div class="button-group">
            <q-btn color="info" label="信息" />
            <q-btn color="warning" label="警告" />
            <q-btn color="bg-success-custom" class="bg-success-custom" label="成功" />
            <q-btn color="error" class="bg-error-custom" label="錯誤" />
        </div>

        <div class="text-h6 q-mb-md">輪廓按鈕</div>
        <div class="button-group">
            <q-btn outline color="primary" label="主要" />
            <q-btn outline color="secondary" label="次要" />
            <q-btn outline color="accent" label="強調" />
        </div>
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
    flex-wrap: wrap;
    gap: 8px;
}
</style>
