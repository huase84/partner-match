// 用户
export type user = {
  id: number;
  username: string;
  userAccount: string;
  avatarUrl?: string;
  gender: number;
  phone: string;
  email: string;
  userStatus: number;
  userRole: number;
  planetCode: string;
  tags: string[];
  createTime: Date;
}

export type LoginInfo = {
  userAccount: string,
  userPassword: string
}