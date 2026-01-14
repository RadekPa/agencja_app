import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateOrConnectWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUpsertWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUpsertWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUpsertWithoutTblClients_obsoleteInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './dictRepModesWhereInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './dictRepModesWhereUniqueInput.schema';
import { dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUpdateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema).optional(),
  upsert: z.lazy(() => dictRepModesUpsertWithoutTblClients_obsoleteInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictRepModesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictRepModesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictRepModesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)]).optional()
}).strict();
export const dictRepModesUpdateOneWithoutTblClients_obsoleteNestedInputObjectSchema: z.ZodType<Prisma.dictRepModesUpdateOneWithoutTblClients_obsoleteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpdateOneWithoutTblClients_obsoleteNestedInput>;
export const dictRepModesUpdateOneWithoutTblClients_obsoleteNestedInputObjectZodSchema = makeSchema();
