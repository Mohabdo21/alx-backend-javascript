function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot bo proccessed`));
}

export default uploadPhoto;
