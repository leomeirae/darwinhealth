import * as sdk from "node-appwrite";

// Verificações de variáveis de ambiente obrigatórias
if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
  throw new Error("NEXT_PUBLIC_APPWRITE_ENDPOINT é obrigatório");
}

if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_APPWRITE_PROJECT_ID é obrigatório");
}

if (!process.env.NEXT_PUBLIC_APPWRITE_API_KEY) {
  throw new Error("NEXT_PUBLIC_APPWRITE_API_KEY é obrigatório");
}

// Exportando as variáveis de ambiente
export const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
export const API_KEY = process.env.NEXT_PUBLIC_APPWRITE_API_KEY;
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const PATIENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_PATIENT_COLLECTION_ID;
export const DOCTOR_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DOCTOR_COLLECTION_ID;
export const APPOINTMENT_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

// Configuração do cliente Appwrite
const client = new sdk.Client();

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

// Exportando os serviços
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
