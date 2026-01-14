import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './objects/LocalUserSelect.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';
import { LocalUserCreateInputObjectSchema as LocalUserCreateInputObjectSchema } from './objects/LocalUserCreateInput.schema';
import { LocalUserUncheckedCreateInputObjectSchema as LocalUserUncheckedCreateInputObjectSchema } from './objects/LocalUserUncheckedCreateInput.schema';
import { LocalUserUpdateInputObjectSchema as LocalUserUpdateInputObjectSchema } from './objects/LocalUserUpdateInput.schema';
import { LocalUserUncheckedUpdateInputObjectSchema as LocalUserUncheckedUpdateInputObjectSchema } from './objects/LocalUserUncheckedUpdateInput.schema';

export const LocalUserUpsertOneSchema: z.ZodType<Prisma.LocalUserUpsertArgs> = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema, create: z.union([ LocalUserCreateInputObjectSchema, LocalUserUncheckedCreateInputObjectSchema ]), update: z.union([ LocalUserUpdateInputObjectSchema, LocalUserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LocalUserUpsertArgs>;

export const LocalUserUpsertOneZodSchema = z.object({ select: LocalUserSelectObjectSchema.optional(),  where: LocalUserWhereUniqueInputObjectSchema, create: z.union([ LocalUserCreateInputObjectSchema, LocalUserUncheckedCreateInputObjectSchema ]), update: z.union([ LocalUserUpdateInputObjectSchema, LocalUserUncheckedUpdateInputObjectSchema ]) }).strict();