module.exports = {
  METHODS: {
    START: 'start',
    STOP: 'stop',
    ADVANCE: 'advance',
    TRACK: 'track',
    PAUSE_SESSION: 'pauseSession',
    RESUME_SESSION: 'resumeSession',
    PAUSE_STATE: 'pauseState',
    RESUME_STATE: 'resumeState',
    DOWNLOAD_FILE: 'downloadFile',
    MULTI: 'multi',
    SET_VARS: 'setVars',
    GET_VARS: 'getVars',
    SET_USER_ATTRIBUTES: 'setUserAttributes',
    SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
    UPLOAD_FILE: 'uploadFile',
    REGISTER_DEVICE: 'registerDevice',
  },

  SDK_VERSION: '1.1.10',

  CLIENT: 'js',

  PARAMS: {
    ACTION: 'action',
    APP_ID: 'appId',
    CLIENT: 'client',
    CLIENT_KEY: 'clientKey',
    DEVICE_ID: 'deviceId',
    SDK_VERSION: 'sdkVersion',
    USER_ID: 'userId',
    NEW_USER_ID: 'newUserId',
    DEV_MODE: 'devMode',
    VERSION_NAME: 'versionName',
    SYSTEM_NAME: 'systemName',
    SYSTEM_VERSION: 'systemVersion',
    BROWSER_NAME: 'browserName',
    BROWSER_VERSION: 'browserVersion',
    DEVICE_NAME: 'deviceName',
    DEVICE_MODEL: 'deviceModel',
    USER_ATTRIBUTES: 'userAttributes',
    LOCALE: 'locale',
    COUNTRY: 'country',
    REGION: 'region',
    CITY: 'city',
    LOCATION: 'location',
    STATE: 'state',
    INFO: 'info',
    EVENT: 'event',
    VALUE: 'value',
    FILENAME: 'filename',
    TIME: 'time',
    DATA: 'data',
    VARS: 'vars',
    FILE: 'file',
    SIZE: 'size',
    VARIATION: 'variation',
    HASH: 'hash',
    EMAIL: 'email',
    VARIABLES: 'vars',
    PARAMS: 'params',
    INCLUDE_DEFAULTS: 'includeDefaults',
    WEB_PUSH_SUBSCRIPTION: 'webPushSubscription',
  },

  KEYS: {
    IS_REGISTERED: 'isRegistered',
    LATEST_VERSION: 'latestVersion',
    VARS: 'vars',
    VARIANTS: 'variants',
    ACTION_METADATA: 'actionMetadata',
    TOKEN: 'token',
  },

  DEFAULT_KEYS: {
    COUNT: '__leanplum_unsynced',
    ITEM: '__leanplum_unsynced_',
    VARIABLES: '__leanplum_variables',
    VARIANTS: '__leanplum_variants',
    ACTION_METADATA: '__leanplum_action_metadata',
    TOKEN: '__leanplum_token',
    DEVICE_ID: '__leanplum_device_id',
    USER_ID: '__leanplum_user_id',
    PUSH_SUBSCRIPTION: '__leanplum_push_subscription',
  },

  VALUES: {
    DETECT: '(detect)',
  },
};