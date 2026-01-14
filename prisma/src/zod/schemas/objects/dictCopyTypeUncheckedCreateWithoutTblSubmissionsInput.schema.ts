import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.number().int().optional(),
  CopyType: z.string().optional().nullable(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput>;
export const dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
