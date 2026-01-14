import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.boolean().optional(),
  Description: z.boolean().optional(),
  DescriptionPL: z.boolean().optional()
}).strict();
export const lkpPayTypeSelectObjectSchema: z.ZodType<Prisma.lkpPayTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeSelect>;
export const lkpPayTypeSelectObjectZodSchema = makeSchema();
