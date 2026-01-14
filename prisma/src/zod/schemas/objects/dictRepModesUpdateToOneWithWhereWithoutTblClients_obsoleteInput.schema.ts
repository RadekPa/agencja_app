import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './dictRepModesWhereInput.schema';
import { dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUpdateWithoutTblClients_obsoleteInput.schema';
import { dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema as dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRepModesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictRepModesUpdateWithoutTblClients_obsoleteInputObjectSchema), z.lazy(() => dictRepModesUncheckedUpdateWithoutTblClients_obsoleteInputObjectSchema)])
}).strict();
export const dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInput>;
export const dictRepModesUpdateToOneWithWhereWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
