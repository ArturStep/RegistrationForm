export const getAge = (value = '') => {
  const [day, month, year] = value.split(' ')

  const birthday = new Date(year, month - 1, day - 1)
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
