import { useSyncExternalStore } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const store = () => () => {};

/**
 * This hook is used to hydrate a value coming from the server with the client value.
 * @description - https://tkdodo.eu/blog/avoiding-hydration-mismatches-with-use-sync-external-store
 */
export function useHydrated<T>(clientSnapshot: T, serverSnapshot: T) {
  return useSyncExternalStore(
    store,
    () => clientSnapshot,
    () => serverSnapshot,
  );
}
