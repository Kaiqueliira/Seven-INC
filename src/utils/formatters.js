export const currencyFormatter = (currency) => {
  let newCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currency);

  return newCurrency;
};

export const dateFormat = (date) => {
  let currentDate = new Date(date);

  let newDate = new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
    currentDate
  );

  return newDate;
};
