import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictRepModesArgsObjectSchema as dictRepModesArgsObjectSchema } from './dictRepModesArgs.schema'

const makeSchema = () => z.object({
  CustID: z.boolean().optional(),
  RepModeID: z.boolean().optional(),
  GraalID: z.boolean().optional(),
  Commission: z.boolean().optional(),
  DefAgrDoc: z.boolean().optional(),
  Jurisdiction: z.boolean().optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictRepModes: z.union([z.boolean(), z.lazy(() => dictRepModesArgsObjectSchema)]).optional()
}).strict();
export const tblClients_obsoleteSelectObjectSchema: z.ZodType<Prisma.tblClients_obsoleteSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteSelect>;
export const tblClients_obsoleteSelectObjectZodSchema = makeSchema();
