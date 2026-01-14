import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedCreateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedCreateWithoutTblTitEventsInput>;
export const dictEventsUncheckedCreateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
