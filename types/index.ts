export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Gender = "male" | "female" | "other";
export type Status = "pending" | "scheduled" | "cancelled";

export interface CreateUserParams {
  email: string;
  phone: string;
  name: string;
}

export interface User {
  $id: string;
  email: string;
  phone: string;
  name: string;
}

export interface RegisterUserParams {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  identificationDocument?: FormData;
}

export interface CreateAppointmentParams {
  userId: string;
  patient: string;
  primaryPhysician: string;
  schedule: Date;
  reason: string;
  status: Status;
  note?: string;
}

export interface UpdateAppointmentParams {
  userId: string;
  appointmentId: string;
  timeZone: string;
  appointment: {
    primaryPhysician: string;
    schedule: Date;
    status: Status;
    cancellationReason?: string;
  };
  type: "create" | "schedule" | "cancel";
}
