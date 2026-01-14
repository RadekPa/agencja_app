import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string(),
  Status: z.string().optional().nullable()
}).strict();
export const dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput>;
export const dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
