import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeSelectObjectSchema as ArTypeSelectObjectSchema } from './objects/ArTypeSelect.schema';
import { ArTypeCreateInputObjectSchema as ArTypeCreateInputObjectSchema } from './objects/ArTypeCreateInput.schema';
import { ArTypeUncheckedCreateInputObjectSchema as ArTypeUncheckedCreateInputObjectSchema } from './objects/ArTypeUncheckedCreateInput.schema';

export const ArTypeCreateOneSchema: z.ZodType<Prisma.ArTypeCreateArgs> = z.object({ select: ArTypeSelectObjectSchema.optional(),  data: z.union([ArTypeCreateInputObjectSchema, ArTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArTypeCreateArgs>;

export const ArTypeCreateOneZodSchema = z.object({ select: ArTypeSelectObjectSchema.optional(),  data: z.union([ArTypeCreateInputObjectSchema, ArTypeUncheckedCreateInputObjectSchema]) }).strict();