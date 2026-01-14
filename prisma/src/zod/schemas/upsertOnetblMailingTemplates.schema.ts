import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './objects/tblMailingTemplatesSelect.schema';
import { tblMailingTemplatesWhereUniqueInputObjectSchema as tblMailingTemplatesWhereUniqueInputObjectSchema } from './objects/tblMailingTemplatesWhereUniqueInput.schema';
import { tblMailingTemplatesCreateInputObjectSchema as tblMailingTemplatesCreateInputObjectSchema } from './objects/tblMailingTemplatesCreateInput.schema';
import { tblMailingTemplatesUncheckedCreateInputObjectSchema as tblMailingTemplatesUncheckedCreateInputObjectSchema } from './objects/tblMailingTemplatesUncheckedCreateInput.schema';
import { tblMailingTemplatesUpdateInputObjectSchema as tblMailingTemplatesUpdateInputObjectSchema } from './objects/tblMailingTemplatesUpdateInput.schema';
import { tblMailingTemplatesUncheckedUpdateInputObjectSchema as tblMailingTemplatesUncheckedUpdateInputObjectSchema } from './objects/tblMailingTemplatesUncheckedUpdateInput.schema';

export const tblMailingTemplatesUpsertOneSchema: z.ZodType<Prisma.tblMailingTemplatesUpsertArgs> = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema, create: z.union([ tblMailingTemplatesCreateInputObjectSchema, tblMailingTemplatesUncheckedCreateInputObjectSchema ]), update: z.union([ tblMailingTemplatesUpdateInputObjectSchema, tblMailingTemplatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesUpsertArgs>;

export const tblMailingTemplatesUpsertOneZodSchema = z.object({ select: tblMailingTemplatesSelectObjectSchema.optional(),  where: tblMailingTemplatesWhereUniqueInputObjectSchema, create: z.union([ tblMailingTemplatesCreateInputObjectSchema, tblMailingTemplatesUncheckedCreateInputObjectSchema ]), update: z.union([ tblMailingTemplatesUpdateInputObjectSchema, tblMailingTemplatesUncheckedUpdateInputObjectSchema ]) }).strict();