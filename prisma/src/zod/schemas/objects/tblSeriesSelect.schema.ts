import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  SeriesID: z.boolean().optional(),
  CustID: z.boolean().optional(),
  SeriesFullName: z.boolean().optional(),
  SeriesShortName: z.boolean().optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblSeriesSelectObjectSchema: z.ZodType<Prisma.tblSeriesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesSelect>;
export const tblSeriesSelectObjectZodSchema = makeSchema();
