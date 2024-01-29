/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursthday,
  Friday,
  Saturday
}
function isWeekend (day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}