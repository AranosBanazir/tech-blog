module.exports = {
  formatDate: (date) => {
    const fixedDate = new Date(date).toLocaleDateString();
    return fixedDate;
  },
};
