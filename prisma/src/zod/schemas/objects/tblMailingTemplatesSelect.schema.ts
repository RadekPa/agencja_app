import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.boolean().optional(),
  TempName: z.boolean().optional(),
  TempPath: z.boolean().optional(),
  TempSubject: z.boolean().optional()
}).strict();
export const tblMailingTemplatesSelectObjectSchema: z.ZodType<Prisma.tblMailingTemplatesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesSelect>;
export const tblMailingTemplatesSelectObjectZodSchema = makeSchema();
