export const getFormattedString = (dateTime: Date): string => {
  let format = 'yyyy-MM-dd hh:mm:ss';

  format = format.replace('yyyy', dateTime.getFullYear().toString());
  format = format.replace('MM', (dateTime.getMonth() - 1).toString());
  format = format.replace('dd', dateTime.getDate().toString());
  format = format.replace('hh', dateTime.getHours().toString());
  format = format.replace('mm', dateTime.getMinutes().toString());
  format = format.replace('ss', dateTime.getSeconds().toString());

  return format;
};

export const getMin = (dateTime: Date): string => {
  let format = 'mm:ss';
  format = format.replace('mm', dateTime.getMinutes().toString());
  format = format.replace('ss', dateTime.getSeconds().toString());

  return format;
};

export const getSeconds = (dateTime: Date): string => {
  let format = 'ss';

  format = format.replace('ss', dateTime.getSeconds().toString());

  return format;
};
