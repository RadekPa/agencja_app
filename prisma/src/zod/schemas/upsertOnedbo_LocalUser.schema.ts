import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserSelectObjectSchema as dbo_LocalUserSelectObjectSchema } from './objects/dbo_LocalUserSelect.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';
import { dbo_LocalUserCreateInputObjectSchema as dbo_LocalUserCreateInputObjectSchema } from './objects/dbo_LocalUserCreateInput.schema';
import { dbo_LocalUserUncheckedCreateInputObjectSchema as dbo_LocalUserUncheckedCreateInputObjectSchema } from './objects/dbo_LocalUserUncheckedCreateInput.schema';
import { dbo_LocalUserUpdateInputObjectSchema as dbo_LocalUserUpdateInputObjectSchema } from './objects/dbo_LocalUserUpdateInput.schema';
import { dbo_LocalUserUncheckedUpdateInputObjectSchema as dbo_LocalUserUncheckedUpdateInputObjectSchema } from './objects/dbo_LocalUserUncheckedUpdateInput.schema';

export const dbo_LocalUserUpsertOneSchema: z.ZodType<Prisma.dbo_LocalUserUpsertArgs> = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema, create: z.union([ dbo_LocalUserCreateInputObjectSchema, dbo_LocalUserUncheckedCreateInputObjectSchema ]), update: z.union([ dbo_LocalUserUpdateInputObjectSchema, dbo_LocalUserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserUpsertArgs>;

export const dbo_LocalUserUpsertOneZodSchema = z.object({ select: dbo_LocalUserSelectObjectSchema.optional(),  where: dbo_LocalUserWhereUniqueInputObjectSchema, create: z.union([ dbo_LocalUserCreateInputObjectSchema, dbo_LocalUserUncheckedCreateInputObjectSchema ]), update: z.union([ dbo_LocalUserUpdateInputObjectSchema, dbo_LocalUserUncheckedUpdateInputObjectSchema ]) }).strict();