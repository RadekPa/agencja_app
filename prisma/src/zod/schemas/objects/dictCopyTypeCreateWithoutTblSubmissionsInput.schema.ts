import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyType: z.string().max(30).optional().nullable(),
  tblTitEvents: z.lazy(() => tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateWithoutTblSubmissionsInput>;
export const dictCopyTypeCreateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
