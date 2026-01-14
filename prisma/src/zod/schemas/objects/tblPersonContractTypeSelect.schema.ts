import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.boolean().optional(),
  CTypeDescr: z.boolean().optional()
}).strict();
export const tblPersonContractTypeSelectObjectSchema: z.ZodType<Prisma.tblPersonContractTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeSelect>;
export const tblPersonContractTypeSelectObjectZodSchema = makeSchema();
