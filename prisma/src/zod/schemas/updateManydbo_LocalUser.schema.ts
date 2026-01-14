import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserUpdateManyMutationInputObjectSchema as dbo_LocalUserUpdateManyMutationInputObjectSchema } from './objects/dbo_LocalUserUpdateManyMutationInput.schema';
import { dbo_LocalUserWhereInputObjectSchema as dbo_LocalUserWhereInputObjectSchema } from './objects/dbo_LocalUserWhereInput.schema';

export const dbo_LocalUserUpdateManySchema: z.ZodType<Prisma.dbo_LocalUserUpdateManyArgs> = z.object({ data: dbo_LocalUserUpdateManyMutationInputObjectSchema, where: dbo_LocalUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserUpdateManyArgs>;

export const dbo_LocalUserUpdateManyZodSchema = z.object({ data: dbo_LocalUserUpdateManyMutationInputObjectSchema, where: dbo_LocalUserWhereInputObjectSchema.optional() }).strict();