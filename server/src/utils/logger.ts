import dayjs from 'dayjs';
import logger from 'pino';
import pretty from 'pino-pretty'

const log = logger({
//   prettyPrint: pretty.,
  base: {
    pid: false,
  },
  timestamp: () => `"time":"${dayjs().format()}`,
});

export default log;
