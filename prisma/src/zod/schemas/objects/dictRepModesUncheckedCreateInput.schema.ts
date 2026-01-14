import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  RepModeID: z.number().int().optional(),
  RepModeDesc: z.string().max(30),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteUncheckedCreateNestedManyWithoutDictRepModesInputObjectSchema).optional()
}).strict();
export const dictRepModesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictRepModesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUncheckedCreateInput>;
export const dictRepModesUncheckedCreateInputObjectZodSchema = makeSchema();
