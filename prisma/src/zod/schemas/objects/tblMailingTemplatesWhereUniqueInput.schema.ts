import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.number().int().optional()
}).strict();
export const tblMailingTemplatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesWhereUniqueInput>;
export const tblMailingTemplatesWhereUniqueInputObjectZodSchema = makeSchema();
