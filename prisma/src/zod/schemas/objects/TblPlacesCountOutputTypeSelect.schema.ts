import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblUserAccess: z.boolean().optional()
}).strict();
export const TblPlacesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblPlacesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesCountOutputTypeSelect>;
export const TblPlacesCountOutputTypeSelectObjectZodSchema = makeSchema();
