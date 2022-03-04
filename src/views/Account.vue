<template>
    <div class="flex items-center justify-center w-screen h-screen opacity-25">
        <div class="max-w-4xl mx-auto p-4 bg-brand-black-1">
            <div class="mb-4 text-right">
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <h4 class="mb-4 text-2xl">Account</h4>
            <div
                class="flex items-center justify-between space-x-4 bg-gradient-to-tr from-brand-blue-1 to-brand-blue-2"
            >
                <div>
                    <img src="@/assets/account-photo.png" alt="Account photo" />
                </div>
                <div>
                    <p class="font-neue-machina-light">Balance</p>
                    <h4 class="text-2xl">$780,650.98</h4>
                </div>
                <div>
                    <p class="font-neue-machina-light">Wallet</p>
                    <h4 class="text-2xl">Wallet Connect</h4>
                </div>
                <div>
                    <p class="font-neue-machina-light">Address</p>
                    <h4 class="text-2xl">0xC8efkd839dkd99ke</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>