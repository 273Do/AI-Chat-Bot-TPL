interface UserType {
  uid: string;
  displayName: string;
  photURL: string;
  email: string;
}

interface MessageType {
  uuid: string;
  user: UserType | null;
  AIModel: string | null;
  message: string;
  timestamp: string;
}

export type { UserType, MessageType };
