import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteFindManySchema as tblClients_obsoleteFindManySchema } from '../findManytblClients_obsolete.schema';
import { DictRepModesCountOutputTypeArgsObjectSchema as DictRepModesCountOutputTypeArgsObjectSchema } from './DictRepModesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  RepModeID: z.boolean().optional(),
  RepModeDesc: z.boolean().optional(),
  tblClients_obsolete: z.union([z.boolean(), z.lazy(() => tblClients_obsoleteFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRepModesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRepModesSelectObjectSchema: z.ZodType<Prisma.dictRepModesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesSelect>;
export const dictRepModesSelectObjectZodSchema = makeSchema();
