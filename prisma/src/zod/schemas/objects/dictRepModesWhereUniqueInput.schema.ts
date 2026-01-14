import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.number().int().optional()
}).strict();
export const dictRepModesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictRepModesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesWhereUniqueInput>;
export const dictRepModesWhereUniqueInputObjectZodSchema = makeSchema();
