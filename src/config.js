export default {
  //defaults
  USE_ICONS: true,
  // actual values (optionally) set by the user
  ...(window.config ?? {}),
};
