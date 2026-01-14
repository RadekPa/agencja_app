import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './objects/dictAgrTemplatesSelect.schema';
import { dictAgrTemplatesWhereUniqueInputObjectSchema as dictAgrTemplatesWhereUniqueInputObjectSchema } from './objects/dictAgrTemplatesWhereUniqueInput.schema';

export const dictAgrTemplatesDeleteOneSchema: z.ZodType<Prisma.dictAgrTemplatesDeleteArgs> = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesDeleteArgs>;

export const dictAgrTemplatesDeleteOneZodSchema = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema }).strict();