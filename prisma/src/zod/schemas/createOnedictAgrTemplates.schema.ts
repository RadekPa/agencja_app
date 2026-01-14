import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './objects/dictAgrTemplatesSelect.schema';
import { dictAgrTemplatesCreateInputObjectSchema as dictAgrTemplatesCreateInputObjectSchema } from './objects/dictAgrTemplatesCreateInput.schema';
import { dictAgrTemplatesUncheckedCreateInputObjectSchema as dictAgrTemplatesUncheckedCreateInputObjectSchema } from './objects/dictAgrTemplatesUncheckedCreateInput.schema';

export const dictAgrTemplatesCreateOneSchema: z.ZodType<Prisma.dictAgrTemplatesCreateArgs> = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  data: z.union([dictAgrTemplatesCreateInputObjectSchema, dictAgrTemplatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesCreateArgs>;

export const dictAgrTemplatesCreateOneZodSchema = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  data: z.union([dictAgrTemplatesCreateInputObjectSchema, dictAgrTemplatesUncheckedCreateInputObjectSchema]) }).strict();