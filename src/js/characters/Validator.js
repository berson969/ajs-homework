class Validator {
  static validateUserName(name) {
    const regex = /^[a-zA-Z](?!.*(\d{3}))[a-zA-Z0-9-_]*[a-zA-Z]$/;
    return regex.test(name);
  }

  static changePhoneNumber(number) {
    const changeNumber = number.replace(/^8/, '+7').replace(/\D/g, '');
    return (changeNumber) ? `+${changeNumber}` : false;
  }
}

export default Validator;
