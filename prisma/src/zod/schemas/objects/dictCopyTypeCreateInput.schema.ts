import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateNestedManyWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyType: z.string().max(30).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeCreateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateInput>;
export const dictCopyTypeCreateInputObjectZodSchema = makeSchema();
