import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { dictRepModesArgsObjectSchema as dictRepModesArgsObjectSchema } from './dictRepModesArgs.schema'

const makeSchema = () => z.object({
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  dictRepModes: z.union([z.boolean(), z.lazy(() => dictRepModesArgsObjectSchema)]).optional()
}).strict();
export const tblClients_obsoleteIncludeObjectSchema: z.ZodType<Prisma.tblClients_obsoleteInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteInclude>;
export const tblClients_obsoleteIncludeObjectZodSchema = makeSchema();
