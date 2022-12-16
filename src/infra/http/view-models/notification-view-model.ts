import { Notification } from '@application/entities/notification';

export class NotificiationViewModel {
	static ToHTTP(notification: Notification) {
		return {
			id: notification.id,
			content: notification.content.value,
			category: notification.category,
			recipientId: notification.recipientId
		}
	}
}