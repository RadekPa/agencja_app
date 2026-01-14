import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema as tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateNestedManyWithoutDictEventsInput.schema';
import { tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema as tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string().max(50),
  tblSubmEvents: z.lazy(() => tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsCreateInputObjectSchema: z.ZodType<Prisma.dictEventsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateInput>;
export const dictEventsCreateInputObjectZodSchema = makeSchema();
