import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.number().int().optional()
}).strict();
export const ArTransactionDetailWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailWhereUniqueInput>;
export const ArTransactionDetailWhereUniqueInputObjectZodSchema = makeSchema();
