import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './objects/dbo_LocalUserSelect.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';

export const dbo_LocalUserDeleteOneSchema: z.ZodType<Prisma.dbo_LocalUserDeleteArgs> = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserDeleteArgs>;

export const dbo_LocalUserDeleteOneZodSchema = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict();