export const formatDateToHuman = (
  date: string,
  options: { withYear: boolean } = { withYear: false }
) => {
  const internalDate = new Date(date);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: options.withYear ? "numeric" : undefined,
  }).format(internalDate);
};
