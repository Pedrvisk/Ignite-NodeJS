import { Replace } from '../../helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
	recipientId: string;
	content: Content;
	category: string;
	readAt?: Date | null;
	createdAt: Date;
}

export class Notification {
	private _id = randomUUID();
	private props: NotificationProps;

	constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date()
		}
	}

	public get id() {
		return this._id;
	}

	// RecipientId
	public set recipientId(recipientId: string) {
		this.props.recipientId = recipientId;
	}

	public get recipientId(): string {
		return this.props.recipientId;
	}

	// Content
	public set content(content: Content) {
		this.props.content = content;
	}

	public get content(): Content {
		return this.props.content;
	}

	// Category
	public set category(category: string) {
		this.props.category = category;
	}

	public get category(): string {
		return this.props.category;
	}

	// ReadAt
	public set readAt(readAt: Date | null | undefined) {
		this.props.readAt = readAt;
	}

	public get readAt(): Date | null | undefined {
		return this.props.readAt;
	}

	// CreatedAt
	public get createdAt(): Date {
		return this.props.createdAt;
	}
}