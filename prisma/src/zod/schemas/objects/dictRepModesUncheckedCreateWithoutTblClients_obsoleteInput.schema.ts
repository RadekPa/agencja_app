import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.number().int().optional(),
  RepModeDesc: z.string()
}).strict();
export const dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesUncheckedCreateWithoutTblClients_obsoleteInput>;
export const dictRepModesUncheckedCreateWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
