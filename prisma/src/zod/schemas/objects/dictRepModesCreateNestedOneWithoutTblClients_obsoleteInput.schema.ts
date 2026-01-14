import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateOrConnectWithoutTblClients_obsoleteInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './dictRepModesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRepModesCreateOrConnectWithoutTblClients_obsoleteInputObjectSchema).optional(),
  connect: z.lazy(() => dictRepModesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesCreateNestedOneWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCreateNestedOneWithoutTblClients_obsoleteInput>;
export const dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
