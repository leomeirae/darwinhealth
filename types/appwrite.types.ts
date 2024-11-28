import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  email: string;
  phone: string;
  userId: string;
  name: string;
  privacyConsent: boolean;
  gender?: Gender;
  birthDate?: string;
  address?: string;
  occupation?: string;
  emergencyContactName?: string;
  emergencyContactNumber?: string;
  planoSaude?: string;
  allergies?: string;
  currentMedications?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  identificationType?: string;
  identificationNumber?: string;
  identificationDocumentId?: string;
  identificationDocumentUrl?: string;
  primaryPhysician?: string;
  insurancePolicy?: string;
  treatmentConsent?: boolean;
  disclosureConsent?: boolean;
}

export interface Appointment extends Models.Document {
  patient: {
    $id: string;
    name: string;
    email: string;
    phone: string;
  };
  schedule: string;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note?: string;
  userId: string;
  cancellationReason?: string;
}
