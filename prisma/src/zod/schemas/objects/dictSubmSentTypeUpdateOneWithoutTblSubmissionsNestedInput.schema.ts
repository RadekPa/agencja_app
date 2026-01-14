import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUpsertWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUpsertWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUpsertWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './dictSubmSentTypeWhereInput.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './dictSubmSentTypeWhereUniqueInput.schema';
import { dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictSubmSentTypeUpsertWithoutTblSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictSubmSentTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictSubmSentTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictSubmSentTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeUpdateOneWithoutTblSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUpdateOneWithoutTblSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateOneWithoutTblSubmissionsNestedInput>;
export const dictSubmSentTypeUpdateOneWithoutTblSubmissionsNestedInputObjectZodSchema = makeSchema();
