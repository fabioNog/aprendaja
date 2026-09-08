// lib/api/contact.ts
import { ContactFormData, ApiResponse } from "@/types";

/**
 * Camada de abstração de API.
 * Atualmente simula um envio assíncrono.
 * Futuramente fará POST para a API NestJS: `${process.env.NEXT_PUBLIC_API_URL}/contact`
 */
export async function sendContactForm(
  data: ContactFormData
): Promise<ApiResponse> {
  // Simulação de delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Validação simples do lado do cliente / contrato de API
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: "Preencha todos os campos obrigatórios.",
    };
  }

  // ESTRUTURA PARA INTEGRAÇÃO FUTURA COM NESTJS:
  /*
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
  */

  return {
    success: true,
    message: "Mensagem enviada com sucesso! Em breve entrarei em contato.",
  };
}