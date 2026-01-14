import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateNestedManyWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateNestedManyWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateNestedManyWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  RepModeDesc: z.string().max(30),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteCreateNestedManyWithoutDictRepModesInputObjectSchema).optional()
}).strict();
export const dictRepModesCreateInputObjectSchema: z.ZodType<Prisma.dictRepModesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCreateInput>;
export const dictRepModesCreateInputObjectZodSchema = makeSchema();
