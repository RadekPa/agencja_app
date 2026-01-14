import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.number().int().optional()
}).strict();
export const dictEventsWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictEventsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsWhereUniqueInput>;
export const dictEventsWhereUniqueInputObjectZodSchema = makeSchema();
