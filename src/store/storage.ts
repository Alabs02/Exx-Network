import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = (): any => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    }
  };
};

const storage =
  typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export { storage as default };
