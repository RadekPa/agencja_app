import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './objects/dictAgrTemplatesSelect.schema';
import { dictAgrTemplatesUpdateInputObjectSchema as dictAgrTemplatesUpdateInputObjectSchema } from './objects/dictAgrTemplatesUpdateInput.schema';
import { dictAgrTemplatesUncheckedUpdateInputObjectSchema as dictAgrTemplatesUncheckedUpdateInputObjectSchema } from './objects/dictAgrTemplatesUncheckedUpdateInput.schema';
import { dictAgrTemplatesWhereUniqueInputObjectSchema as dictAgrTemplatesWhereUniqueInputObjectSchema } from './objects/dictAgrTemplatesWhereUniqueInput.schema';

export const dictAgrTemplatesUpdateOneSchema: z.ZodType<Prisma.dictAgrTemplatesUpdateArgs> = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  data: z.union([dictAgrTemplatesUpdateInputObjectSchema, dictAgrTemplatesUncheckedUpdateInputObjectSchema]), where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesUpdateArgs>;

export const dictAgrTemplatesUpdateOneZodSchema = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  data: z.union([dictAgrTemplatesUpdateInputObjectSchema, dictAgrTemplatesUncheckedUpdateInputObjectSchema]), where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict();