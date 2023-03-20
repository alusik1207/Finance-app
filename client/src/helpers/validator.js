const validator = (validatorRules, data) => {
  let errors = {};

  for (let rule of validatorRules) {
    const { field, message, callback } = rule;
    if (errors[field]) {
      continue;
    }
    const currentData = data[field];
    if (!callback(currentData)) {
      errors[field] = message;
    }
  }
  return errors;
};

export default validator