import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './objects/ArTypeSelect.schema';
import { ArTypeUpdateInputObjectSchema as ArTypeUpdateInputObjectSchema } from './objects/ArTypeUpdateInput.schema';
import { ArTypeUncheckedUpdateInputObjectSchema as ArTypeUncheckedUpdateInputObjectSchema } from './objects/ArTypeUncheckedUpdateInput.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';

export const ArTypeUpdateOneSchema: z.ZodType<Prisma.ArTypeUpdateArgs> = z.object({ select: ArTypeSelectObjectSchema.optional(),  data: z.union([ArTypeUpdateInputObjectSchema, ArTypeUncheckedUpdateInputObjectSchema]), where: ArTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTypeUpdateArgs>;

export const ArTypeUpdateOneZodSchema = z.object({ select: ArTypeSelectObjectSchema.optional(),  data: z.union([ArTypeUpdateInputObjectSchema, ArTypeUncheckedUpdateInputObjectSchema]), where: ArTypeWhereUniqueInputObjectSchema }).strict();