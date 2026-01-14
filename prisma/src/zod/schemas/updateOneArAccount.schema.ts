import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountSelectObjectSchema as ArAccountSelectObjectSchema } from './objects/ArAccountSelect.schema';
import { ArAccountUpdateInputObjectSchema as ArAccountUpdateInputObjectSchema } from './objects/ArAccountUpdateInput.schema';
import { ArAccountUncheckedUpdateInputObjectSchema as ArAccountUncheckedUpdateInputObjectSchema } from './objects/ArAccountUncheckedUpdateInput.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';

export const ArAccountUpdateOneSchema: z.ZodType<Prisma.ArAccountUpdateArgs> = z.object({ select: ArAccountSelectObjectSchema.optional(),  data: z.union([ArAccountUpdateInputObjectSchema, ArAccountUncheckedUpdateInputObjectSchema]), where: ArAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArAccountUpdateArgs>;

export const ArAccountUpdateOneZodSchema = z.object({ select: ArAccountSelectObjectSchema.optional(),  data: z.union([ArAccountUpdateInputObjectSchema, ArAccountUncheckedUpdateInputObjectSchema]), where: ArAccountWhereUniqueInputObjectSchema }).strict();