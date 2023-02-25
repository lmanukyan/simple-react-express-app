export const getSelectedImageDataURI = (e) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (e) => {
      reject(e);
    };
    reader.readAsDataURL(e.target.files[0]);
  });
};

export const storeUser = (object) => {
  localStorage.setItem('appUser', JSON.stringify(object));
}

export const getStoredUser = () => {
  const data = localStorage.getItem('appUser');
  try {
    const user = JSON.parse(data);
    if (typeof user === 'object') {
      return user.hasOwnProperty('id') ? user : false;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export const resetStoredUser = () => {
  localStorage.removeItem('appUser');
}