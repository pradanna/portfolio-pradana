<script lang="ts">
  interface Props {
    variant?: 'client' | 'exploration' | 'status' | 'neutral';
    children?: import('svelte').Snippet;
  }

  let { variant = 'neutral', children }: Props = $props();
</script>

<span class="badge badge-{variant}">
  {#if variant === 'status' || variant === 'client'}
    <span class="badge-dot" aria-hidden="true"></span>
  {/if}
  {#if children}
    {@render children()}
  {/if}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: var(--radius-full);
    font-size: 0.8125rem; /* 13px */
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.01em;
    width: fit-content;
    white-space: nowrap;
  }

  /* PRD: Sage green for status / client active use */
  .badge-client {
    background-color: var(--color-status-soft);
    color: var(--color-status-text);
    border: 1px solid rgba(143, 179, 154, 0.4);
  }

  .badge-exploration {
    background-color: var(--color-primary-soft);
    color: var(--color-primary);
    border: 1px solid rgba(61, 90, 128, 0.2);
  }

  .badge-status {
    background-color: var(--color-status-soft);
    color: var(--color-status-text);
    border: 1px solid rgba(143, 179, 154, 0.35);
  }

  .badge-neutral {
    background-color: var(--bg-subtle);
    color: var(--text-muted);
    border: 1px solid var(--color-divider);
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-status);
    box-shadow: 0 0 0 2px rgba(143, 179, 154, 0.3);
  }
</style>
