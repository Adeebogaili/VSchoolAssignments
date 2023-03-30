function formatDate(date) {
  if (!(date instanceof Date && !isNaN(date))) {
    // handle invalid date input
    return '';
  }
  return new Intl.DateTimeFormat().format(date);
}

export default formatDate;

