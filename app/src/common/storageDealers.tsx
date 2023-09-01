import AsyncStorage from '@react-native-async-storage/async-storage';

export function restoreStorage(
  searchKey: string,
  restorationCallBack: Function,
) {
  return new Promise<void>((Resolve, Reject) => {
    AsyncStorage.getAllKeys().then(storageKeys => {
      if (Array.from(storageKeys).includes(searchKey)) {
        AsyncStorage.getItem(searchKey)
          .then(cartItemsString => {
            let cartItems = JSON.parse(cartItemsString!);

            if (typeof cartItems === 'object') {
              restorationCallBack(cartItems);
              Resolve();
            } else {
              Reject();
            }
          })
          .catch(Reject /* Just lose it, caller will handle */);
      }
    });
  });
}
