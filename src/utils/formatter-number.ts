export const formatNumber = (number: number) =>
  new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
  
  export const formatSimpleNumber = (number: number) =>
  new Intl.NumberFormat("ru-RU").format(number);