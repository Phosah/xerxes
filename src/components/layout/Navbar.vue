<template>
    <nav class="flex items-center space-x-4 h-20">
        <div class="flex-1 flex items-center space-x-2">
            <img src="@/assets/xerxes-logo.png" alt="Xerxes logo" />
            <p class="text-xl">XERXES</p>
        </div>
        <div class="flex-1">
            <ul class="flex items-center justify-between space-x-3">
                <li>Dashboard</li>
                <li>My Positions</li>
                <li>Vault</li>
                <li>Analytics</li>
            </ul>
        </div>
        <div class="flex-1 flex items-center justify-end space-x-3">
            <select name id class="bg-transparent">
                <option value>ENG</option>
            </select>
            <div>
                <ConnectWalletButton />
            </div>
        </div>
    </nav>
</template>

<script setup>
import ConnectWalletButton from '../ConnectWalletButton.vue';

</script>