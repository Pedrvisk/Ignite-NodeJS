import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
	abstract create(notitifcation: Notification): Promise<void>;
}