import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './objects/tblMailingTemplatesSelect.schema';
import { tblMailingTemplatesWhereUniqueInputObjectSchema as tblMailingTemplatesWhereUniqueInputObjectSchema } from './objects/tblMailingTemplatesWhereUniqueInput.schema';

export const tblMailingTemplatesFindUniqueSchema: z.ZodType<Prisma.tblMailingTemplatesFindUniqueArgs> = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesFindUniqueArgs>;

export const tblMailingTemplatesFindUniqueZodSchema = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict();