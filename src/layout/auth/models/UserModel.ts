export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  role_code: string;
  avatar: string;
  status: boolean;
  access_token?: string;
}
