import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './objects/tblMailingTemplatesSelect.schema';
import { tblMailingTemplatesUpdateInputObjectSchema as tblMailingTemplatesUpdateInputObjectSchema } from './objects/tblMailingTemplatesUpdateInput.schema';
import { tblMailingTemplatesUncheckedUpdateInputObjectSchema as tblMailingTemplatesUncheckedUpdateInputObjectSchema } from './objects/tblMailingTemplatesUncheckedUpdateInput.schema';
import { tblMailingTemplatesWhereUniqueInputObjectSchema as tblMailingTemplatesWhereUniqueInputObjectSchema } from './objects/tblMailingTemplatesWhereUniqueInput.schema';

export const tblMailingTemplatesUpdateOneSchema: z.ZodType<Prisma.tblMailingTemplatesUpdateArgs> = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  data: z.union([tblMailingTemplatesUpdateInputObjectSchema, tblMailingTemplatesUncheckedUpdateInputObjectSchema]), where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesUpdateArgs>;

export const tblMailingTemplatesUpdateOneZodSchema = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  data: z.union([tblMailingTemplatesUpdateInputObjectSchema, tblMailingTemplatesUncheckedUpdateInputObjectSchema]), where: tblMailingTemplatesWhereUniqueInputObjectSchema }).strict();