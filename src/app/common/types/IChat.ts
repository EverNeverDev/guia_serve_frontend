export default interface IChat {
  id: string;
  name: string;
  timeStamp?: Date;
  recentText: string;
  photo?: string;
  usersIds?: string[];
  countNotReadMessages: number;
  lastSenderId?: string;
}
