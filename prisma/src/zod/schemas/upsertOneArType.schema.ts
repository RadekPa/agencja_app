import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './objects/ArTypeSelect.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';
import { ArTypeCreateInputObjectSchema as ArTypeCreateInputObjectSchema } from './objects/ArTypeCreateInput.schema';
import { ArTypeUncheckedCreateInputObjectSchema as ArTypeUncheckedCreateInputObjectSchema } from './objects/ArTypeUncheckedCreateInput.schema';
import { ArTypeUpdateInputObjectSchema as ArTypeUpdateInputObjectSchema } from './objects/ArTypeUpdateInput.schema';
import { ArTypeUncheckedUpdateInputObjectSchema as ArTypeUncheckedUpdateInputObjectSchema } from './objects/ArTypeUncheckedUpdateInput.schema';

export const ArTypeUpsertOneSchema: z.ZodType<Prisma.ArTypeUpsertArgs> = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema, create: z.union([ ArTypeCreateInputObjectSchema, ArTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ArTypeUpdateInputObjectSchema, ArTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArTypeUpsertArgs>;

export const ArTypeUpsertOneZodSchema = z.object({ select: ArTypeSelectObjectSchema.optional(),  where: ArTypeWhereUniqueInputObjectSchema, create: z.union([ ArTypeCreateInputObjectSchema, ArTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ArTypeUpdateInputObjectSchema, ArTypeUncheckedUpdateInputObjectSchema ]) }).strict();