import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]),
  where: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUpsertWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpsertWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpsertWithoutTblSubmissionsInput>;
export const dictCopyTypeUpsertWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
