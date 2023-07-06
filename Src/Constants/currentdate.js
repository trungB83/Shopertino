export default getCurrentDate = () => {
  const monthNames = [
    // Get month as String
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date().getDate();
  var month = monthNames[new Date().getMonth()];
  return date + " " + month;
};
