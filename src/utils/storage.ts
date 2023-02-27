import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";


export async function getStorage(name: string) {
  const item = await getItemAsync(name)
    .then((value) => {
      return value === null ? "" : JSON.parse(value);
    })
    .catch((error) => {
      console.log(`Storage get error: ${error}`);
    });

  return item;
}

export async function setStorage(name: string, value: object) {
  await setItemAsync(name, JSON.stringify(value))
    .then(() => {
      console.log("Storage set");
    })
    .catch((error) => {
      console.log(`Storage set error: ${error}`);
    });
}

export async function removeStorage(name: string) {
  await deleteItemAsync(name)
    .then(() => {
      console.log("Storage removed");
    })
    .catch((error) => {
      console.log(`Storage remove error: ${error}`);
    });
}

export async function updateStorage(name: string, value: any) {
  const item = await getStorage(name);
  Object.keys(item).forEach((key) => {
    if (value[key]) {
      item[key] = value[key];
    }
  });
  await removeStorage(name).then(() => {
    setStorage(name, item);
  });
}
