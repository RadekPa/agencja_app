import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './objects/tblMailingTemplatesSelect.schema';
import { tblMailingTemplatesWhereUniqueInputObjectSchema as tblMailingTemplatesWhereUniqueInputObjectSchema } from './objects/tblMailingTemplatesWhereUniqueInput.schema';

export const tblMailingTemplatesFindUniqueOrThrowSchema: z.ZodType<Prisma.tblMailingTemplatesFindUniqueOrThrowArgs> = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesFindUniqueOrThrowArgs>;

export const tblMailingTemplatesFindUniqueOrThrowZodSchema = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict();