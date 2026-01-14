import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserWhereInputObjectSchema as LocalUserWhereInputObjectSchema } from './objects/LocalUserWhereInput.schema';

export const LocalUserDeleteManySchema: z.ZodType<Prisma.LocalUserDeleteManyArgs> = z.object({ where: LocalUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocalUserDeleteManyArgs>;

export const LocalUserDeleteManyZodSchema = z.object({ where: LocalUserWhereInputObjectSchema.optional() }).strict();