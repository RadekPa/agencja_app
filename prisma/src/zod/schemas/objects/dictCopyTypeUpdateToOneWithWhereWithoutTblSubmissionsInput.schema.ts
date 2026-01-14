import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema';
import { dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInput>;
export const dictCopyTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
