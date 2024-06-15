function workingHours (req, res, next) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentDay = currentTime.getDay();

  // SETTING WORKING DAYS AND HOURS

  const isweekDay = currentDay >=5 && currentDay <=5;
  const isWorkingHour = currentHour >= 9 && currentHour <=17;

  if (isweekDay && isWorkingHour) {
    next();
  } else {
    res.status(403).json({ message: 'Sorry, we are only available during working hours (Monday to Friday,  from 09:00 to 17:00).' });
  }
};

module.exports = workingHours;