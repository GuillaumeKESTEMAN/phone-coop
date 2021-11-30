import COMMON_CONFIG from '../common/config';
import type { AppConfigs } from '../common/config';

/* Architecture Note #2.3: Overriding

Finally the configuration file for a given environnment
 may reuse or override the custom configuration file
 like here for the development configuration.
*/
const CONFIG: AppConfigs = {
  ...COMMON_CONFIG,
  DEV_ACCESS_TOKEN: 'admin|1|1',
  DEFAULT_MECHANISM: 'Fake',
  // This allows you to map service names depending on
  // the targetted environment. Here, for dev, we don't send SMS
  // but instead log them to slack.
  SERVICE_NAME_MAP: {
    sendSMS: 'logSMS',
  },
  // Avoid obfuscating secrets in development
  MAX_CLEAR_CHARS: Infinity,
  MAX_CLEAR_RATIO: 0,
  SENSIBLE_PROPS: [],
  SENSIBLE_HEADERS: [],
};

export default CONFIG;
