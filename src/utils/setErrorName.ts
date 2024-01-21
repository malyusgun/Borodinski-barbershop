export default function setErrorName(
  name: string,
  value: string,
  validations: {
    isEmpty: boolean,
    minLength: number
  }
) {
  const nameArrError = [
    "Пожалуйста, введите имя",
    "Введённое имя слишком короткое",
  ];
  const reviewArrError = [
    "Пожалуйста, напишите отзыв",
    "Отзыв слишком короткий",
  ];
  let error = "";
  for (const validation in validations) {
    switch (name) {
      case "name":
        switch (validation) {
          case "minLength":
            if (value && value.length < validations[validation]) error = nameArrError[1];
            break;
          case "isEmpty":
            if (!value) error = nameArrError[0];
            break;
        }
        break;
      case "review":
        switch (validation) {
          case "isEmpty":
            if (!value) error = reviewArrError[0];
            break;
          case "minLength":
            if (value && value.length < validations[validation])
              error = reviewArrError[1];
            break;
        }
        break;
      default:
        error = "";
    }
  }
  return error;
}
