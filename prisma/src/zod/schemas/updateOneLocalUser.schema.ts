import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserSelectObjectSchema as LocalUserSelectObjectSchema } from './objects/LocalUserSelect.schema';
import { LocalUserUpdateInputObjectSchema as LocalUserUpdateInputObjectSchema } from './objects/LocalUserUpdateInput.schema';
import { LocalUserUncheckedUpdateInputObjectSchema as LocalUserUncheckedUpdateInputObjectSchema } from './objects/LocalUserUncheckedUpdateInput.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';

export const LocalUserUpdateOneSchema: z.ZodType<Prisma.LocalUserUpdateArgs> = z.object({ select: LocalUserSelectObjectSchema.optional(),  data: z.union([LocalUserUpdateInputObjectSchema, LocalUserUncheckedUpdateInputObjectSchema]), where: LocalUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocalUserUpdateArgs>;

export const LocalUserUpdateOneZodSchema = z.object({ select: LocalUserSelectObjectSchema.optional(),  data: z.union([LocalUserUpdateInputObjectSchema, LocalUserUncheckedUpdateInputObjectSchema]), where: LocalUserWhereUniqueInputObjectSchema }).strict();