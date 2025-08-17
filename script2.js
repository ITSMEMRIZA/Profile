const WEBHOOK_URL = "https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p";

const trackers = [
    {
        category: "Permissions",
        items: [
            { name: "navigator.geolocation.getCurrentPosition", check: () => typeof navigator.geolocation?.getCurrentPosition === "function" },
            { name: "navigator.geolocation.watchPosition", check: () => typeof navigator.geolocation?.watchPosition === "function" },
            { name: "navigator.mediaDevices.getUserMedia", check: () => typeof navigator.mediaDevices?.getUserMedia === "function" },
            { name: "navigator.mediaDevices.enumerateDevices", check: () => typeof navigator.mediaDevices?.enumerateDevices === "function" },
            { name: "navigator.mediaDevices.getDisplayMedia", check: () => typeof navigator.mediaDevices?.getDisplayMedia === "function" },
            { name: "Notification.requestPermission", check: () => typeof Notification?.requestPermission === "function" },
            { name: "navigator.credentials.get", check: () => typeof navigator.credentials?.get === "function" },
            { name: "navigator.credentials.store", check: () => typeof navigator.credentials?.store === "function" },
            { name: "navigator.permissions.query", check: () => typeof navigator.permissions?.query === "function" },
            { name: "navigator.clipboard.readText", check: () => typeof navigator.clipboard?.readText === "function" },
            { name: "navigator.clipboard.read", check: () => typeof navigator.clipboard?.read === "function" },
            { name: "navigator.clipboard.writeText", check: () => typeof navigator.clipboard?.writeText === "function" },
            { name: "navigator.clipboard.write", check: () => typeof navigator.clipboard?.write === "function" },
            { name: "navigator.share", check: () => typeof navigator.share === "function" },
            { name: "navigator.canShare", check: () => typeof navigator.canShare === "function" },
            { name: "EyeDropper", check: () => typeof EyeDropper === "function" },
            { name: "navigator.wakeLock.request", check: () => typeof navigator.wakeLock?.request === "function" },
            { name: "IdleDetector", check: () => typeof IdleDetector === "function" },
            { name: "PaymentRequest", check: () => typeof PaymentRequest === "function" },
            { name: "navigator.contacts.select", check: () => typeof navigator.contacts?.select === "function" },
            { name: "navigator.bluetooth.requestDevice", check: () => typeof navigator.bluetooth?.requestDevice === "function" },
            { name: "navigator.usb.requestDevice", check: () => typeof navigator.usb?.requestDevice === "function" },
            { name: "navigator.serial.requestPort", check: () => typeof navigator.serial?.requestPort === "function" },
            { name: "navigator.hid.requestDevice", check: () => typeof navigator.hid?.requestDevice === "function" },
            { name: "navigator.requestMIDIAccess", check: () => typeof navigator.requestMIDIAccess === "function" },
            { name: "navigator.nfc.watch", check: () => typeof navigator.nfc?.watch === "function" },
            { name: "window.showOpenFilePicker", check: () => typeof window.showOpenFilePicker === "function" },
            { name: "window.showSaveFilePicker", check: () => typeof window.showSaveFilePicker === "function" },
            { name: "window.showDirectoryPicker", check: () => typeof window.showDirectoryPicker === "function" },
        ]
    },
    {
        category: "Network",
        items: [
            { name: "fetch", check: () => typeof fetch === "function" },
            { name: "navigator.sendBeacon", check: () => typeof navigator.sendBeacon === "function" },
            { name: "XMLHttpRequest", check: () => typeof XMLHttpRequest === "function" },
            { name: "WebSocket", check: () => typeof WebSocket === "function" },
            { name: "EventSource", check: () => typeof EventSource === "function" },
            { name: "RTCPeerConnection", check: () => typeof RTCPeerConnection === "function" },
            { name: "WebTransport", check: () => typeof WebTransport === "function" },
        ]
    },
    {
        category: "Fingerprint",
        items: [
            { name: "navigator.userAgent", check: () => typeof navigator.userAgent === "string" && navigator.userAgent },
            { name: "navigator.userAgentData", check: () => navigator.userAgentData !== undefined },
            { name: "navigator.platform", check: () => typeof navigator.platform === "string" && navigator.platform },
            { name: "navigator.language", check: () => typeof navigator.language === "string" && navigator.language },
            { name: "navigator.languages", check: () => Array.isArray(navigator.languages) && navigator.languages.length > 0 },
            { name: "navigator.hardwareConcurrency", check: () => typeof navigator.hardwareConcurrency === "number" },
            { name: "navigator.deviceMemory", check: () => typeof navigator.deviceMemory === "number" },
            { name: "navigator.maxTouchPoints", check: () => typeof navigator.maxTouchPoints === "number" },
            { name: "navigator.vendor", check: () => typeof navigator.vendor === "string" && navigator.vendor },
            { name: "navigator.product", check: () => typeof navigator.product === "string" && navigator.product },
            { name: "navigator.webdriver", check: () => navigator.webdriver !== undefined },
            { name: "navigator.doNotTrack", check: () => navigator.doNotTrack !== null },
            { name: "navigator.cookieEnabled", check: () => typeof navigator.cookieEnabled === "boolean" },
            { name: "navigator.javaEnabled", check: () => typeof navigator.javaEnabled === "function" },
            { name: "navigator.plugins", check: () => navigator.plugins !== undefined && navigator.plugins.length > 0 },
            { name: "navigator.mimeTypes", check: () => navigator.mimeTypes !== undefined && navigator.mimeTypes.length > 0 },
            { name: "screen.width", check: () => typeof screen.width === "number" && screen.width > 0 },
            { name: "screen.height", check: () => typeof screen.height === "number" && screen.height > 0 },
            { name: "screen.availWidth", check: () => typeof screen.availWidth === "number" && screen.availWidth > 0 },
            { name: "screen.availHeight", check: () => typeof screen.availHeight === "number" && screen.availHeight > 0 },
            { name: "screen.colorDepth", check: () => typeof screen.colorDepth === "number" && screen.colorDepth > 0 },
            { name: "screen.pixelDepth", check: () => typeof screen.pixelDepth === "number" && screen.pixelDepth > 0 },
            { name: "screen.orientation.type", check: () => typeof screen.orientation?.type === "string" && screen.orientation.type },
            { name: "window.devicePixelRatio", check: () => typeof window.devicePixelRatio === "number" && window.devicePixelRatio > 0 },
            { name: "window.innerWidth", check: () => typeof window.innerWidth === "number" && window.innerWidth > 0 },
            { name: "window.innerHeight", check: () => typeof window.innerHeight === "number" && window.innerHeight > 0 },
            { name: "window.outerWidth", check: () => typeof window.outerWidth === "number" && window.outerWidth > 0 },
            { name: "window.outerHeight", check: () => typeof window.outerHeight === "number" && window.outerHeight > 0 },
            { name: "Intl.DateTimeFormat().resolvedOptions().timeZone", check: () => typeof Intl.DateTimeFormat().resolvedOptions().timeZone === "string" },
        ]
    },
    {
        category: "Sensors",
        items: [
            { name: "navigator.getBattery", check: () => typeof navigator.getBattery === "function" },
            { name: "DeviceOrientationEvent", check: () => typeof DeviceOrientationEvent === "function" },
            { name: "DeviceMotionEvent", check: () => typeof DeviceMotionEvent === "function" },
            { name: "AbsoluteOrientationSensor", check: () => typeof AbsoluteOrientationSensor === "function" },
            { name: "Accelerometer", check: () => typeof Accelerometer === "function" },
            { name: "Gyroscope", check: () => typeof Gyroscope === "function" },
            { name: "Magnetometer", check: () => typeof Magnetometer === "function" },
            { name: "AmbientLightSensor", check: () => typeof AmbientLightSensor === "function" },
            { name: "Barometer", check: () => typeof Barometer === "function" },
            { name: "ProximitySensor", check: () => typeof ProximitySensor === "function" },
            { name: "navigator.vibrate", check: () => typeof navigator.vibrate === "function" },
        ]
    },
    {
        category: "Graphics",
        items: [
            { name: "canvas.getContext", check: () => typeof HTMLCanvasElement.prototype.getContext === "function" },
            { name: "canvas.toDataURL", check: () => typeof HTMLCanvasElement.prototype.toDataURL === "function" },
            { name: "canvas.toBlob", check: () => typeof HTMLCanvasElement.prototype.toBlob === "function" },
            { name: "OffscreenCanvas", check: () => typeof OffscreenCanvas === "function" },
            { name: "WebGLRenderingContext", check: () => typeof WebGLRenderingContext === "function" },
            { name: "WebGL2RenderingContext", check: () => typeof WebGL2RenderingContext === "function" },
            { name: "navigator.gpu", check: () => navigator.gpu !== undefined },
        ]
    },
    {
        category: "Storage",
        items: [
            { name: "localStorage", check: () => typeof localStorage === "object" && localStorage !== null },
            { name: "sessionStorage", check: () => typeof sessionStorage === "object" && sessionStorage !== null },
            { name: "indexedDB", check: () => typeof indexedDB === "object" && indexedDB !== null },
            { name: "caches", check: () => typeof caches === "object" && caches !== null },
            { name: "navigator.storage.estimate", check: () => typeof navigator.storage?.estimate === "function" },
            { name: "navigator.storage.persist", check: () => typeof navigator.storage?.persist === "function" },
            { name: "document.cookie", check: () => typeof document.cookie === "string" },
            { name: "document.requestStorageAccess", check: () => typeof document.requestStorageAccess === "function" },
        ]
    },
    {
        category: "Workers",
        items: [
            { name: "Worker", check: () => typeof Worker === "function" },
            { name: "SharedWorker", check: () => typeof SharedWorker === "function" },
            { name: "MessageChannel", check: () => typeof MessageChannel === "function" },
            { name: "BroadcastChannel", check: () => typeof BroadcastChannel === "function" },
        ]
    },
    {
        category: "ServiceWorker",
        items: [
            { name: "navigator.serviceWorker.register", check: () => typeof navigator.serviceWorker?.register === "function" },
            { name: "navigator.serviceWorker.getRegistrations", check: () => typeof navigator.serviceWorker?.getRegistrations === "function" },
            { name: "navigator.serviceWorker.ready", check: () => typeof navigator.serviceWorker?.ready === "object" },
            { name: "PushManager", check: () => typeof PushManager === "function" },
            { name: "SyncManager", check: () => typeof SyncManager === "function" },
            { name: "PeriodicSyncManager", check: () => typeof PeriodicSyncManager === "function" },
        ]
    },
    {
        category: "Media",
        items: [
            { name: "HTMLMediaElement.play", check: () => typeof HTMLMediaElement.prototype.play === "function" },
            { name: "HTMLMediaElement.pause", check: () => typeof HTMLMediaElement.prototype.pause === "function" },
            { name: "HTMLMediaElement.captureStream", check: () => typeof HTMLMediaElement.prototype.captureStream === "function" },
            { name: "MediaRecorder", check: () => typeof MediaRecorder === "function" },
            { name: "MediaStreamTrack.getSettings", check: () => typeof MediaStreamTrack.prototype.getSettings === "function" },
            { name: "MediaCapabilities", check: () => typeof navigator.mediaCapabilities === "object" && navigator.mediaCapabilities !== null },
            { name: "navigator.mediaSession", check: () => typeof navigator.mediaSession === "object" && navigator.mediaSession !== null },
            { name: "document.pictureInPictureEnabled", check: () => typeof document.pictureInPictureEnabled === "boolean" },
            { name: "HTMLVideoElement.requestPictureInPicture", check: () => typeof HTMLVideoElement.prototype.requestPictureInPicture === "function" },
            { name: "document.exitPictureInPicture", check: () => typeof document.exitPictureInPicture === "function" },
            { name: "navigator.requestMediaKeySystemAccess", check: () => typeof navigator.requestMediaKeySystemAccess === "function" },
        ]
    },
    {
        category: "WebCodecs/Streams",
        items: [
            { name: "VideoDecoder", check: () => typeof VideoDecoder === "function" },
            { name: "AudioDecoder", check: () => typeof AudioDecoder === "function" },
            { name: "VideoEncoder", check: () => typeof VideoEncoder === "function" },
            { name: "AudioEncoder", check: () => typeof AudioEncoder === "function" },
            { name: "ImageDecoder", check: () => typeof ImageDecoder === "function" },
            { name: "EncodedVideoChunk", check: () => typeof EncodedVideoChunk === "function" },
            { name: "ReadableStream", check: () => typeof ReadableStream === "function" },
            { name: "WritableStream", check: () => typeof WritableStream === "function" },
            { name: "TransformStream", check: () => typeof TransformStream === "function" },
            { name: "CompressionStream", check: () => typeof CompressionStream === "function" },
            { name: "DecompressionStream", check: () => typeof DecompressionStream === "function" },
        ]
    },
    {
        category: "Observers",
        items: [
            { name: "MutationObserver", check: () => typeof MutationObserver === "function" },
            { name: "ResizeObserver", check: () => typeof ResizeObserver === "function" },
            { name: "IntersectionObserver", check: () => typeof IntersectionObserver === "function" },
            { name: "PerformanceObserver", check: () => typeof PerformanceObserver === "function" },
            { name: "performance.now", check: () => typeof performance.now === "function" },
            { name: "performance.timing", check: () => typeof performance.timing === "object" && performance.timing !== null },
            { name: "performance.getEntries", check: () => typeof performance.getEntries === "function" },
            { name: "performance.memory", check: () => typeof performance.memory === "object" && performance.memory !== null },
            { name: "ReportingObserver", check: () => typeof ReportingObserver === "function" },
        ]
    },
    {
        category: "Window/Doc",
        items: [
            { name: "document.referrer", check: () => typeof document.referrer === "string" },
            { name: "document.location", check: () => typeof document.location === "object" && document.location !== null },
            { name: "document.domain", check: () => typeof document.domain === "string" && document.domain },
            { name: "document.visibilityState", check: () => typeof document.visibilityState === "string" },
            { name: "document.hasFocus", check: () => typeof document.hasFocus === "function" },
            { name: "window.history.length", check: () => typeof window.history.length === "number" },
            { name: "window.history.pushState", check: () => typeof window.history.pushState === "function" },
            { name: "window.history.replaceState", check: () => typeof window.history.replaceState === "function" },
            { name: "window.open", check: () => typeof window.open === "function" },
            { name: "window.close", check: () => typeof window.close === "function" },
            { name: "window.stop", check: () => typeof window.stop === "function" },
            { name: "window.focus", check: () => typeof window.focus === "function" },
            { name: "window.blur", check: () => typeof window.blur === "function" },
            { name: "window.print", check: () => typeof window.print === "function" },
            { name: "window.matchMedia", check: () => typeof window.matchMedia === "function" },
            { name: "window.getSelection", check: () => typeof window.getSelection === "function" },
            { name: "window.name", check: () => typeof window.name === "string" },
        ]
    },
    {
        category: "Display Control",
        items: [
            { name: "Element.requestFullscreen", check: () => typeof Element.prototype.requestFullscreen === "function" },
            { name: "document.exitFullscreen", check: () => typeof document.exitFullscreen === "function" },
            { name: "document.fullscreenElement", check: () => typeof document.fullscreenElement !== "undefined" },
            { name: "Element.requestPointerLock", check: () => typeof Element.prototype.requestPointerLock === "function" },
            { name: "document.exitPointerLock", check: () => typeof document.exitPointerLock === "function" },
            { name: "document.pointerLockElement", check: () => typeof document.pointerLockElement !== "undefined" },
            { name: "screen.orientation.lock", check: () => typeof screen.orientation?.lock === "function" },
        ]
    },
    {
        category: "Auth",
        items: [
            { name: "PublicKeyCredential", check: () => typeof PublicKeyCredential === "function" },
            { name: "navigator.credentials.get({identity})", check: () => typeof navigator.credentials?.get === "function" },
        ]
    },
    {
        category: "Files",
        items: [
            { name: "FileReader", check: () => typeof FileReader === "function" },
            { name: "DataTransfer", check: () => typeof DataTransfer === "function" },
            { name: "FileSystemHandle", check: () => typeof FileSystemHandle === "function" },
            { name: "FileSystemFileHandle", check: () => typeof FileSystemFileHandle === "function" },
        ]
    },
    {
        category: "Other Devices",
        items: [
            { name: "navigator.getGamepads", check: () => typeof navigator.getGamepads === "function" },
            { name: "SpeechSynthesisUtterance", check: () => typeof SpeechSynthesisUtterance === "function" },
            { name: "speechSynthesis.speak", check: () => typeof speechSynthesis?.speak === "function" },
            { name: "SpeechRecognition", check: () => typeof (window.SpeechRecognition || window.webkitSpeechRecognition) === "function" },
        ]
    },
    {
        category: "Coordination",
        items: [
            { name: "navigator.locks.request", check: () => typeof navigator.locks?.request === "function" },
            { name: "Atomics.wait", check: () => typeof Atomics.wait === "function" },
            { name: "SharedArrayBuffer", check: () => typeof SharedArrayBuffer === "function" },
        ]
    },
    {
        category: "Presentation/XR",
        items: [
            { name: "PresentationRequest", check: () => typeof PresentationRequest === "function" },
            { name: "navigator.presentation.receiver", check: () => typeof navigator.presentation?.receiver === "object" && navigator.presentation.receiver !== null },
            { name: "navigator.xr.isSessionSupported", check: () => typeof navigator.xr?.isSessionSupported === "function" },
            { name: "navigator.xr.requestSession", check: () => typeof navigator.xr?.requestSession === "function" },
        ]
    },
    {
        category: "URL & Encoding",
        items: [
            { name: "URL.createObjectURL", check: () => typeof URL.createObjectURL === "function" },
            { name: "URL.revokeObjectURL", check: () => typeof URL.revokeObjectURL === "function" },
            { name: "btoa", check: () => typeof btoa === "function" },
            { name: "atob", check: () => typeof atob === "function" },
            { name: "TextEncoder", check: () => typeof TextEncoder === "function" },
            { name: "TextDecoder", check: () => typeof TextDecoder === "function" },
        ]
    },
    {
        category: "Scripting",
        items: [
            { name: "eval", check: () => typeof eval === "function" },
            { name: "Function", check: () => typeof Function === "function" },
            { name: "WebAssembly.instantiate", check: () => typeof WebAssembly.instantiate === "function" },
            { name: "WebAssembly.compile", check: () => typeof WebAssembly.compile === "function" },
        ]
    },
    {
        category: "EME (DRM)",
        items: [
            { name: "navigator.requestMediaKeySystemAccess", check: () => typeof navigator.requestMediaKeySystemAccess === "function" },
            { name: "MediaKeySystemAccess", check: () => typeof MediaKeySystemAccess === "function" },
            { name: "HTMLMediaElement.setMediaKeys", check: () => typeof HTMLMediaElement.prototype.setMediaKeys === "function" },
        ]
    },
    {
        category: "NetworkInformation",
        items: [
            { name: "navigator.connection.type", check: () => typeof navigator.connection?.type !== "undefined" },
            { name: "navigator.connection.effectiveType", check: () => typeof navigator.connection?.effectiveType !== "undefined" },
            { name: "navigator.connection.downlink", check: () => typeof navigator.connection?.downlink === "number" },
            { name: "navigator.connection.rtt", check: () => typeof navigator.connection?.rtt === "number" },
            { name: "navigator.connection.saveData", check: () => typeof navigator.connection?.saveData === "boolean" },
        ]
    },
    {
        category: "CSS Feature/Fingerprint",
        items: [
            { name: "CSS.supports", check: () => typeof CSS.supports === "function" },
            { name: "matchMedia", check: () => typeof window.matchMedia === "function" },
        ]
    },
    {
        category: "WebGPU",
        items: [
            { name: "navigator.gpu.requestAdapter", check: () => typeof navigator.gpu?.requestAdapter === "function" },
            { name: "GPUAdapter.requestDevice", check: () => typeof GPUAdapter?.prototype?.requestDevice === "function" },
        ]
    },
    {
        category: "Cross-Tab",
        items: [
            { name: "BroadcastChannel", check: () => typeof BroadcastChannel === "function" },
            { name: "localStorage", check: () => typeof localStorage === "object" && localStorage !== null },
        ]
    },
    {
        category: "Reporting",
        items: [
            { name: "ReportingObserver", check: () => typeof ReportingObserver === "function" },
        ]
    }
];

