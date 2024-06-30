const convertToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = (): void => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error): void => {
      reject(error);
    };
  });
};

export default convertToBase64;
