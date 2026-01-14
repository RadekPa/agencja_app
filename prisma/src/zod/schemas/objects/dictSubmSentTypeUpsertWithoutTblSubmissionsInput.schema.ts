import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './dictSubmSentTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]),
  where: z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeUpsertWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUpsertWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpsertWithoutTblSubmissionsInput>;
export const dictSubmSentTypeUpsertWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
