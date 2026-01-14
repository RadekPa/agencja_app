import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblTitAuthors: z.boolean().optional()
}).strict();
export const TblAuthorsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblAuthorsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblAuthorsCountOutputTypeSelect>;
export const TblAuthorsCountOutputTypeSelectObjectZodSchema = makeSchema();
