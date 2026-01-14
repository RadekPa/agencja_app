import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblSeriesIncludeObjectSchema: z.ZodType<Prisma.tblSeriesInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesInclude>;
export const tblSeriesIncludeObjectZodSchema = makeSchema();
