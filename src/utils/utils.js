export const capitalizeString = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatAuthErrorMessage = (message) => {
  const removedAuthPrefix = message.substring("auth/".length);
  const removedDashes = removedAuthPrefix.replaceAll("-", " ");
  const capitalized =
    removedDashes.at(0).toUpperCase() + removedDashes.slice(1);
  return capitalized;
};

// Calculates the key of the current fiscal year
export const getCurrentFiscalYearKey = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const START_YEAR = 13;
  const fiscalYearKey =
    month > 6 ? year - 2000 - START_YEAR + 1 : year - 2000 - START_YEAR;
  return fiscalYearKey;
};

// Parses a phone number in this format: (123) 456-7890 -> 1234567890
export const parsePhoneNumber = (phoneNumber) => phoneNumber.replace(/\D/g, "");

export const getCurrentFiscalYear = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const nextYearLastTwoDigits = nextYear.toString().substring(2, 4);

  return String(currentYear).slice(2) + "/" + nextYearLastTwoDigits;
};
