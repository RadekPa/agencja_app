import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './dictRepModesWhereUniqueInput.schema';
import { dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRepModesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)])
}).strict();
export const dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesCreateOrConnectWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCreateOrConnectWithoutTblClients_obsoleteInput>;
export const dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