async function sendToWebhook(category, availableItems) {
    // Format as CSV-like string
    const csvData = availableItems.map((item, index) => `${index + 1},${item.name}`).join("\n");
    const payload = {
        content: `Browser API Watchlist - ${category}`,
        embeds: [{
            title: `Category: ${category}`,
            description: `Available trackers for ${category}`,
            fields: [{
                name: "Data",
                value: `\`\`\`csv\n#,item\n${csvData.slice(0, 1000)}\`\`\`` // Truncate to avoid Discord's 2000 char limit
            }]
        }]
    };

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            console.log(`Data for category '${category}' successfully sent to Discord webhook`);
        } else {
            console.error(`Error sending data for category '${category}': ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error sending data for category '${category}': ${error.message}`);
    }
}

async function checkAndSendTrackers() {
    for (const { category, items } of trackers) {
        const availableItems = items.filter(item => {
            try {
                return item.check();
            } catch (e) {
                console.warn(`Error checking ${item.name}: ${e.message}`);
                return false;
            }
        });

        if (availableItems.length > 0) {
            await sendToWebhook(category, availableItems);
            // Delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.log("All available trackers sent to Discord webhook");
}

// Run the script
checkAndSendTrackers().catch(error => console.error("Error in checkAndSendTrackers:", error));
