import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string().max(255),
  Status: z.string().max(1).optional().nullable(),
  tblAgrEvents: z.lazy(() => tblAgrEventsUncheckedCreateNestedManyWithoutDictAgrEventsInputObjectSchema).optional()
}).strict();
export const dictAgrEventsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUncheckedCreateInput>;
export const dictAgrEventsUncheckedCreateInputObjectZodSchema = makeSchema();
