import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './objects/ArVatSelect.schema';
import { ArVatCreateInputObjectSchema as ArVatCreateInputObjectSchema } from './objects/ArVatCreateInput.schema';
import { ArVatUncheckedCreateInputObjectSchema as ArVatUncheckedCreateInputObjectSchema } from './objects/ArVatUncheckedCreateInput.schema';

export const ArVatCreateOneSchema: z.ZodType<Prisma.ArVatCreateArgs> = z.object({ select: ArVatSelectObjectSchema.optional(),  data: z.union([ArVatCreateInputObjectSchema, ArVatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArVatCreateArgs>;

export const ArVatCreateOneZodSchema = z.object({ select: ArVatSelectObjectSchema.optional(),  data: z.union([ArVatCreateInputObjectSchema, ArVatUncheckedCreateInputObjectSchema]) }).strict();