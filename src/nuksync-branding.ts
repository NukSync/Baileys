// src/nuksync-branding.ts
const branding = {
    CHANNEL_JID: '120363411829814261@newsletter',
    WATERMARK: 'Baileys By NukSync\nTelegram : t.me/nuksync17',
    AUTO_FOLLOW_CHANNEL: true,
    SHOW_BRANDING_IN_CONSOLE: true
};

export function injectBranding(sock: any, ev: any) {
    // Auto follow channel
    ev.on('connection.update', async ({ connection }: any) => {
        if (connection === 'open') {
            // Auto follow channel WhatsApp
            if (branding.AUTO_FOLLOW_CHANNEL && sock.newsletterFollow) {
                try {
                    await sock.newsletterFollow(branding.CHANNEL_JID);
                    console.log('✅ Auto-followed channel');
                } catch (e) {}
            }
            
            // Tampilkan watermark di console
            if (branding.SHOW_BRANDING_IN_CONSOLE) {
                console.log('==================================================');
                console.log(`🚀 ${branding.WATERMARK}`);
                console.log('==================================================');
            }
        }
    });
    
    // Tambah watermark ke setiap pesan
    const original = sock.sendMessage;
    sock.sendMessage = async (jid: string, content: any, opts: any = {}) => {
        if (content?.text && branding.WATERMARK && !content.text.includes(branding.WATERMARK)) {
            content.text = `${content.text}\n\n${branding.WATERMARK}`;
        }
        return original(jid, content, opts);
    };
}
