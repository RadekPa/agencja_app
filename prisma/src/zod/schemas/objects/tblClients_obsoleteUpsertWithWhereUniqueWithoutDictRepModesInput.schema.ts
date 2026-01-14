import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUpdateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutDictRepModesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedUpdateWithoutDictRepModesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema)])
}).strict();
export const tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInput>;
export const tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectZodSchema = makeSchema();
