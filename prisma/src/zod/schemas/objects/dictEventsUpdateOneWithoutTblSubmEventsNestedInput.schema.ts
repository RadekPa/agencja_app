import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsCreateWithoutTblSubmEventsInputObjectSchema as dictEventsCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema as dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateOrConnectWithoutTblSubmEventsInput.schema';
import { dictEventsUpsertWithoutTblSubmEventsInputObjectSchema as dictEventsUpsertWithoutTblSubmEventsInputObjectSchema } from './dictEventsUpsertWithoutTblSubmEventsInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema';
import { dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema as dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema } from './dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInput.schema';
import { dictEventsUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUpdateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictEventsUpsertWithoutTblSubmEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictEventsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)]).optional()
}).strict();
export const dictEventsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateOneWithoutTblSubmEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateOneWithoutTblSubmEventsNestedInput>;
export const dictEventsUpdateOneWithoutTblSubmEventsNestedInputObjectZodSchema = makeSchema();
