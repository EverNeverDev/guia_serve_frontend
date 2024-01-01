export const formatStringToCpf = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
};

export const formatStringToCep = (value: string) => {
  value = value.replace(/\D/g, "");
  return value.replace(/^(\d{5})(\d{3})$/, "$1-$2");
};

export const removeSpecialChars = (value: string) => {
  return value.replace(/[^a-zA-Z0-9 ]/g, "");
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, "");
  if (!numericPhoneNumber || numericPhoneNumber.length < 11) {
    return numericPhoneNumber;
  }
  const formattedPhoneNumber = numericPhoneNumber.replace(
    /^(\d{2})(\d{4,5})(\d{4})$/,
    "($1) $2-$3"
  );
  return formattedPhoneNumber;
};
