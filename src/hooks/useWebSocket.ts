import { useEffect, useRef, useState, useCallback } from "react";

interface WebSocketMessage {
    e: string; // Event type
    E: number; // Event time
    s: string; // Symbol
    p: string; // Price
    q: string; // Quantity
    // ... other fields
}

interface UseWebSocketResult {
    data: WebSocketMessage | null;
    isConnected: boolean;
}

export const useWebSocket = (
    url: string | undefined,
    enabled: boolean
): UseWebSocketResult => {
    const [data, setData] = useState<WebSocketMessage | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const lastUpdateRef = useRef<number>(0);

    // Throttle updates to prevent UI freezing (max 1 update per second)
    const THROTTLE_MS = 1000;

    const connect = useCallback(() => {
        if (!url || !enabled) return;

        try {
            const ws = new WebSocket(url);

            ws.onopen = () => {
                console.log(`🟢 Connected to WebSocket: ${url}`);
                setIsConnected(true);
            };

            ws.onmessage = (event) => {
                try {
                    const parsedData = JSON.parse(event.data);

                    // Throttling logic
                    const now = Date.now();
                    if (now - lastUpdateRef.current > THROTTLE_MS) {
                        setData(parsedData);
                        lastUpdateRef.current = now;
                    }
                } catch (err) {
                    console.error("Failed to parse WebSocket message:", err);
                }
            };

            ws.onclose = () => {
                console.log("🔴 WebSocket disconnected");
                setIsConnected(false);
                // Auto-reconnect after 3 seconds
                reconnectTimeoutRef.current = setTimeout(() => {
                    console.log("🔄 Attempting to reconnect...");
                    connect();
                }, 3000);
            };

            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
                ws.close();
            };

            wsRef.current = ws;
        } catch (error) {
            console.error("Failed to create WebSocket connection:", error);
        }
    }, [url, enabled]);

    useEffect(() => {
        if (enabled && url) {
            connect();
        }

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
        };
    }, [url, enabled, connect]);

    return { data, isConnected };
};
