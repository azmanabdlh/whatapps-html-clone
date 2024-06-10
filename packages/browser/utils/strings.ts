

export function getAcronymName(name: string): string {
  let acronym = ""
  const names = name.split(" ");

  if (names.length > 2) {
    acronym =  names[0].substring(0, 1) + names[names.length - 1].substring(0, 1)
  } else if (names.length == 2) {
    acronym =  names[0].substring(0, 1) + names[1].substring(0, 1);
  } else {
    acronym  = names[0].substring(0, 1);
  }


  return acronym.toUpperCase();
}