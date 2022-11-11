<script lang="ts">
    export let errors: string[];
</script>

{#if errors}
    {#if typeof errors === 'object'}
        {#each errors as error}
            <p class="message error">{error}</p>
        {/each}
    {:else}
        <p class="message error">{errors}</p>
    {/if}
{/if}

<style>
    p.message {
        @apply text-xs font-semibold;
    }

    p.message.error {
        @apply text-red-500;
    }
</style>
