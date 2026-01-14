import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './objects/tblMailingTemplatesSelect.schema';
import { tblMailingTemplatesCreateInputObjectSchema as tblMailingTemplatesCreateInputObjectSchema } from './objects/tblMailingTemplatesCreateInput.schema';
import { tblMailingTemplatesUncheckedCreateInputObjectSchema as tblMailingTemplatesUncheckedCreateInputObjectSchema } from './objects/tblMailingTemplatesUncheckedCreateInput.schema';

export const tblMailingTemplatesCreateOneSchema: z.ZodType<Prisma.tblMailingTemplatesCreateArgs> = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  data: z.union([tblMailingTemplatesCreateInputObjectSchema, tblMailingTemplatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesCreateArgs>;

export const tblMailingTemplatesCreateOneZodSchema = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  data: z.union([tblMailingTemplatesCreateInputObjectSchema, tblMailingTemplatesUncheckedCreateInputObjectSchema]) }).strict();