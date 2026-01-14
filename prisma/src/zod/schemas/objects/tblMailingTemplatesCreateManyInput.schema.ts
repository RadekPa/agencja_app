import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempName: z.string().max(50),
  TempPath: z.string().max(255),
  TempSubject: z.string().max(255)
}).strict();
export const tblMailingTemplatesCreateManyInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesCreateManyInput>;
export const tblMailingTemplatesCreateManyInputObjectZodSchema = makeSchema();
