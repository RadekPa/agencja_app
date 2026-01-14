import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUpdateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './dictRepModesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)]),
  create: z.union([z.lazy(() => dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]),
  where: z.lazy(() => dictRepModesWhereInputObjectSchema).optional()
}).strict();
export const dictRepModesUpsertWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesUpsertWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpsertWithoutTblClients_obsoleteInput>;
export const dictRepModesUpsertWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
