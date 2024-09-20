/**
 *
 * Configure Local Storage
 *
 * @param {*} name
 * @param {*} value
 * @param {*} action
 */
const configureStorage = (name, value, action = 'set') => {
  if (typeof window !== 'undefined') {
    if (action === 'set') {
      window.localStorage.setItem(name, value);
    } else {
      window.localStorage.removeItem(name);
    }
  }
};

/**
 *
 * Set Local Storage
 *
 * @param {*} storages
 */
export const setStorages = (storages) => {
  storages.map((item) => configureStorage(item.name, item.value));
};

/**
 *
 * Clear Local Storage
 *
 * @param {*} storages
 */
export const clearStorages = (storages) => {
  storages.map((item) => configureStorage(item, '', 'remove'));
};

/**
 *
 * Get Local Storage
 *
 * @param {*} storage
 * @returns
 */
export const getStorage = (storage) => {
  if (typeof window !== 'undefined') {
    const store = window.localStorage.getItem(storage);

    if (typeof storage !== 'undefined') {
      return store;
    }
  }

  return null;
};
