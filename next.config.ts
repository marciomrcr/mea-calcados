import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Otimizações para filesystem lento
    optimizePackageImports: ["lucide-react", "@headlessui/react"],
  },
  turbopack: {
    // Configurações específicas para Turbopack
    rules: {},
  },
  // Otimizações gerais
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Suprimir avisos de desenvolvimento
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // Configurações para reduzir impacto do filesystem lento
  distDir: ".next",
  cleanDistDir: true,
};

export default nextConfig;
