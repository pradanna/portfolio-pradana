<script lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    external?: boolean;
    children?: import('svelte').Snippet;
    onclick?: (e: MouseEvent) => void;
  }

  let {
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    external = false,
    children,
    onclick
  }: Props = $props();
</script>

{#if href}
  <a
    {href}
    class="btn btn-{variant} btn-{size}"
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    {onclick}
  >
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button
    {type}
    class="btn btn-{variant} btn-{size}"
    {onclick}
  >
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: var(--font-body);
    font-weight: 600;
    text-align: center;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    cursor: pointer;
    text-decoration: none;
    line-height: 1.25;
    position: relative;
    user-select: none;
  }

  /* Sizes */
  .btn-sm {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
    border-radius: var(--radius-sm);
  }

  .btn-md {
    padding: 0.75rem 1.35rem;
    font-size: 0.9375rem;
  }

  .btn-lg {
    padding: 0.95rem 1.75rem;
    font-size: 1.0625rem;
  }

  /* Primary CTA Button: Vibrant Blue */
  .btn-primary {
    background-color: var(--color-accent);
    color: #FFFFFF;
    box-shadow: 0 4px 14px var(--color-accent-glow);
    border: 1px solid rgba(37, 99, 235, 0.4);
  }

  .btn-primary:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--color-accent-glow);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  /* Slate blue - 90% dominant tone */
  .btn-secondary {
    background-color: var(--color-primary);
    color: #FFFFFF;
    border: 1px solid transparent;
  }

  .btn-secondary:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px var(--color-primary-glow);
  }

  .btn-secondary:active {
    transform: translateY(0);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 1.5px solid var(--color-primary);
  }

  .btn-outline:hover {
    background-color: var(--color-primary-soft);
    transform: translateY(-2px);
  }

  .btn-outline:active {
    transform: translateY(0);
  }

  .btn-ghost {
    background-color: transparent;
    color: var(--text-main);
  }

  .btn-ghost:hover {
    background-color: var(--bg-subtle);
    color: var(--color-primary);
  }

  .btn:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
</style>
