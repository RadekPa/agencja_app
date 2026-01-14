import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.number().int().optional()
}).strict();
export const tblPersonContractTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeWhereUniqueInput>;
export const tblPersonContractTypeWhereUniqueInputObjectZodSchema = makeSchema();
