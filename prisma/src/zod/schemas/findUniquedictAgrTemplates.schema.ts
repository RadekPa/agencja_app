import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './objects/dictAgrTemplatesSelect.schema';
import { dictAgrTemplatesWhereUniqueInputObjectSchema as dictAgrTemplatesWhereUniqueInputObjectSchema } from './objects/dictAgrTemplatesWhereUniqueInput.schema';

export const dictAgrTemplatesFindUniqueSchema: z.ZodType<Prisma.dictAgrTemplatesFindUniqueArgs> = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesFindUniqueArgs>;

export const dictAgrTemplatesFindUniqueZodSchema = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict();