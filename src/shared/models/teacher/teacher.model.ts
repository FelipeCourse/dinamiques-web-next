export interface TeacherModel {
  id: string;
  userId: string;
  name: string;
  avatarImageUrl: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
