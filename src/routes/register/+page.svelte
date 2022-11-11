<!-- Login Page Tailwind CSS component by @drehimself -->
<script lang="ts">
    import {applyAction, enhance} from '$app/forms';
    import {invalidateAll} from "$app/navigation";
    import {page} from "$app/stores";

    import type {ActionData} from './$types';
    import type {AuthError} from "$lib/interfaces/auth";


    import Message from "$lib/validator/Message.svelte";
    import Error from "$lib/validator/Error.svelte";

    let siteTitle = $page.data.siteData.title;

    let isLoading: boolean = false;
    export let form: ActionData | AuthError;
</script>

<svelte:head>
    <title>Register | {siteTitle}</title>
</svelte:head>

<div class="auth-layer">
    <div class="auth-info-section">
        <div class="flex flex-col gap-2">
            <!-- Logo and image goes over here -->
        </div>
        <h2>
            Create an new Xoomato account
        </h2>
        <p>
            Already have one?
            <a href="/login" class="link">
                Login here then.
            </a>
        </p>
    </div>

    <div class="wrap">
        <Message messages={form?.invalid} />
        <Message messages={form?.detail} />

        <form method="POST" use:enhance={() => {
                isLoading = true;
                return async ({ result }) => {
                  await invalidateAll();
                  await applyAction(result);
                  isLoading = false;
                }
            }}>
            <div>
                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" class="peer" placeholder="your@mail.com"/>
                <Error errors={form?.email}/>
            </div>
            <div>
                <label for="username">
                    Username
                </label>
                <input type="text" name="username" id="username" class="peer" placeholder="********"/>
                <Error errors={form?.username}/>
            </div>
            <div>
                <label for="password">
                    Password
                </label>
                <input type="password" name="password" id="password" class="peer" placeholder="********"/>
                <Error errors={form?.password}/>
            </div>
            <div>
                <label for="password_confirmation">
                    Password
                </label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="peer"
                       placeholder="********"/>
                <Error errors={form?.password_confirmation}/>
            </div>

            <button>
                Sign in
            </button>
        </form>
    </div>
</div>
