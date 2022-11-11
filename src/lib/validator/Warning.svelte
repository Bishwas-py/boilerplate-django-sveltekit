<script lang="ts">
    export let warns: string[];
</script>

{#if warns}
    {#if typeof warns === 'object'}
        {#each warns as error}
            <p class="message error">{error}</p>
        {/each}
    {:else}
        <p class="message error">{warns}</p>
    {/if}
{/if}

<style>
    p.message {
        @apply text-xs font-semibold;
    }

    p.message.error {
        @apply text-indigo-500;
    }
</style>
