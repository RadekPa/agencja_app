import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.number().int().optional()
}).strict();
export const dictCustTypesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCustTypesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesWhereUniqueInput>;
export const dictCustTypesWhereUniqueInputObjectZodSchema = makeSchema();
