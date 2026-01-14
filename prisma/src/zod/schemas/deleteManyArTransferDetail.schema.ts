import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailWhereInputObjectSchema as ArTransferDetailWhereInputObjectSchema } from './objects/ArTransferDetailWhereInput.schema';

export const ArTransferDetailDeleteManySchema: z.ZodType<Prisma.ArTransferDetailDeleteManyArgs> = z.object({ where: ArTransferDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailDeleteManyArgs>;

export const ArTransferDetailDeleteManyZodSchema = z.object({ where: ArTransferDetailWhereInputObjectSchema.optional() }).strict();