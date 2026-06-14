export function formatDate(
  date,
  options = {
    month: "short",
    year: "numeric",
  }
) {
  return new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(new Date(date));
}