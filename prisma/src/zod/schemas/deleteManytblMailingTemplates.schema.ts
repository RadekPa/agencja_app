import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingTemplatesWhereInputObjectSchema as tblMailingTemplatesWhereInputObjectSchema } from './objects/tblMailingTemplatesWhereInput.schema';

export const tblMailingTemplatesDeleteManySchema: z.ZodType<Prisma.tblMailingTemplatesDeleteManyArgs> = z.object({ where: tblMailingTemplatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingTemplatesDeleteManyArgs>;

export const tblMailingTemplatesDeleteManyZodSchema = z.object({ where: tblMailingTemplatesWhereInputObjectSchema.optional() }).strict();