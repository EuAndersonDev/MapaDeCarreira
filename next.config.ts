import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Permitindo acesso a origens de desenvolvimento específicas
   * Para desbloquear erro CORS do Next.js HMR em desenvolvimento
   */
  allowedDevOrigins: ['192.168.18.201'],
};

export default nextConfig;
