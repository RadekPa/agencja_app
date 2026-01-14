import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUpdateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema)])
}).strict();
export const tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInput>;
export const tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectZodSchema = makeSchema();
