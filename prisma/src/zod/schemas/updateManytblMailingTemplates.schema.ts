import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesUpdateManyMutationInputObjectSchema as tblMailingTemplatesUpdateManyMutationInputObjectSchema } from './objects/tblMailingTemplatesUpdateManyMutationInput.schema';
import { tblMailingTemplatesWhereInputObjectSchema as tblMailingTemplatesWhereInputObjectSchema } from './objects/tblMailingTemplatesWhereInput.schema';

export const tblMailingTemplatesUpdateManySchema: z.ZodType<Prisma.tblMailingTemplatesUpdateManyArgs> = z.object({ data: tblMailingTemplatesUpdateManyMutationInputObjectSchema, where: tblMailingTemplatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesUpdateManyArgs>;

export const tblMailingTemplatesUpdateManyZodSchema = z.object({ data: tblMailingTemplatesUpdateManyMutationInputObjectSchema, where: tblMailingTemplatesWhereInputObjectSchema.optional() }).strict();