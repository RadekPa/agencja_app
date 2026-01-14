import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './objects/ArVatSelect.schema';
import { ArVatUpdateInputObjectSchema as ArVatUpdateInputObjectSchema } from './objects/ArVatUpdateInput.schema';
import { ArVatUncheckedUpdateInputObjectSchema as ArVatUncheckedUpdateInputObjectSchema } from './objects/ArVatUncheckedUpdateInput.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';

export const ArVatUpdateOneSchema: z.ZodType<Prisma.ArVatUpdateArgs> = z.object({ select: ArVatSelectObjectSchema.optional(),  data: z.union([ArVatUpdateInputObjectSchema, ArVatUncheckedUpdateInputObjectSchema]), where: ArVatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArVatUpdateArgs>;

export const ArVatUpdateOneZodSchema = z.object({ select: ArVatSelectObjectSchema.optional(),  data: z.union([ArVatUpdateInputObjectSchema, ArVatUncheckedUpdateInputObjectSchema]), where: ArVatWhereUniqueInputObjectSchema }).strict();