export interface Admin {
	id: number;
	uid: string;
	name: string | null;
	nickname: string | null;
	image: string | null;
	provider: string;
	allow_password_change: boolean;
}
