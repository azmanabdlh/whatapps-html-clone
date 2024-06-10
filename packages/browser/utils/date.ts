import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';


dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('id');

export function toHumanize(date: Date): string {
  return dayjs().to(date);  
}

