// Tracker storage
const trackerData = {
    permissions: [],
    network: [],
    fingerprint: [],
    sensors: [],
    graphics: [],
    storage: [],
    workers: [],
    serviceWorker: [],
    media: [],
    webCodecsStreams: [],
    observers: [],
    windowDoc: [],
    displayControl: [],
    auth: [],
    files: [],
    otherDevices: [],
    coordination: [],
    presentationXR: [],
    urlEncoding: [],
    scripting: [],
    eme: [],
    events: [],
    permissionsNames: [],
    networkInformation: [],
    mediaSessionActions: [],
    cssFeature: [],
    webGPU: [],
    crossTab: [],
    reporting: []
};

// Function to log API usage
function logTracker(category, item) {
    if (!trackerData[category]) {
        trackerData[category] = [];
    }
    trackerData[category].push({
        item: item,
        timestamp: new Date().toISOString(),
        stack: new Error().stack.split('\n').slice(2, 5).join('\n')
    });
    console.log(`[Tracker] ${category}: ${item}`);
}

// Override methods to track usage
function wrapMethod(obj, method, category) {
    if (obj && typeof obj[method] === 'function') {
        const original = obj[method];
        obj[method] = function (...args) {
            logTracker(category, `Method: ${method}`);
            return original.apply(this, args);
        };
    }
}

// Track event listeners
function wrapEventListener(obj, method, category) {
    if (obj && typeof obj[method] === 'function') {
        const original = obj[method];
        obj[method] = function (eventType, ...args) {
            logTracker(category, `Event: ${eventType}`);
            return original.call(this, eventType, ...args);
        };
    }
}

// Wrap properties to track usage
function wrapProperty(obj, prop, category) {
    if (obj && prop in obj) {
        Object.defineProperty(obj, prop, {
            get: function () {
                logTracker(category, `Property: ${prop}`);
                return Reflect.get(obj, prop);
            }
        });
    }
}

// Apply tracking for permissions APIs
wrapMethod(navigator.geolocation, 'getCurrentPosition', 'permissions');
wrapMethod(navigator.geolocation, 'watchPosition', 'permissions');
wrapMethod(navigator.mediaDevices, 'getUserMedia', 'permissions');
wrapMethod(navigator.mediaDevices, 'enumerateDevices', 'permissions');
wrapMethod(navigator.mediaDevices, 'getDisplayMedia', 'permissions');
wrapMethod(Notification, 'requestPermission', 'permissions');
wrapMethod(navigator.credentials, 'get', 'permissions');
wrapMethod(navigator.credentials, 'store', 'permissions');
wrapMethod(navigator.permissions, 'query', 'permissions');
wrapMethod(navigator.clipboard, 'readText', 'permissions');
wrapMethod(navigator.clipboard, 'read', 'permissions');
wrapMethod(navigator.clipboard, 'writeText', 'permissions');
wrapMethod(navigator.clipboard, 'write', 'permissions');
wrapMethod(navigator, 'share', 'permissions');
wrapMethod(navigator, 'canShare', 'permissions');
wrapMethod(navigator.wakeLock, 'request', 'permissions');
wrapMethod(navigator.contacts, 'select', 'permissions');
wrapMethod(navigator.bluetooth, 'requestDevice', 'permissions');
wrapMethod(navigator.usb, 'requestDevice', 'permissions');
wrapMethod(navigator.serial, 'requestPort', 'permissions');
wrapMethod(navigator.hid, 'requestDevice', 'permissions');
wrapMethod(navigator, 'requestMIDIAccess', 'permissions');
wrapMethod(window, 'showOpenFilePicker', 'permissions');
wrapMethod(window, 'showSaveFilePicker', 'permissions');
wrapMethod(window, 'showDirectoryPicker', 'permissions');

// Track network APIs
const originalFetch = window.fetch;
window.fetch = function (...args) {
    logTracker('network', `fetch: ${args[0]}`);
    return originalFetch.apply(this, args);
};
wrapMethod(navigator, 'sendBeacon', 'network');
const originalXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = function () {
    logTracker('network', 'XMLHttpRequest');
    return new originalXMLHttpRequest();
};
const originalWebSocket = window.WebSocket;
window.WebSocket = function (...args) {
    logTracker('network', `WebSocket: ${args[0]}`);
    return new originalWebSocket(...args);
};
const originalEventSource = window.EventSource;
window.EventSource = function (...args) {
    logTracker('network', `EventSource: ${args[0]}`);
    return new originalEventSource(...args);
};

