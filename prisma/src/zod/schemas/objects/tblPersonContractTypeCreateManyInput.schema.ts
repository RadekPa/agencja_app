import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.number().int(),
  CTypeDescr: z.string().max(10).optional().nullable()
}).strict();
export const tblPersonContractTypeCreateManyInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeCreateManyInput>;
export const tblPersonContractTypeCreateManyInputObjectZodSchema = makeSchema();
