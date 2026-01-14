import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './objects/dbo_LocalUserSelect.schema';
import { dbo_LocalUserUpdateInputObjectSchema as dbo_LocalUserUpdateInputObjectSchema } from './objects/dbo_LocalUserUpdateInput.schema';
import { dbo_LocalUserUncheckedUpdateInputObjectSchema as dbo_LocalUserUncheckedUpdateInputObjectSchema } from './objects/dbo_LocalUserUncheckedUpdateInput.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';

export const dbo_LocalUserUpdateOneSchema: z.ZodType<Prisma.dbo_LocalUserUpdateArgs> = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  data: z.union([dbo_LocalUserUpdateInputObjectSchema, dbo_LocalUserUncheckedUpdateInputObjectSchema]), where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserUpdateArgs>;

export const dbo_LocalUserUpdateOneZodSchema = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  data: z.union([dbo_LocalUserUpdateInputObjectSchema, dbo_LocalUserUncheckedUpdateInputObjectSchema]), where: dbo_LocalUserWhereUniqueInputObjectSchema }).strict();