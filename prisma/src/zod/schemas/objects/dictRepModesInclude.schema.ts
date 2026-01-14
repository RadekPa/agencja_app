import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteFindManySchema as tblClients_obsoleteFindManySchema } from '../findManytblClients_obsolete.schema';
import { DictRepModesCountOutputTypeArgsObjectSchema as DictRepModesCountOutputTypeArgsObjectSchema } from './DictRepModesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblClients_obsolete: z.union([z.boolean(), z.lazy(() => tblClients_obsoleteFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRepModesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRepModesIncludeObjectSchema: z.ZodType<Prisma.dictRepModesInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesInclude>;
export const dictRepModesIncludeObjectZodSchema = makeSchema();
