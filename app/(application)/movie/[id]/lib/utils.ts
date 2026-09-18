export function getISOStringForCurrentTimezone(date: Date) {

    const resultDate = new Date(date);
    const timezoneOffsetMinutes = resultDate.getTimezoneOffset(); 
    resultDate.setMinutes(resultDate.getMinutes() - timezoneOffsetMinutes);
    return resultDate.toISOString();
 
}