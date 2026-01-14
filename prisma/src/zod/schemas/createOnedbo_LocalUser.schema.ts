import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './objects/dbo_LocalUserSelect.schema';
import { dbo_LocalUserCreateInputObjectSchema as dbo_LocalUserCreateInputObjectSchema } from './objects/dbo_LocalUserCreateInput.schema';
import { dbo_LocalUserUncheckedCreateInputObjectSchema as dbo_LocalUserUncheckedCreateInputObjectSchema } from './objects/dbo_LocalUserUncheckedCreateInput.schema';

export const dbo_LocalUserCreateOneSchema: z.ZodType<Prisma.dbo_LocalUserCreateArgs> = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  data: z.union([dbo_LocalUserCreateInputObjectSchema, dbo_LocalUserUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserCreateArgs>;

export const dbo_LocalUserCreateOneZodSchema = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  data: z.union([dbo_LocalUserCreateInputObjectSchema, dbo_LocalUserUncheckedCreateInputObjectSchema]) }).strict();