import makeWASocket from './Socket/index'
import { injectBranding } from './nuksync-branding';

export * from './WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>

// Override untuk inject branding NukSync
const originalMakeWASocket = makeWASocket;
export const makeWASocketWithBranding = (config: any) => {
    const sock = originalMakeWASocket(config);
    injectBranding(sock, sock.ev);
    return sock;
};

export { makeWASocketWithBranding as makeWASocket }
export default makeWASocketWithBranding;
