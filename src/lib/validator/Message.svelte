<script lang="ts">
    export let messages: string[];
</script>

{#if messages}
    {#if typeof messages === 'object'}
        {#each messages as message}
            <p class="invalid-error">
                {message}
            </p>
        {/each}
    {:else}
        <p class="invalid-error">
            {messages}
        </p>
    {/if}
{/if}

<style>
    .invalid-error {
        @apply text-rose-800 bg-rose-200 font-bold py-1 px-3 rounded;
        @apply dark:text-rose-200 dark:bg-rose-800;
        @apply mt-2;
        @apply text-sm;
    }
</style>
