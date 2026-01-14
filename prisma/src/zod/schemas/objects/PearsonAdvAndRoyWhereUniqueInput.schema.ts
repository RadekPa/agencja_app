import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.number().optional()
}).strict();
export const PearsonAdvAndRoyWhereUniqueInputObjectSchema: z.ZodType<Prisma.PearsonAdvAndRoyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyWhereUniqueInput>;
export const PearsonAdvAndRoyWhereUniqueInputObjectZodSchema = makeSchema();
