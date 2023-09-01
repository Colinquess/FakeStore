import AsyncStorage from '@react-native-async-storage/async-storage';

export function restoreStorage(
  searchKey: string,
  restorationCallBack: Function,
) {
  return new Promise<void>((resolve, reject) => {
    AsyncStorage.getAllKeys()
      .then(storageKeys => {
        if (storageKeys.includes(searchKey)) {
          AsyncStorage.getItem(searchKey)
            .then(cartItemsString => {
              if (cartItemsString === null) {
                restorationCallBack([]);
                resolve();
              } else {
                const cartItems = JSON.parse(cartItemsString!);

                if (typeof cartItems === 'object') {
                  restorationCallBack(cartItems);
                  resolve();
                } else {
                  reject();
                }
              }
            })
            .catch(reject); // Just ignore the error, the caller will handle it
        }
      })
      .catch(reject); // Just ignore the error, the caller will handle it
  });
}
