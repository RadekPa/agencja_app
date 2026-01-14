import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedCreateWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedCreateWithoutTblSubmEventsInput>;
export const dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
