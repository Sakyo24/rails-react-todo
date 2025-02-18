export interface User {
	id: number;
	last_name: string;
	first_name: string;
	last_kana_name: string;
	first_kana_name: string;
	display_name: string;
	email: string;
	phone: string;
	zip_code: string;
	prefecture_code: string;
	address1: string;
	address2: string | null;
	gender: number;
	birthday: Date;
	status: number;
	email_verified_at: Date;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date | null;
}
