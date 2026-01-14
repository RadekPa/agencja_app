import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeDesc: z.string().max(30)
}).strict();
export const dictRepModesCreateWithoutTblClients_obsoleteInputObjectSchema: z.ZodType<Prisma.dictRepModesCreateWithoutTblClients_obsoleteInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCreateWithoutTblClients_obsoleteInput>;
export const dictRepModesCreateWithoutTblClients_obsoleteInputObjectZodSchema = makeSchema();