// Track fingerprinting APIs
wrapProperty(navigator, 'userAgent', 'fingerprint');
wrapProperty(navigator, 'userAgentData', 'fingerprint');
wrapProperty(navigator, 'platform', 'fingerprint');
wrapProperty(navigator, 'language', 'fingerprint');
wrapProperty(navigator, 'languages', 'fingerprint');
wrapProperty(navigator, 'hardwareConcurrency', 'fingerprint');
wrapProperty(navigator, 'deviceMemory', 'fingerprint');
wrapProperty(navigator, 'maxTouchPoints', 'fingerprint');
wrapProperty(navigator, 'vendor', 'fingerprint');
wrapProperty(navigator, 'product', 'fingerprint');
wrapProperty(navigator, 'webdriver', 'fingerprint');
wrapProperty(navigator, 'doNotTrack', 'fingerprint');
wrapProperty(navigator, 'cookieEnabled', 'fingerprint');
wrapMethod(navigator, 'javaEnabled', 'fingerprint');
wrapProperty(navigator, 'plugins', 'fingerprint');
wrapProperty(navigator, 'mimeTypes', 'fingerprint');
wrapProperty(screen, 'width', 'fingerprint');
wrapProperty(screen, 'height', 'fingerprint');
wrapProperty(screen, 'availWidth', 'fingerprint');
wrapProperty(screen, 'availHeight', 'fingerprint');
wrapProperty(screen, 'colorDepth', 'fingerprint');
wrapProperty(screen, 'pixelDepth', 'fingerprint');
wrapProperty(screen.orientation, 'type', 'fingerprint');
wrapProperty(window, 'devicePixelRatio', 'fingerprint');
wrapProperty(window, 'innerWidth', 'fingerprint');
wrapProperty(window, 'innerHeight', 'fingerprint');
wrapProperty(window, 'outerWidth', 'fingerprint');
wrapProperty(window, 'outerHeight', 'fingerprint');

// Track sensor APIs
wrapMethod(navigator, 'getBattery', 'sensors');
wrapMethod(navigator, 'vibrate', 'sensors');

// Track graphics APIs
wrapMethod(HTMLCanvasElement.prototype, 'getContext', 'graphics');
wrapMethod(HTMLCanvasElement.prototype, 'toDataURL', 'graphics');
wrapMethod(HTMLCanvasElement.prototype, 'toBlob', 'graphics');
const originalOffscreenCanvas = window.OffscreenCanvas;
window.OffscreenCanvas = function (...args) {
    logTracker('graphics', 'OffscreenCanvas');
    return new originalOffscreenCanvas(...args);
};

// Track storage APIs
wrapMethod(localStorage, 'setItem', 'storage');
wrapMethod(localStorage, 'getItem', 'storage');
wrapMethod(localStorage, 'removeItem', 'storage');
wrapMethod(localStorage, 'clear', 'storage');
wrapMethod(sessionStorage, 'setItem', 'storage');
wrapMethod(sessionStorage, 'getItem', 'storage');
wrapMethod(sessionStorage, 'removeItem', 'storage');
wrapMethod(sessionStorage, 'clear', 'storage');
wrapMethod(window.indexedDB, 'open', 'storage');
wrapMethod(window.indexedDB, 'deleteDatabase', 'storage');
wrapMethod(window.caches, 'open', 'storage');
wrapMethod(window.caches, 'keys', 'storage');
wrapMethod(window.caches, 'delete', 'storage');
wrapMethod(navigator.storage, 'estimate', 'storage');
wrapMethod(navigator.storage, 'persist', 'storage');
wrapProperty(document, 'cookie', 'storage');
wrapMethod(document, 'requestStorageAccess', 'storage');

// Track event listeners
wrapEventListener(document, 'addEventListener', 'events');
wrapEventListener(window, 'addEventListener', 'events');

// Track other APIs as needed
wrapMethod(navigator.serviceWorker, 'register', 'serviceWorker');
wrapMethod(navigator.serviceWorker, 'getRegistrations', 'serviceWorker');
wrapMethod(HTMLMediaElement.prototype, 'play', 'media');
wrapMethod(HTMLMediaElement.prototype, 'pause', 'media');
wrapMethod(window, 'matchMedia', 'cssFeature');
wrapMethod(navigator.gpu, 'requestAdapter', 'webGPU');

// Periodically log tracker data
setInterval(() => {
    console.log('Tracker Data Summary:', trackerData);
}, 60000);
