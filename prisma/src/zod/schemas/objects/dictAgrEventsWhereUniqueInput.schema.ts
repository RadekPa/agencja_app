import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.number().int().optional()
}).strict();
export const dictAgrEventsWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictAgrEventsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsWhereUniqueInput>;
export const dictAgrEventsWhereUniqueInputObjectZodSchema = makeSchema();
