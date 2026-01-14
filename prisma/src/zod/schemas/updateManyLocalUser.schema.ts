import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserUpdateManyMutationInputObjectSchema as LocalUserUpdateManyMutationInputObjectSchema } from './objects/LocalUserUpdateManyMutationInput.schema';
import { LocalUserWhereInputObjectSchema as LocalUserWhereInputObjectSchema } from './objects/LocalUserWhereInput.schema';

export const LocalUserUpdateManySchema: z.ZodType<Prisma.LocalUserUpdateManyArgs> = z.object({ data: LocalUserUpdateManyMutationInputObjectSchema, where: LocalUserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocalUserUpdateManyArgs>;

export const LocalUserUpdateManyZodSchema = z.object({ data: LocalUserUpdateManyMutationInputObjectSchema, where: LocalUserWhereInputObjectSchema.optional() }).strict();