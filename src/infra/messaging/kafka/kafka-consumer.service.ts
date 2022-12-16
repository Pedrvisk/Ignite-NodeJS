import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KakfaConsumerService extends ServerKafka implements OnModuleDestroy {
	constructor() {
		super({
			client: {
				clientId: 'notifications',
				brokers: ['tolerant-dingo-8644-us1-kafka.upstash.io:9092'],
				sasl: {
					mechanism: 'scram-sha-256',
					username: 'dG9sZXJhbnQtZGluZ28tODY0NCQU2e4UlrNmQsosJ-e6HXdVEsLMAZYAKLAI4OY',
					password: 'sfBJCFj6GPab1698Cr_AHjmxBrU043ieHx06FixOfb8OPCF61IqIDz30txF3Fpdbj9R9KA==',
				},
				ssl: true
			}
		});
	}

	async onModuleDestroy() {
		await this.close();
	}
}