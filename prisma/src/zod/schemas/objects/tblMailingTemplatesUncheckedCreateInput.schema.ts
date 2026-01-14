import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.number().int().optional(),
  TempName: z.string().max(50),
  TempPath: z.string().max(255),
  TempSubject: z.string().max(255)
}).strict();
export const tblMailingTemplatesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesUncheckedCreateInput>;
export const tblMailingTemplatesUncheckedCreateInputObjectZodSchema = makeSchema();
