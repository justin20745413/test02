<template>
    <div class="account-management">
        <q-table
            :rows="users"
            :columns="columns"
            row-key="id"
        >
            <template v-slot:body-cell-action="props">
                <q-btn
                    flat
                    color="primary"
                    @click="toggleBan(props.row)"
                >
                    {{ props.row.banned ? '解除停權' : '停權' }}
                </q-btn>
            </template>
        </q-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
    id: number;
    username: string;
    account: string;
    banned: boolean;
}

const users = ref<User[]>([
    { id: 1, username: 'user1', account: 'account1', banned: false },
    { id: 2, username: 'user2', account: 'account2', banned: true },
    // 更多用戶
])

const columns = [
    { name: 'username', label: '用戶名', field: 'username', align: 'left' as const },
    { name: 'account', label: '帳號', field: 'account', align: 'left' as const },
    { name: 'action', label: '操作', field: 'action', align: 'center' as const },
]

const toggleBan = (user: User): void => {
    user.banned = !user.banned
}
</script>

<style scoped>
.account-management {
    padding: 16px;
}
</style> 