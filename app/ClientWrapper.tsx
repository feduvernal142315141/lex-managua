"use client";

import { useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Elimina atributos agregados por extensiones del navegador
    document.body.removeAttribute("cz-shortcut-listen");
  }, []);

  return <>{children}</>;
}
