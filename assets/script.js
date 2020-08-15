// Initialise Apps framework client. See also:
// https://developer.zendesk.com/apps/docs/developer-guide/getting_started
let client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '200px' });
