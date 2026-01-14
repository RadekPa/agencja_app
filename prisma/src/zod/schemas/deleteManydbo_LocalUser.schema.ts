import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserWhereInputObjectSchema as dbo_LocalUserWhereInputObjectSchema } from './objects/dbo_LocalUserWhereInput.schema';

export const dbo_LocalUserDeleteManySchema: z.ZodType<Prisma.dbo_LocalUserDeleteManyArgs> = z.object({ where: dbo_LocalUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserDeleteManyArgs>;

export const dbo_LocalUserDeleteManyZodSchema = z.object({ where: dbo_LocalUserWhereInputObjectSchema.optional() }).strict();