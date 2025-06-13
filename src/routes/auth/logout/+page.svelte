<script lang="ts">
    import { onMount } from 'svelte';
    import { m } from '$lib/paraglide/messages.js';
    import { LogOut } from '@lucide/svelte';

    // This is a placeholder page for the server-side logout action
    onMount(() => {
        // Automatically submit the form when the component mounts
        document.querySelector('form')?.submit();
    });
</script>

<div class="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8 text-center">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <LogOut class="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {m.logging_out()}
        </h2>
        <div class="mt-4 flex justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-4 border-amber-200 border-t-amber-600"></div>
        </div>
        <form method="POST" action="/auth/logout" class="hidden">
            <!-- Hidden form that will be submitted by JavaScript -->
        </form>
    </div>
</div>
