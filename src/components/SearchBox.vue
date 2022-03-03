<template>
    <div
        class="flex items-center space-x-2 w-96 h-12 px-3 border border-white border-opacity-25 rounded-md"
    >
        <svg
            class="w-6 h-6 text-[#6D6B6F]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            placeholder="Search by token name or symbol"
            class="w-full h-full bg-transparent focus-within:outline-none"
        />
    </div>
</template>

<script>
export default {

}
</script>