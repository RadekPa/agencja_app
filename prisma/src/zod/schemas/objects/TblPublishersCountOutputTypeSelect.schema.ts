import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblPubISBN: z.boolean().optional()
}).strict();
export const TblPublishersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblPublishersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersCountOutputTypeSelect>;
export const TblPublishersCountOutputTypeSelectObjectZodSchema = makeSchema();
