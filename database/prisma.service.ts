import { PrismaClient, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../src/logger/logger.interface';
import { TYPES } from '../src/types';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[Prisma Service] DB Connected!');
		} catch (error) {
			if (error instanceof Error) {
				this.logger.error('[Prisma Service] DB connection faild: ' + error.message);
			} else {
				this.logger.error(error);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
		this.logger.log('[Prisma Service] DB Disconnected!');
	}
}
