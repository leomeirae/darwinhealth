export interface CreateUserParams {
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
