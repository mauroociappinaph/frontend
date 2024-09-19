// Declaraciones globales para el objeto window
declare global {
    interface Window {
        GA_INITIALIZED: boolean;
        dataLayer: Record<string, any>[];
    }
}

export const initGA = (trackingID: string) => {
    // Verifica si el entorno es del cliente y si GA ya está inicializado
    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
        window.GA_INITIALIZED = true;
        window.dataLayer = window.dataLayer || [];

        // Función gtag para enviar eventos a Google Analytics
        const gtag = (...args: any[]) => {
            window.dataLayer.push(args);
        };

        gtag('js', new Date());
        gtag('config', trackingID);
    }
};