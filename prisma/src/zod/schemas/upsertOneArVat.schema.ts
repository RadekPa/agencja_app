import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './objects/ArVatSelect.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';
import { ArVatCreateInputObjectSchema as ArVatCreateInputObjectSchema } from './objects/ArVatCreateInput.schema';
import { ArVatUncheckedCreateInputObjectSchema as ArVatUncheckedCreateInputObjectSchema } from './objects/ArVatUncheckedCreateInput.schema';
import { ArVatUpdateInputObjectSchema as ArVatUpdateInputObjectSchema } from './objects/ArVatUpdateInput.schema';
import { ArVatUncheckedUpdateInputObjectSchema as ArVatUncheckedUpdateInputObjectSchema } from './objects/ArVatUncheckedUpdateInput.schema';

export const ArVatUpsertOneSchema: z.ZodType<Prisma.ArVatUpsertArgs> = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema, create: z.union([ ArVatCreateInputObjectSchema, ArVatUncheckedCreateInputObjectSchema ]), update: z.union([ ArVatUpdateInputObjectSchema, ArVatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArVatUpsertArgs>;

export const ArVatUpsertOneZodSchema = z.object({ select: ArVatSelectObjectSchema.optional(),  where: ArVatWhereUniqueInputObjectSchema, create: z.union([ ArVatCreateInputObjectSchema, ArVatUncheckedCreateInputObjectSchema ]), update: z.union([ ArVatUpdateInputObjectSchema, ArVatUncheckedUpdateInputObjectSchema ]) }).strict();