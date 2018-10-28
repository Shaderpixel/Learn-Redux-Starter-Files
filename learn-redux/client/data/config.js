import Raven from 'raven-js';

const sentry_key = 'd09cb352aade4672b558a5cd227c68b3';
const sentry_app = '1308624';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    // capture custom exceptions to provide additional context
    extra: context,
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
