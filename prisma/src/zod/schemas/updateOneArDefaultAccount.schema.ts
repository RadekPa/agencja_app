import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountSelectObjectSchema as ArDefaultAccountSelectObjectSchema } from './objects/ArDefaultAccountSelect.schema';
import { ArDefaultAccountUpdateInputObjectSchema as ArDefaultAccountUpdateInputObjectSchema } from './objects/ArDefaultAccountUpdateInput.schema';
import { ArDefaultAccountUncheckedUpdateInputObjectSchema as ArDefaultAccountUncheckedUpdateInputObjectSchema } from './objects/ArDefaultAccountUncheckedUpdateInput.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';

export const ArDefaultAccountUpdateOneSchema: z.ZodType<Prisma.ArDefaultAccountUpdateArgs> = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  data: z.union([ArDefaultAccountUpdateInputObjectSchema, ArDefaultAccountUncheckedUpdateInputObjectSchema]), where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountUpdateArgs>;

export const ArDefaultAccountUpdateOneZodSchema = z.object({ select: ArDefaultAccountSelectObjectSchema.optional(),  data: z.union([ArDefaultAccountUpdateInputObjectSchema, ArDefaultAccountUncheckedUpdateInputObjectSchema]), where: ArDefaultAccountWhereUniqueInputObjectSchema }).strict();